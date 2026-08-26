# Rizqi Yanuar Portfolio

Personal portfolio of **Muhamad Ikhsan Rizqi Yanuar**, a Full-Stack Web Developer based in Karawang, West Java, Indonesia.

The website presents selected projects, professional experience, background, capabilities, resume, and contact information through a responsive bilingual interface.

## Website

**rizqiyr.id**

## Features

- English and Indonesian localization with clean URLs
- Light and dark themes
- Responsive layouts across desktop, tablet, and mobile
- Filterable project showcase
- Dedicated About, Experience, Projects, Resume, and Contact pages
- In-site resume PDF viewer integration
- Custom localized 404 page
- Subtle motion and interaction states

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- React PDF
- PDF.js
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
├── app/          # App Router pages and global application setup
├── components/   # Layout, sections, motion, theme, and i18n UI
├── data/         # Structured portfolio data and site configuration
└── i18n/         # Locale configuration and EN/ID dictionaries

public/           # Static assets, project images, and resume document
```

## Localization

English is the default locale. Language preference is persisted without adding locale prefixes such as `/en` or `/id` to public URLs.

## Contact

- Email: rizqi.iry@gmail.com
- LinkedIn: linkedin.com/in/ikhsanry
