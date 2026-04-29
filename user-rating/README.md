# User Rating (React + Vite)

A simple React app that renders a **star rating** UI (with hover + click interactions) and a lightweight navbar. Built with Vite and styled with Tailwind CSS.

## Features

- **Interactive star rating**: hover preview + click to select a rating
- **Configurable number of stars** via `noOfStars` prop
- **Tailwind CSS** styling
- **React Icons** (`FaStar`)

## Tech stack

- **React**
- **Vite**
- **Tailwind CSS** (via `@tailwindcss/vite`)
- **ESLint**

## Getting started

### Prerequisites

- Node.js (recommended: latest LTS)

### Install

```bash
npm install
```

### Run locally (dev)

```bash
npm run dev
```

Then open the URL printed in your terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project structure

- `src/main.jsx`: React entry point
- `src/App.jsx`: App root
- `src/Pages/Home.jsx`: Page composition
- `src/Components/Rating.jsx`: Star rating component
- `src/Components/NavBar.jsx`: Navbar component
- `src/index.css`: Tailwind import

## Rating component

The star widget is implemented in `src/Components/Rating.jsx` and used like:

```jsx
<Rating noOfStars={5} />
```

## Notes

- There are **no environment variables** required for this project.
