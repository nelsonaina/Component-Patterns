# Color generation

A small **React** app that generates **random colors** in **HEX** or **RGB** format, with a layout styled using **Tailwind CSS** (light gray page background, card UI, and a compact top navigation bar).

## Features

- Switch between **Hex** and **RGB** modes; a new color is generated when the mode changes.
- **Change Color** updates the current swatch with another random value for the active mode.
- **Live swatch** shows the current color, with the value readable on a contrast-friendly overlay.
- **Navigation** includes Home/About links and a **GitHub** button (see `NavBar.jsx` for the URL).

## Tech stack

- [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [ESLint](https://eslint.org/) (React and hooks rules)

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node)

## Getting started

Install dependencies:

```bash
npm install
```

Start the dev server (with HMR):

```bash
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Scripts

| Command         | Description                                      |
| --------------- | ------------------------------------------------ |
| `npm run dev`   | Start Vite in development mode                   |
| `npm run build` | Production build (output in `dist/`)           |
| `npm run preview` | Local preview of the production build          |
| `npm run lint`  | Run ESLint on the project                        |

## Project structure

```text
src/
  App.jsx
  main.jsx
  index.css
  Component/
    ColorComponent.jsx   # Color state, generation logic, and card UI
    NavBar.jsx           # Top bar (logo, links, GitHub)
  Pages/
    Home.jsx             # Composes NavBar + ColorComponent
```

## Build output

`npm run build` writes static assets to **`dist/`**. You can serve that folder on any static host, or use `npm run preview` to test the build locally.

## License

This project is private. Add a license if you open-source it.
