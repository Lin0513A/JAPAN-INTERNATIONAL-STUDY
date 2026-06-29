import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const privatePath = path.join(root, "data", "private-universities.json");
const nationalPublicPath = path.join(root, "data", "national-public-universities.json");
const outPath = path.join(root, "data", "admission-requirements.json");

const privateUniversities = JSON.parse(fs.readFileSync(privatePath, "utf8"));
const nationalPublicUniversities = fs.existsSync(nationalPublicPath)
  ? JSON.parse(fs.readFileSync(nationalPublicPath, "utf8"))
  : [];
const existingPayload = fs.existsSync(outPath) ? JSON.parse(fs.readFileSync(outPath, "utf8")) : {};
const existingRecords = existingPayload.records ?? {};

const featuredUniversities = [
  ["东京大学 PEAK / GSC", "https://www.u-tokyo.ac.jp/ja/admissions/index.html"],
  ["早稻田大学 国际招生", "https://www.waseda.jp/inst/admission/undergraduate/"],
  ["上智大学 English-taught Programs", "https://adm.sophia.ac.jp/jpn/"],
  ["筑波大学 Global Issues / English Programs", "https://www.tsukuba.ac.jp/admission/"],
  ["北海道大学 MJSP / ISP", "https://www.hokudai.ac.jp/admission/"],
  ["东北大学 Gateway College / 国际本科", "https://www.tohoku.ac.jp/japanese/admissions/"],
  ["名古屋大学 G30", "https://www.nagoya-u.ac.jp/admissions/"],
  ["京都大学 Kyoto iUP", "https://www.kyoto-u.ac.jp/ja/admissions"],
  ["大阪大学 国际本科", "https://www.osaka-u.ac.jp/ja/admissions"],
  ["九州大学 共创学部 / International Programs", "https://www.kyushu-u.ac.jp/ja/admission/"],
  ["广岛大学 国际招生", "https://www.hiroshima-u.ac.jp/nyushi"],
  ["南山大学 Nanzan University", "https://www.nanzan-u.ac.jp/admission/"],
  ["立命馆大学 English-medium Undergraduate", "https://en.ritsumei.ac.jp/admissions/"],
  ["立命馆亚洲太平洋大学 APU", "https://admissions.apu.ac.jp/"],
];

function createPendingRecord(university) {
  return {
    universityName: university.name,
    status: "pending_official_extraction",
    officialUrl: university.official || "",
    admissionPageUrl: "",
    sourceTitle: "",
    sourceCheckedAt: "",
    eligibility: "",
    officialMinimumScore: "",
    ejuSubjects: [],
    englishRequirement: "",
    jlptRequirement: "",
    timeline: [],
    notes:
      "已登记为募集要項抽取对象。抽取完成前，只能显示JASSO利用有無、大学公式链接和本站参考带。",
  };
}

const records = {};

for (const university of privateUniversities) {
  records[university.name] = {
    ...createPendingRecord(university),
    ...(existingRecords[university.name] ?? {}),
  };
}

for (const university of nationalPublicUniversities) {
  records[university.name] = {
    ...createPendingRecord(university),
    ...(existingRecords[university.name] ?? {}),
  };
}

for (const [name, official] of featuredUniversities) {
  records[name] ??= {
    ...createPendingRecord({ name, official }),
    ...(existingRecords[name] ?? {}),
  };
}

const payload = {
  meta: {
    ...(existingPayload.meta ?? {}),
    generatedAt: new Date().toISOString(),
    purpose:
      "Official admissions requirement database. Each record should be replaced with data extracted from the university's latest official 募集要項.",
    statuses: {
      pending_official_extraction: "大学は登録済みだが、募集要項から未抽取",
      official_extracted: "募集要項から抽取済み",
      official_partial: "公式ページから一部抽取済み",
      unavailable: "募集要項ページを確認したが該当情報未公開",
    },
    recordCount: Object.keys(records).length,
    partialCount: Object.values(records).filter((record) => record.status === "official_partial").length,
    extractedCount: Object.values(records).filter((record) => record.status === "official_extracted").length,
  },
  records,
};

fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`);
console.log(`Wrote ${Object.keys(records).length} records to ${outPath}`);
