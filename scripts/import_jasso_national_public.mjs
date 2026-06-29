import fs from "node:fs";
import path from "node:path";

const sourceUrl = "https://www.jasso.go.jp/ryugaku/eju/examinee/use/uni_national.html";
const root = process.cwd();
const outPath = path.join(root, "data", "national-public-universities.json");

const regionByHeading = {
  "北海道、東北": { region: "tohoku", prefecture: "北海道・東北" },
  "関東": { region: "kanto", prefecture: "関東" },
  "中部": { region: "chubu", prefecture: "中部" },
  "近畿": { region: "kansai", prefecture: "近畿" },
  "中国、四国": { region: "chugoku_shikoku", prefecture: "中国・四国" },
  "九州、沖縄": { region: "kyushu", prefecture: "九州・沖縄" },
};

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
  if (!href) return "";
  try {
    return new URL(href, sourceUrl).toString();
  } catch {
    return href;
  }
}

function classifyBlock(html, index) {
  const prefix = html.slice(0, index);
  const lastNational = prefix.lastIndexOf("<h2>国立大学");
  const lastPublic = prefix.lastIndexOf("<h2>公立大学");
  return lastPublic > lastNational ? "public" : "national";
}

const response = await fetch(sourceUrl);
if (!response.ok) {
  throw new Error(`Failed to fetch JASSO page: ${response.status}`);
}

const html = await response.text();
const items = [];
const headingPattern = /<h3[^>]*id="(nauniv|lpuniv)\d+"[^>]*>([\s\S]*?)<\/h3>\s*<\/div>\s*<div class="discList">\s*<ul>([\s\S]*?)<\/ul>/g;

for (const match of html.matchAll(headingPattern)) {
  const heading = decodeHtml(match[2]);
  const regionMeta = regionByHeading[heading] ?? { region: "any", prefecture: heading };
  const schoolType = classifyBlock(html, match.index);
  const listHtml = match[3];
  const linkPattern = /<a\s+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
  for (const link of listHtml.matchAll(linkPattern)) {
    const name = decodeHtml(link[2]);
    if (!name || name.includes("日本留学試験")) continue;
    items.push({
      name,
      prefecture: regionMeta.prefecture,
      region: regionMeta.region,
      type: schoolType,
      route: schoolType === "national" ? "国立大学・EJU利用校" : "公立大学・EJU利用校",
      fields: ["humanities", "science"],
      line:
        "JASSO国公立大学EJU利用校リスト掲載。学部・研究科ごとの科目、出願資格、日程は大学公式募集要項で確認。",
      requirement:
        "EJU利用有無はJASSO公式リスト由来。正式な出願資格、科目、点数、提出書類は大学・学部別の最新募集要項を優先。",
      official: normalizeOfficialUrl(link[1]),
      source: "JASSO List of National/Public Universities using EJU (as of May 2026)",
    });
  }
}

const seen = new Set();
const unique = items.filter((item) => {
  const key = item.name;
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});

fs.writeFileSync(outPath, `${JSON.stringify(unique, null, 2)}\n`);
console.log(`Wrote ${unique.length} national/public universities to ${outPath}`);
