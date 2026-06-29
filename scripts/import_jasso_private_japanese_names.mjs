import fs from "node:fs";
import path from "node:path";

const sourceUrl = "https://www.jasso.go.jp/ryugaku/eju/examinee/use/uni_private.html";
const root = process.cwd();
const privatePath = path.join(root, "data", "private-universities.json");

function decodeHtml(value) {
  return String(value)
    .replace(/<span[^>]*>\s*<\/span>/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeOfficialUrl(href) {
  try {
    return new URL(href, sourceUrl).toString();
  } catch {
    return href;
  }
}

const response = await fetch(sourceUrl);
if (!response.ok) {
  throw new Error(`Failed to fetch JASSO page: ${response.status}`);
}

const html = await response.text();
const start = html.indexOf("<h2>私立大学");
const targetHtml = start >= 0 ? html.slice(start) : html;
const links = [];
const nonSchoolLabels = new Set([
  "北海道、東北",
  "関東",
  "中部",
  "近畿",
  "中国、四国",
  "九州、沖縄",
]);
const linkPattern = /<a\s+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;

for (const match of targetHtml.matchAll(linkPattern)) {
  const name = decodeHtml(match[2]);
  const href = match[1];
  if (!href || href.startsWith("#") || href.includes("uni_private.html#")) continue;
  if (!/^https?:\/\//.test(href)) continue;
  if (!name || nonSchoolLabels.has(name) || /^[^\s]+県$/.test(name)) continue;
  if (name.includes("日本留学試験") || name.includes("English")) continue;
  links.push({ name, official: normalizeOfficialUrl(href) });
}

const privateUniversities = JSON.parse(fs.readFileSync(privatePath, "utf8"));
if (links.length !== privateUniversities.length) {
  console.warn(`JASSO private count ${links.length} differs from local count ${privateUniversities.length}; updating by index for common range.`);
}

const updated = privateUniversities.map((university, index) => {
  const source = links[index];
  if (!source) return university;
  const oldName = university.name;
  const aliases = [...new Set([oldName, ...(university.aliases ?? [])].filter(Boolean))];
  return {
    ...university,
    name: source.name,
    official: source.official || university.official,
    aliases,
  };
});

fs.writeFileSync(privatePath, `${JSON.stringify(updated, null, 2)}\n`);
console.log(`Updated ${Math.min(links.length, privateUniversities.length)} private university names to Japanese display names.`);
