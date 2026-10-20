# Manoj Jeur — Portfolio

Personal portfolio built with React, TypeScript, Vite, Motion for React, and lucide-react. Portfolio copy and project details live in `src/data.ts`.

## Run locally

```sh
npm install
npm run dev
```

## Checks and production build

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

## Resume asset

The supplied resume is served from **`public/resume.pdf`** through the hero's Download Resume link. Replace that file when you update your resume; keep the same path so the link continues to work.

## Deploy to Vercel

Import this repository into Vercel. Keep the framework preset as **Vite**, use `npm run build` as the build command, and `dist` as the output directory. No backend or environment variables are required. Vercel detects the Vite configuration automatically; the default deployment URL is enough for this single-page portfolio.
