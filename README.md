# Student Developer Portfolio

A modern, responsive portfolio for a Computer Engineering student seeking internships and future developer roles.

![Screenshot placeholder](public/images/projects/README-screenshot-placeholder.png)

## Stack

Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Features

- Responsive sections and mobile navigation
- Data-driven skills, projects, and experience
- Accessible contact form validation, ready for an API/email integration
- SEO metadata, resume link, and social links
- Motion that respects reduced-motion preferences

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production check, run `npm run build`.

## Customize

- Update personal details, links, education, and resume path in `src/data/portfolio.ts`.
- Add or edit project cards in `src/data/projects.ts`. The component supports future screenshots and detail fields.
- Update skills in `src/data/skills.ts` and timeline entries in `src/data/experience.ts`.
- Place your photo at `public/images/profile.jpg`.
- Place your PDF at `public/resume/resume.pdf`.
- Add project images at `public/images/projects/` and match the paths in `projects.ts`.

## Folder structure

```text
src/app          Next.js application and global styles
src/components   Reusable page sections and cards
src/data         Editable portfolio content
src/types        Shared TypeScript models
public/images    Profile and project image locations
public/resume    Resume PDF location
```

## Deploy to Vercel

Push this repository to GitHub, import it at [vercel.com/new](https://vercel.com/new), and deploy. Vercel detects Next.js automatically; no database or environment variables are needed for this version.
