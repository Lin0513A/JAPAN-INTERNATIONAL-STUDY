import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dataDir = path.join(root, "data");

const files = [
  {
    json: "private-universities.json",
    js: "private-universities-data.js",
    globalName: "__PRIVATE_UNIVERSITIES__",
  },
  {
    json: "national-public-universities.json",
    js: "national-public-universities-data.js",
    globalName: "__NATIONAL_PUBLIC_UNIVERSITIES__",
  },
  {
    json: "admission-requirements.json",
    js: "admission-requirements-data.js",
    globalName: "__ADMISSION_REQUIREMENTS__",
  },
];

for (const item of files) {
  const sourcePath = path.join(dataDir, item.json);
  const outputPath = path.join(dataDir, item.js);
  const parsed = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
  const body = `window.${item.globalName} = ${JSON.stringify(parsed)};\n`;
  fs.writeFileSync(outputPath, body);
  console.log(`Wrote ${path.relative(root, outputPath)}`);
}
