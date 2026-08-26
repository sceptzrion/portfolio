import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const metadataPath = path.join(
  root,
  "src/i18n/dictionaries/metadata.ts",
);

const layoutPath = path.join(
  root,
  "src/app/layout.tsx",
);

const readmePath = path.join(
  root,
  "README.md",
);

function read(filePath) {
  return fs
    .readFileSync(filePath, "utf8")
    .replace(/\r\n/g, "\n");
}

function replaceOnce(
  source,
  search,
  replacement,
  label,
) {
  const firstIndex =
    source.indexOf(search);

  if (firstIndex === -1) {
    throw new Error(
      `Could not find "${label}". No files were written.`,
    );
  }

  const secondIndex =
    source.indexOf(
      search,
      firstIndex + search.length,
    );

  if (secondIndex !== -1) {
    throw new Error(
      `Found multiple matches for "${label}". No files were written.`,
    );
  }

  return source.replace(
    search,
    replacement,
  );
}

let metadata = read(metadataPath);
let layout = read(layoutPath);

/* =========================================================
   METADATA DICTIONARY
   ========================================================= */

const alreadyLocalized =
  metadata.includes(
    'title: "Portofolio | Muhamad Ikhsan Rizqi Yanuar"',
  ) &&
  layout.includes(
    "default: copy.title",
  );

if (!alreadyLocalized) {
  metadata = replaceOnce(
    metadata,
    `  site: {
    description: string;
    openGraphLocale: string;
  };`,
    `  site: {
    title: string;
    description: string;
    openGraphLocale: string;
  };`,
    "site metadata type",
  );

  metadata = replaceOnce(
    metadata,
    `    site: {
      description:
        "Portfolio of Muhamad Ikhsan Rizqi Yanuar, a Full-Stack Web Developer with hands-on experience building responsive web applications and data projects.",`,
    `    site: {
      title:
        "Portfolio | Muhamad Ikhsan Rizqi Yanuar",

      description:
        "Portfolio of Muhamad Ikhsan Rizqi Yanuar, a Full-Stack Web Developer with hands-on experience building responsive web applications and data projects.",`,
    "English site metadata",
  );

  metadata = replaceOnce(
    metadata,
    `    site: {
      description:
        "Portfolio Muhamad Ikhsan Rizqi Yanuar, Full-Stack Web Developer dengan pengalaman praktis dalam membangun aplikasi web responsif dan proyek data.",`,
    `    site: {
      title:
        "Portofolio | Muhamad Ikhsan Rizqi Yanuar",

      description:
        "Portofolio Muhamad Ikhsan Rizqi Yanuar, Full-Stack Web Developer dengan pengalaman praktis dalam membangun aplikasi web responsif dan proyek data.",`,
    "Indonesian site metadata",
  );

  layout = replaceOnce(
    layout,
    `const pageTitle =
  \`Portfolio | \${siteConfig.fullName}\`;

`,
    "",
    "static homepage title",
  );

  layout = replaceOnce(
    layout,
    `      default: pageTitle,`,
    `      default: copy.title,`,
    "localized homepage title",
  );
}

/* =========================================================
   README
   ========================================================= */

const readme = [
  "# Rizqi Yanuar Portfolio",
  "",
  "Personal portfolio of **Muhamad Ikhsan Rizqi Yanuar**, a Full-Stack Web Developer based in Karawang, West Java, Indonesia.",
  "",
  "The website presents selected projects, professional experience, background, capabilities, resume, and contact information through a responsive bilingual interface.",
  "",
  "## Website",
  "",
  "**rizqiyr.id**",
  "",
  "## Features",
  "",
  "- English and Indonesian localization with clean URLs",
  "- Light and dark themes",
  "- Responsive layouts across desktop, tablet, and mobile",
  "- Filterable project showcase",
  "- Dedicated About, Experience, Projects, Resume, and Contact pages",
  "- In-site resume PDF viewer integration",
  "- Custom localized 404 page",
  "- Subtle motion and interaction states",
  "",
  "## Tech Stack",
  "",
  "- Next.js 16",
  "- React 19",
  "- TypeScript",
  "- Tailwind CSS 4",
  "- React PDF",
  "- PDF.js",
  "- Vercel",
  "",
  "## Local Development",
  "",
  "Install dependencies:",
  "",
  "```bash",
  "npm install",
  "```",
  "",
  "Start the development server:",
  "",
  "```bash",
  "npm run dev",
  "```",
  "",
  "Then open:",
  "",
  "```text",
  "http://localhost:3000",
  "```",
  "",
  "## Validation",
  "",
  "Run the project checks before committing:",
  "",
  "```bash",
  "npm run lint",
  "npm run build",
  "git diff --check",
  "```",
  "",
  "## Project Structure",
  "",
  "```text",
  "src/",
  "├── app/          # App Router pages and global application setup",
  "├── components/   # Layout, sections, motion, theme, and i18n UI",
  "├── data/         # Structured portfolio data and site configuration",
  "└── i18n/         # Locale configuration and EN/ID dictionaries",
  "",
  "public/           # Static assets, project images, and resume document",
  "```",
  "",
  "## Localization",
  "",
  "English is the default locale. Language preference is persisted without adding locale prefixes such as `/en` or `/id` to public URLs.",
  "",
  "## Contact",
  "",
  "- Email: rizqi.iry@gmail.com",
  "- LinkedIn: linkedin.com/in/ikhsanry",
  "",
].join("\n");

/* =========================================================
   WRITE ONLY AFTER ALL TRANSFORMS PASS
   ========================================================= */

fs.writeFileSync(
  metadataPath,
  metadata,
  "utf8",
);

fs.writeFileSync(
  layoutPath,
  layout,
  "utf8",
);

fs.writeFileSync(
  readmePath,
  readme,
  "utf8",
);

console.log("");
console.log(
  "✓ P19 content audit fixes applied.",
);
console.log("");
console.log("Updated:");
console.log(
  "- src/i18n/dictionaries/metadata.ts",
);
console.log(
  "- src/app/layout.tsx",
);
console.log("- README.md");
console.log("");
console.log("Next:");
console.log("npm run lint");
console.log("npm run build");
console.log("git diff --check");