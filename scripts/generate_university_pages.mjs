import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const admission = JSON.parse(fs.readFileSync(path.join(root, "data/admission-requirements.json"), "utf8"));
const privateUniversities = JSON.parse(fs.readFileSync(path.join(root, "data/private-universities.json"), "utf8"));
const nationalPublicUniversities = JSON.parse(fs.readFileSync(path.join(root, "data/national-public-universities.json"), "utf8"));

const popularNames = [
  "東京大学",
  "京都大学",
  "大阪大学",
  "北海道大学",
  "東北大学",
  "名古屋大学",
  "九州大学",
  "筑波大学",
  "広島大学",
  "岡山大学",
  "早稲田大学",
  "慶應義塾大学",
  "上智大学",
  "明治大学",
  "青山学院大学",
  "立教大学",
  "中央大学",
  "法政大学",
  "学習院大学",
  "同志社大学",
  "立命館大学",
  "関西大学",
  "関西学院大学",
  "南山大学",
  "東洋大学",
  "明治学院大学",
  "日本大学",
  "駒澤大学",
  "専修大学",
  "成蹊大学",
  "國學院大学",
  "近畿大学",
  "龍谷大学",
  "京都産業大学",
  "甲南大学",
  "名城大学",
  "中京大学",
  "愛知大学",
  "愛知学院大学",
  "名古屋外国語大学",
  "福岡大学",
  "西南学院大学",
  "東京理科大学",
  "芝浦工業大学",
  "東京電機大学",
  "東京都市大学",
  "工学院大学",
  "APU",
  "立命館アジア太平洋大学",
  "武蔵野大学",
  "武蔵大学",
  "武蔵野美術大学",
];

const records = Object.values(admission.records || {});
const universityRows = [...privateUniversities, ...nationalPublicUniversities];

const nameAliases = {
  "東京大学": ["The University of Tokyo"],
  "京都大学": ["Kyoto University"],
  "大阪大学": ["Osaka University"],
  "北海道大学": ["Hokkaido University"],
  "東北大学": ["Tohoku University"],
  "名古屋大学": ["Nagoya University"],
  "九州大学": ["Kyushu University"],
  "筑波大学": ["University of Tsukuba"],
  "広島大学": ["Hiroshima University"],
  "岡山大学": ["Okayama University"],
  "早稲田大学": ["Waseda University"],
  "慶應義塾大学": ["Keio University"],
  "上智大学": ["Sophia University"],
  "明治大学": ["Meiji University"],
  "青山学院大学": ["Aoyama Gakuin University"],
  "立教大学": ["Rikkyo University"],
  "中央大学": ["Chuo University"],
  "法政大学": ["Hosei University"],
  "学習院大学": ["Gakushuin University"],
  "同志社大学": ["Doshisha University"],
  "立命館大学": ["Ritsumeikan University"],
  "関西大学": ["Kansai University"],
  "関西学院大学": ["Kwansei Gakuin University"],
  "南山大学": ["Nanzan University"],
  "東洋大学": ["Toyo University"],
  "明治学院大学": ["Meiji Gakuin University"],
  "日本大学": ["Nihon University"],
  "駒澤大学": ["Komazawa University"],
  "専修大学": ["Senshu University"],
  "成蹊大学": ["Seikei University"],
  "國學院大学": ["Kokugakuin University"],
  "近畿大学": ["Kindai University"],
  "龍谷大学": ["Ryukoku University"],
  "京都産業大学": ["Kyoto Sangyo University"],
  "甲南大学": ["Konan University"],
  "名城大学": ["Meijo University"],
  "中京大学": ["Chukyo University"],
  "愛知大学": ["Aichi University"],
  "愛知学院大学": ["Aichi Gakuin University"],
  "名古屋外国語大学": ["Nagoya University of Foreign Studies"],
  "福岡大学": ["Fukuoka University"],
  "西南学院大学": ["Seinan Gakuin University"],
  "東京理科大学": ["Tokyo University of Science"],
  "芝浦工業大学": ["Shibaura Institute of Technology"],
  "東京電機大学": ["Tokyo Denki University"],
  "東京都市大学": ["Tokyo City University"],
  "工学院大学": ["Kogakuin University"],
  "APU": ["立命館アジア太平洋大学", "Ritsumeikan Asia Pacific University"],
};

const slugOverrides = {
  "東京大学": "the-university-of-tokyo",
  "京都大学": "kyoto-university",
  "大阪大学": "osaka-university",
  "北海道大学": "hokkaido-university",
  "東北大学": "tohoku-university",
  "名古屋大学": "nagoya-university",
  "九州大学": "kyushu-university",
  "筑波大学": "university-of-tsukuba",
  "広島大学": "hiroshima-university",
  "岡山大学": "okayama-university",
  "中央大学": "chuo-university",
  "関西学院大学": "kwansei-gakuin-university",
  "近畿大学": "kindai-university",
  "APU": "ritsumeikan-asia-pacific-university",
};

const blockedAliases = new Set(["Shitennoji University"]);

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFKC")
    .replace(/university|college|institute|of|the|大学|大學|学院|學院|学校|校/g, "")
    .replace(/[^\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}a-z0-9]/gu, "");
}

function normalizeExact(value) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFKC")
    .replace(/大學/g, "大学")
    .replace(/學院/g, "学院")
    .replace(/[^\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}a-z0-9]/gu, "");
}

function slugify(value) {
  const ascii = String(value)
    .normalize("NFKC")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  if (ascii) return ascii;
  return encodeURIComponent(value).replaceAll("%", "").toLowerCase().slice(0, 60);
}

function displayName(row, record, fallback) {
  const name = row?.name || record?.universityName || fallback;
  const match = String(name).match(/^(.+?大学)/);
  return match ? match[1] : name;
}

function findRow(name) {
  const primary = normalizeExact(name);
  const byName = universityRows.find((row) => normalizeExact(row.name) === primary);
  if (byName) return byName;

  const candidates = [name, ...(nameAliases[name] || [])].map(normalizeExact).filter(Boolean);
  return universityRows.find((row) => {
    const aliases = (row.aliases || []).filter((alias) => !blockedAliases.has(alias));
    const terms = [row.name, ...(aliases || [])].map(normalizeExact);
    return candidates.some((candidate) => terms.includes(candidate));
  });
}

function findRecord(name) {
  const candidates = [name, ...(nameAliases[name] || [])].map(normalizeExact).filter(Boolean);
  return records.find((record) => {
    const terms = [record.universityName].map(normalizeExact);
    return candidates.some((candidate) => terms.includes(candidate));
  });
}

function statusLabel(status) {
  return {
    official_extracted: "募集要項から抽取済み",
    official_partial: "公式ページから一部抽取済み",
    unavailable: "公式確認済み・該当情報未公開",
    pending_official_extraction: "抽取待ち",
  }[status] || "未確認";
}

function list(items) {
  if (!items?.length) return "<li>未抽取。大学公式の最新募集要項を確認してください。</li>";
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function timeline(items) {
  if (!items?.length) return "<li><span>日程</span><strong>未抽取</strong></li>";
  return items.map((item) => `<li><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong></li>`).join("");
}

const selected = popularNames
  .map((name) => {
    const row = findRow(name);
    const record = findRecord(name);
    if (!row && !record) return null;
    const title = displayName(row, record, name);
    const slug = slugOverrides[name] || slugify((row?.aliases || []).find((alias) => !blockedAliases.has(alias)) || row?.name || record?.universityName || title);
    return { name, title, row, record, slug };
  })
  .filter(Boolean);

const unique = [...new Map(selected.map((item) => [item.slug, item])).values()].slice(0, 52);
const pages = {};

for (const item of unique) {
  const dir = path.join(root, "universities", item.slug);
  fs.mkdirSync(dir, { recursive: true });
  const official = item.record?.admissionPageUrl || item.record?.officialUrl || item.row?.official || "../";
  const checked = item.record?.sourceCheckedAt || admission.meta?.generatedAt?.slice(0, 10) || "未確認";
  pages[item.name] = `universities/${item.slug}/`;
  pages[item.title] = `universities/${item.slug}/`;
  if (item.row?.name) pages[item.row.name] = `universities/${item.slug}/`;
  for (const alias of item.row?.aliases || []) {
    if (!blockedAliases.has(alias)) pages[alias] = `universities/${item.slug}/`;
  }
  for (const alias of nameAliases[item.name] || []) pages[alias] = `universities/${item.slug}/`;

  const html = `<!doctype html>
<html lang="zh-Hans">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(item.title)} | ISJ大学资料</title>
    <meta name="description" content="${escapeHtml(item.title)}の外国人留学生入試、EJU、JLPT、英語、出願日程、公式募集要項リンクを整理。">
    <link rel="canonical" href="https://lin0513a.github.io/JAPAN-INTERNATIONAL-STUDY/universities/${item.slug}/">
    <link rel="stylesheet" href="../../styles.css?v=20260710-roadmap">
  </head>
  <body class="detail-page">
    <main class="section university-detail-page">
      <a class="text-link" href="../../#universities">← ISJ大学検索へ戻る</a>
      <div class="section-heading">
        <p class="eyebrow">University Detail</p>
        <h1>${escapeHtml(item.title)}</h1>
        <p>最終確認日: ${escapeHtml(checked)}。このページはISJの募集要項DBから生成しています。正式出願前は必ず大学公式の最新募集要項を確認してください。</p>
      </div>
      <div class="detail-page-grid">
        <article class="detail-page-card">
          <h2>出願資格</h2>
          <p>${escapeHtml(item.record?.eligibility || item.row?.requirement || "募集要項から未抽取。大学公式ページで確認してください。")}</p>
        </article>
        <article class="detail-page-card">
          <h2>EJU科目</h2>
          <ul>${list(item.record?.ejuSubjects)}</ul>
        </article>
        <article class="detail-page-card">
          <h2>JLPT・英語</h2>
          <p><strong>JLPT:</strong> ${escapeHtml(item.record?.jlptRequirement || "未抽取 / 明記なし")}</p>
          <p><strong>英語:</strong> ${escapeHtml(item.record?.englishRequirement || "未抽取 / 明記なし")}</p>
        </article>
        <article class="detail-page-card">
          <h2>最低成績・参考帯</h2>
          <p>${escapeHtml(item.record?.officialMinimumScore || item.row?.line || "公式最低点は未抽取。公開されている場合のみ公式資料を優先。")}</p>
        </article>
        <article class="detail-page-card wide">
          <h2>時間节点</h2>
          <ul class="planner-timeline">${timeline(item.record?.timeline)}</ul>
        </article>
        <article class="detail-page-card wide">
          <h2>公式リンク</h2>
          <p><a class="button primary" href="${escapeHtml(official)}" target="_blank" rel="noreferrer">募集要項・大学公式ページを開く</a></p>
          <p>${escapeHtml(item.record?.sourceTitle || item.row?.source || "大学公式情報")}</p>
          <p class="small-note">データ状態: ${escapeHtml(statusLabel(item.record?.status))}</p>
        </article>
      </div>
    </main>
  </body>
</html>
`;
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

fs.writeFileSync(
  path.join(root, "data/university-pages-data.js"),
  `window.__UNIVERSITY_DETAIL_PAGES__ = ${JSON.stringify(pages, null, 2)};\n`,
);

console.log(`Generated ${unique.length} university pages.`);
