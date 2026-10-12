# web-lab

My practice repo for learning **React in depth**.

I've already studied JavaScript in depth and I'm satisfied with where I am, so now it's time to go through React properly: not just the syntax, but **how everything actually works** (what JSX compiles to, what React elements are, how components get called, how rendering reaches the DOM, and so on).

## The course

I'm following **[The Joy of React](https://www.joyofreact.com/)** by **Josh W. Comeau**, a paid, in-depth React course built around interactive lessons, exercises and real-world projects. It focuses on building a correct mental model of React instead of memorizing patterns.

> The course material belongs to Josh W. Comeau. This repo only contains my own practice code, exercise solutions and notes.

### Module 1: React Fundamentals

The topics I'm working through:

- **JSX:** Understanding JSX, Expression Slots, Differences from HTML, The Whitespace Gotcha, JSX vs. Templates
- **Components:** Basic Syntax, Props, The Children Prop, Application Structure, Fragments
- **Iteration:** Mapping Over Data, Keys
- **Conditional Rendering:** with an `if` statement, with `&&`, with a ternary, showing and hiding
- **Range Utility**
- **Styling in React:** CSS Modules

## Repo structure

```
web-lab/
├── 01-dom-basics/        Plain HTML/CSS/JS and the DOM, before React
├── 02-jsx-basics/        First Vite + React project
└── 03-joy-of-react/
    ├── module-1/         One folder per lesson or exercise (03-… to 23-…)
    ├── package.json      Shared dependencies for all lessons
    └── vite.config.js
```

Each lesson folder in `module-1/` is self-contained, with its own `index.html`, a `main.jsx` entry file and the components for that lesson.

## Running a lesson

```bash
cd 03-joy-of-react
npm install
npm run dev
```

Then open the lesson you want under its folder, for example:

```
http://localhost:5173/module-1/23-conditional-rendering/
```

## Notes

Some lessons also have a `detailed` version where the JSX is rewritten as plain `React.createElement` calls, to see what the compiler produces (for example `20-mapping-over-data-detailed-v3`).
