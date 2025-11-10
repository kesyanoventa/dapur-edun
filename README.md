# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Run & deploy

```
# 1) Make sure Node.js >= 18 is installed
node -v

# 2) Install dependencies (installs vite locally)
npm install

# 3) Run dev server (HMR)
npm run dev
# open the URL printed by Vite (default http://localhost:5173)

# 4) Build production bundle
npm run build
# output: ./dist

# 5) Preview the built app locally
npm run preview

# 6) Deploy to GitHub Pages
# - Ensure package.json "homepage" is set to:
#   "https://<your-username>.github.io/<repo-name>"
# - Ensure vite.config.js base matches '/<repo-name>/'
# - Ensure git remote origin points to the GitHub repo
npm run deploy
```

Troubleshooting

- If `npm run build` reports "'vite' is not recognized", most likely dependencies were not installed. Run `npm install` first.
- You can also run the local vite binary via npx: `npx vite build`.
