# Manoj Jeur — Developer Portfolio

**A recruiter-friendly portfolio for a Java and Spring Boot backend developer.** This website presents Manoj’s background, backend projects, technical skills, education, achievements, and professional contact links in a responsive dark interface.

[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Motion](https://img.shields.io/badge/Motion_for_React-Animations-7C3AED)](https://motion.dev/)

**Repository:** [github.com/ManojJeur/Portfolio](https://github.com/ManojJeur/Portfolio)

**Live website:** No public deployment URL is configured yet.

## Contents

- [Overview](#overview)
- [Features](#features)
- [Projects](#projects)
- [Technology stack](#technology-stack)
- [Screenshots](#screenshots)
- [Project structure](#project-structure)
- [Run locally](#run-locally)
- [Available scripts](#available-scripts)
- [Environment variables](#environment-variables)
- [Deploy](#deploy)
- [Customize the portfolio](#customize-the-portfolio)
- [Potential improvements](#potential-improvements)
- [Author and contact](#author-and-contact)
- [License](#license)

## Overview

The portfolio is a single-page React application. Native section links take visitors through an introduction, selected work, About and education, skills, achievements, and contact information. Project details, profile links, skills, and achievements are kept together in a central data file to make routine updates straightforward.

## Features

- Responsive dark layout with sticky navigation and a mobile menu.
- Project cards with category filters, technology lists, and source links where supplied.
- Motion for React entrance and filtering transitions, with reduced-motion support.
- Keyboard skip link and visible focus styles.
- Downloadable PDF resume and local profile portrait.
- GitHub, LinkedIn, LeetCode, and email links; there is no contact form or backend.
- Page title, SEO description, Open Graph metadata, and SVG favicon.

## Projects

These projects are presented on the site. The portfolio uses the supplied repository URLs; no live project demos are linked unless availability is verified.

| Project | Focus | Repository |
| --- | --- | --- |
| URL Shortener API | Spring Boot API, caching, analytics, and optional AI summaries | [Source](https://github.com/ManojJeur/UrlShortner) |
| Coolie Express | Location-aware porter booking API | [Source](https://github.com/ManojJeur/CoolieExpress) |
| SalesSavvy Backend API | E-commerce workflows and payment integration | [Source](https://github.com/ManojJeur/SalesSavvy-Backend) |
| Finance Dashboard Backend | Financial records, role-based access, and summary APIs | [Source](https://github.com/ManojJeur/FinanceDashboardBackend) |
| Real Estate Intelligence Platform | RAG-based property research and Algorand TestNet proofs | Repository link not supplied |
| DSA Implementations | Data structures and algorithm practice | [Source](https://github.com/ManojJeur/Dsa_Implementations-by-Manoj) |
| Food Delivery | Microservices application in progress | [Source](https://github.com/ManojJeur/Food-Delivery) |

See `src/data.ts` for the full project descriptions and technology lists shown on the website.

## Technology stack

| Area | Technologies |
| --- | --- |
| UI | React, TypeScript, Vite |
| Styling | Custom CSS; responsive breakpoints and design tokens in `src/styles.css` |
| Animation | Motion for React (`motion`) |
| Icons | lucide-react |
| Fonts | DM Sans, DM Mono, and Manrope via Google Fonts |
| Quality tools | TypeScript, ESLint |
| Hosting configuration | Static Vite output in `dist/`; compatible with Netlify and Vercel |

The portfolio does not use Tailwind CSS, a client-side router, or a backend service.

## Screenshots

No screenshots are currently committed to the repository. To add a preview, capture the deployed site and save the image in the repository (for example, `docs/portfolio-desktop.png`), then link it here using a relative Markdown path.

## Project structure

```text
.
├── public/
│   ├── manoj-jeur.png       # About section portrait
│   └── resume.pdf           # Downloadable resume
├── src/
│   ├── App.tsx              # Sections, navigation, project filter, and interactions
│   ├── data.ts              # Profile, project, skill, and achievement content
│   ├── main.tsx             # React entry point
│   └── styles.css           # Theme, layout, responsive styles, and motion preferences
├── eslint.config.js
├── .gitignore
├── favicon.svg
├── index.html               # Document metadata and font links
├── package.json             # Dependencies and npm scripts
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Run locally

### Prerequisites

- Git
- Node.js and npm

### Setup

```bash
git clone https://github.com/ManojJeur/Portfolio.git
cd Portfolio
npm ci
npm run dev
```

Vite prints the local development URL in the terminal. To view the optimized production build locally:

```bash
npm run build
npm run preview
```

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript project checks |
| `npm run build` | Type-check and create the production build in `dist/` |
| `npm run preview` | Serve the production build locally |

There is no automated test script configured in `package.json`.

## Environment variables

None are required. The site is static and does not connect to a backend.

## Deploy

### Netlify

1. In Netlify, choose **Add new site → Import an existing project** and connect the GitHub repository.
2. Configure the build command as `npm run build` and the publish directory as `dist`.
3. Deploy the site. Netlify can publish subsequent commits from the connected branch automatically.

### Vercel

Import the GitHub repository into Vercel. Select the **Vite** framework preset, set the build command to `npm run build`, and set the output directory to `dist`.

Both providers serve the resume and portrait from the generated `dist/` output. Add the final public site URL to the header above after deployment; none is configured in this repository today.

## Customize the portfolio

- **Introduction, education, social links, email, and resume path:** edit `profile` in `src/data.ts`.
- **Project descriptions, categories, technology lists, and repository links:** edit `projects` in `src/data.ts`.
- **Skills and achievements:** edit `skills` and `achievements` in `src/data.ts`.
- **Section markup, navigation, and interaction behavior:** edit `src/App.tsx`.
- **Colors, typography, layout, breakpoints, and reduced-motion rules:** edit `src/styles.css`.
- **Resume:** replace `public/resume.pdf`, keeping the same filename.
- **Portrait:** replace `public/manoj-jeur.png`, keeping the same filename and square proportions.
- **Page title, SEO and Open Graph metadata, and font imports:** edit `index.html`.
- **Favicon:** replace `favicon.svg` and update its reference in `index.html` if the filename changes.

## Potential improvements

These are ideas for future work, not current features:

- Add desktop and mobile screenshots after publishing the site.
- Add a CI workflow that runs lint, type checks, and the production build for pull requests.
- Add an Open Graph preview image and the public portfolio URL after deployment.

## Author and contact

**Manoj Jeur** — B.Tech Computer Science and Business Systems student, expected to graduate in 2027; targeting Java and Spring Boot backend developer roles.

- [GitHub](https://github.com/ManojJeur)
- [LinkedIn](https://www.linkedin.com/in/manoj-jeur-3845b02b0/)
- [LeetCode](https://leetcode.com/u/manoj_jeur045/)
- [Email](mailto:manojjeur045@gmail.com)

## License

No license file is present in this repository. No reuse or redistribution license is currently specified.
