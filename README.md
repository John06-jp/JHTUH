# Area 51 × Skillsoft

A React (Vite) single-page application for Area 51's
Skillsoft partner pages. Originally a set of static HTML/CSS/JS pages; this
repository has been migrated to React.

## Tech stack

- **React 18** + **react-router-dom 6**
- **Vite 5** (bundler + dev server)
- **Tailwind CSS 3** (build-time, with the custom navy/teal/gold theme)
- **Vanilla CSS** (`src/styles.css`) for the custom design system
- Google Fonts (Inter, Outfit)

## Pages / routes

| Route              | Page                                            |
| ------------------ | ----------------------------------------------- |
| `/`                | Landing page                                    |
| `/program?p=<key>` | Program courses page (keys: `aiml`, `ds`, `cs`, `it`, `ece`, `eee`, `mech`, `civil`) |
| `/cse-courses`     | Computer Science Engineering course guide       |

> Legacy static files (the original single-file HTML/CSS/JS version) are kept
> for reference in `legacy/`.

## Run it locally

```bash
# install dependencies (first time only)
npm install

# start the dev server at http://localhost:5173
npm run dev

# production build to dist/
npm run build

# preview the production build
npm run preview
```

## Project structure

```
index.html                  Vite entry
src/
  main.jsx                  React entry (router + providers)
  App.jsx                   Route definitions
  styles.css                Custom design-system CSS
  index.css                 Tailwind + helpers
  context/UIContext.jsx     Modal + toast provider
  components/               Header, Footer, Layout, Modals, Toasts, ...
  components/Home/          Landing-page section components
  pages/                    Home, ProgramPage, CseCourses
  data/programsData.js      Course catalog (generated from legacy data)
  hooks/                    useScrollToHash, useReveal
```