import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dataPath = path.join(root, "data", "admission-requirements.json");
const payload = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const args = process.argv.slice(2);
const limitArg = args.find((arg) => arg.startsWith("--limit="));
const nameArg = args.find((arg) => arg.startsWith("--name="));
const limit = limitArg ? Number(limitArg.split("=")[1]) : 10;
const nameFilter = nameArg ? nameArg.split("=").slice(1).join("=").toLowerCase() : "";

const linkKeywords = [
  "募集要項",
  "外国人留学生",
  "留学生入試",
  "私費外国人",
  "入学試験要項",
  "admission",
  "entrance",
  "international",
  "application",
  "undergraduate",
];

function absolutizeUrl(href, base) {
  try {
    return new URL(href, base).toString();
  } catch {
    return "";
  }
}

function stripTags(value) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findCandidateLinks(html, baseUrl) {
  const links = [];
  const anchorPattern = /<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  while ((match = anchorPattern.exec(html))) {
    const href = absolutizeUrl(match[1], baseUrl);
    const label = stripTags(match[2]);
    const haystack = `${href} ${label}`.toLowerCase();
    const score = linkKeywords.reduce(
      (sum, keyword) => sum + (haystack.includes(keyword.toLowerCase()) ? 1 : 0),
      0,
    );
    if (href && score > 0) links.push({ href, label, score });
  }
  return links.sort((a, b) => b.score - a.score || a.href.localeCompare(b.href));
}

function extractHtmlFacts(html) {
  const text = stripTags(html);
  const sentences = text
    .split(/(?<=[。.!?])\s+|\s{2,}/)
    .map((item) => item.trim())
    .filter(Boolean);
  const useful = sentences.filter((sentence) =>
    /EJU|日本留学試験|JLPT|日本語能力試験|TOEFL|IELTS|出願|募集要項|外国人留学生|私費外国人/.test(sentence),
  );
  return useful.slice(0, 8);
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (compatible; JapanStudyGuideBot/0.1; local data extraction for student site)",
    },
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) return { text: "", contentType };
  return { text: await response.text(), contentType };
}

let processed = 0;

for (const record of Object.values(payload.records)) {
  if (processed >= limit) break;
  if (record.status !== "pending_official_extraction") continue;
  if (nameFilter && !record.universityName.toLowerCase().includes(nameFilter)) continue;
  if (!record.officialUrl) continue;

  try {
    const { text } = await fetchText(record.officialUrl);
    if (!text) continue;
    const links = findCandidateLinks(text, record.officialUrl);
    const best = links[0];
    const snippets = extractHtmlFacts(text);

    if (best || snippets.length) {
      record.status = "official_partial";
      record.admissionPageUrl = best?.href || record.officialUrl;
      record.sourceTitle = best?.label || "大学公式ページ";
      record.sourceCheckedAt = new Date().toISOString().slice(0, 10);
      record.notes = [
        "公式ページから候補リンクまたは関連記述を抽取。PDF募集要項の精読は未完了。",
        ...snippets,
      ].join(" ");
      processed += 1;
      console.log(`partial: ${record.universityName} -> ${record.admissionPageUrl}`);
    }
  } catch (error) {
    record.notes = `公式ページ取得失敗: ${error.message}`;
  }
}

payload.meta.lastExtractionRunAt = new Date().toISOString();
payload.meta.partialCount = Object.values(payload.records).filter(
  (record) => record.status === "official_partial",
).length;
payload.meta.extractedCount = Object.values(payload.records).filter(
  (record) => record.status === "official_extracted",
).length;

fs.writeFileSync(dataPath, `${JSON.stringify(payload, null, 2)}\n`);
console.log(`Processed ${processed} records. partial=${payload.meta.partialCount}`);
