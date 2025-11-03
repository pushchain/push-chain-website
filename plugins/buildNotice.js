import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const __dirname = path.resolve();

const noticePath = path.join(__dirname, 'src/content/notice.md');
const outputDir = path.join(__dirname, 'static/content');
const outputPath = path.join(outputDir, 'notice.json');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Default fallback
let output = { active: false };

try {
  if (!fs.existsSync(noticePath)) {
    console.warn('⚠️ notice.md not found. Skipping notice generation.');
  } else {
    const fileContent = fs.readFileSync(noticePath, 'utf8').trim();

    if (!fileContent) {
      console.warn('⚠️ notice.md is empty. Skipping notice generation.');
    } else {
      const { data } = matter(fileContent);
      const required = ['type', 'apps', 'title'];
      const missing = required.filter((key) => !data[key]);

      if (missing.length > 0) {
        console.warn(`⚠️ Missing fields in notice.md: ${missing.join(', ')}`);
        console.warn(
          'Notice will not be shown because not all fields are set.'
        );
      } else {
        output = {
          ...data,
          apps: data.apps.split(',').map((a) => a.trim()),
          active: true,
        };
        console.log('✅ Notice JSON generated successfully.');
      }
    }
  }
} catch (err) {
  console.warn('⚠️ Unexpected issue reading notice.md. Using fallback.');
}

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log(`ℹ️ Notice file written to: ${outputPath}`);
