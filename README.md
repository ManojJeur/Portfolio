# Manoj Jeur — Portfolio

Personal portfolio built with React, TypeScript, Vite, Motion for React, and lucide-react. Portfolio copy, project descriptions, skills, and achievements live in `src/data.ts`.

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

The resume is served from **`public/resume.pdf`** through the hero's Download Resume link. Replace that file when you update your resume; keep the same path so the link continues to work. The About section portrait is **`public/manoj-jeur.png`**.

## Deploy to Netlify

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. In Netlify, select **Add new site → Import an existing project** and connect the repository.
3. Set the build command to **`npm run build`** and the publish directory to **`dist`**.
4. Select **Deploy site**. Netlify will build the site and deploy new commits pushed to the connected branch.

No backend or environment variables are required. Vite copies files in `public/` into the production build, including the resume and portrait.

## Deploy to Vercel

Import this repository into Vercel. Keep the framework preset as **Vite**, use `npm run build` as the build command, and `dist` as the output directory. No backend or environment variables are required. Vercel detects the Vite configuration automatically; the default deployment URL is enough for this single-page portfolio.
