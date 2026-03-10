# 🌗 Dark Mode App

A simple Next.js 16 project demonstrating a **class-based dark mode toggle** built with React Context, Tailwind CSS v4, and zero external dependencies.

## Tech Stack

| Technology | Version | Purpose |
| --- | --- | --- |
| [Next.js](https://nextjs.org) | 16 | React framework with App Router |
| [React](https://react.dev) | 19 | UI library |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first CSS framework |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |

## How It Works

The dark mode system is built entirely with React's own state management — no browser APIs like `localStorage` or `matchMedia` are used. The theme resets to light mode on each page load.

### Architecture Overview

```
layout.tsx
└── ThemeProvider (React Context + useState)
    └── page.tsx
        └── DarkModeToggle (consumes context)
```

### Core Components

#### 1. ThemeProvider (`src/components/ThemeProvider.tsx`)

The central piece of the dark mode system. It manages theme state using pure React logic:

- **React Context** — Exposes `theme` ("light" | "dark") and `toggleTheme()` to the entire component tree.
- **`useState`** — Holds the current theme, defaulting to `"light"`.
- **`useEffect`** — Syncs the React state to the DOM by toggling a `.dark` class on the `<html>` element whenever the theme changes.
- **`useTheme` hook** — A one-liner custom hook for any component to read or toggle the theme.

```tsx
// Usage in any client component
import { useTheme } from "@/components/ThemeProvider";

const { theme, toggleTheme } = useTheme();
```

#### 2. DarkModeToggle (`src/components/DarkModeToggle.tsx`)

A button component that consumes the theme context and renders a sun or moon icon:

- **Sun icon** — Displayed in light mode (amber colored).
- **Moon icon** — Displayed in dark mode (indigo colored).
- **Transitions** — Smooth color and scale transitions on hover.
- **Accessible** — Includes dynamic `aria-label` for screen readers.

### CSS & Tailwind Configuration

#### Class-Based Dark Mode (`src/app/globals.css`)

Tailwind CSS v4 uses a CSS-first configuration approach. Dark mode is enabled via `@custom-variant`:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

This tells Tailwind that `dark:` utility classes should activate when the `.dark` class is present on an ancestor element. CSS custom properties switch values accordingly:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

These are mapped into Tailwind's theme via `@theme inline`, making `bg-background`, `text-foreground`, and `dark:` prefixed utilities all work seamlessly.

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind imports, dark mode variant, CSS variables
│   ├── layout.tsx         # Root layout — wraps app in ThemeProvider
│   └── page.tsx           # Demo page with header, hero, feature cards, footer
└── components/
    ├── ThemeProvider.tsx   # React Context provider for theme state
    └── DarkModeToggle.tsx  # Sun/moon toggle button component
```

## Getting Started

### Prerequisites

- Node.js 18.18 or later

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — click the sun/moon icon in the top-right corner to toggle dark mode.

### Build

```bash
npm run build
npm start
```

## Extending the Dark Mode

### Adding dark styles to new components

Use Tailwind's `dark:` prefix on any utility class:

```tsx
<div className="bg-white dark:bg-zinc-900 text-black dark:text-white">
  This adapts to the current theme.
</div>
```

### Reading the current theme in a component

```tsx
"use client";
import { useTheme } from "@/components/ThemeProvider";

export function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  return <p>Current theme: {theme}</p>;
}
```

### Adding persistence (optional)

To persist the theme across page reloads, you can extend `ThemeProvider` to save to `localStorage`:

```tsx
// Inside ThemeProvider
useEffect(() => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") setTheme(saved);
}, []);

const toggleTheme = () => {
  const next = theme === "light" ? "dark" : "light";
  setTheme(next);
  localStorage.setItem("theme", next);
};
```

## License

MIT
