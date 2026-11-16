# Jeevan Geo Vadakken — Portfolio

Personal portfolio built with React, TanStack Router, and Vite for GitHub Pages.

## Local development

```sh
npm ci
npm run dev
```

## Build and validation

```sh
npm run lint
npm run build
```

The GitHub Actions workflow builds the static site with the repository base path and deploys `dist` to GitHub Pages whenever `main` is updated. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
