# Render More Data

A simple React app that fetches products from the DummyJSON API and displays them in a responsive product grid. Users can load more products in batches until the product limit is reached.

## Features

- Fetches product data from `https://dummyjson.com/products`
- Displays product thumbnails and titles
- Loads products in batches of 20
- Prevents duplicate products from being added
- Disables the load button after 100 products
- Styled with Tailwind CSS

## Tech Stack

- React
- Vite
- Tailwind CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Project Structure

```text
src/
  Components/
    LoadMore.jsx
  Pages/
    Home.jsx
  App.jsx
  main.jsx
  index.css
```

## Main Component

The main logic lives in `src/Components/LoadMore.jsx`. It manages loading state, product data, pagination count, and the disabled state for the load button.
