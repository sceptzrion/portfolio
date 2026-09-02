# Portfolio

Personal portfolio of **Muhamad Ikhsan Rizqi Yanuar**, a Full-Stack Web Developer based in Karawang, West Java, Indonesia.

The website presents selected projects, professional experience, background, capabilities, resume, and contact information through a responsive bilingual interface.

## Website

**rizqiyr.id**

## Features

- English and Indonesian localization with clean public URLs
- Persisted light and dark themes
- Responsive layouts across desktop, tablet, and mobile
- Filterable project showcase
- Dedicated project case-study pages
- Dedicated About, Experience, Projects, Resume, and Contact pages
- Compact CV preview linked to the latest Google Drive document
- Accessible keyboard navigation and skip-to-content support
- Custom localized 404 page
- Subtle motion and interaction states with reduced-motion support

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Validation

Run the project checks before committing:

```bash
npm run lint
npm run build
git diff --check
```

## Project Structure

```text
src/
├── app/          # App Router pages, metadata, API route, and global setup
├── components/   # Layout, sections, motion, theme, i18n, and reusable UI
├── data/         # Structured portfolio data and site configuration
└── i18n/         # Locale configuration and EN/ID dictionaries

public/
└── images/       # Profile and project assets
```

## Localization

English is the default locale. Language preference is persisted through a cookie without adding locale prefixes such as `/en` or `/id` to public URLs.

## Resume

The Resume page provides a compact embedded preview of the latest CV. The full document is hosted on Google Drive and opens externally from the preview.

## Contact

- Email: rizqi.iry@gmail.com
- LinkedIn: linkedin.com/in/ikhsanry
