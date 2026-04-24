# Multi-Selection Accordion (React + Vite + Tailwind)

A small React UI demo: an accordion/FAQ component that supports **single selection** and **multi selection** mode (toggle button).

## Features

- **Accordion UI**: click a question to expand/collapse its answer
- **Single-select mode**: only one item can be open at a time
- **Multi-select mode**: open multiple answers at once
- **Tailwind styling**: clean layout + hover/transition effects

## Tech stack

- **React** (Vite)
- **Tailwind CSS** (via `@tailwindcss/vite`)
- **ESLint** (React Hooks + React Refresh configs)

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

## Project structure

```txt
src/
  Component/
    AccordianComponent.jsx   # accordion w/ single + multi select logic
    NavBar.jsx               # top nav
    Button.jsx               # GitHub link button
  pages/
    Home.jsx                 # composes NavBar + accordion
  services/
    index.js                 # sample FAQ data
  App.jsx
  main.jsx
  index.css                  # Tailwind import
```

## Customize the data

Edit the FAQ items in `src/services/index.js` (each item has `id`, `question`, `answer`).

## Notes

- **Multi-select toggle** is controlled inside `src/Component/AccordianComponent.jsx`.
- This is a client-only demo app (no backend).
