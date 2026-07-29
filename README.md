# Modern Blog

A responsive React + Vite blog and interview question app with Tailwind CSS styling and Firebase-backed question management.

## Project Overview

`modern-blog` is a frontend application built with React, TypeScript, Vite, and Tailwind CSS. It features a modern blog landing page, a searchable interview question section, content detail pages, and Firebase integration for persisting interview questions.

## Key Features

- Home landing page with featured posts, categories, blog cards, and newsletter section
- Interview questions listing with filters for category and difficulty
- Question detail page with back navigation
- Article detail pages for blog content
- Question submission form backed by Firebase Firestore
- Light and dark theme support using `ThemeContext`
- Client-side routing with React Router

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Firebase Firestore
- Jest + Testing Library
- ESLint

## Project Structure

- `src/`
  - `App.tsx` - root app component
  - `main.tsx` - app bootstrap and provider setup
  - `router/router.tsx` - route definitions
  - `blogTemplate.tsx` - homepage layout
  - `pages/` - feature pages (home, about, answers, interview questions, form, article detail)
  - `theme/` - dark mode theme context
  - `firebase/` - Firestore config and utilities
  - `hooks/` - custom data fetching hooks
  - `types/` - TypeScript models

## Scripts

- `npm run dev` � start the development server
- `npm run build` � compile TypeScript and build the production bundle
- `npm run preview` � preview the built app locally
- `npm run lint` � run ESLint
- `npm run test` � run Jest tests

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Open the app in your browser at `http://localhost:5173`

4. Add .env folder and add following values:

````VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=e```

## Firebase Setup

This project includes Firebase Firestore integration. Make sure your Firebase config is set up correctly in `src/firebase/firebase.config.ts`.

## Notes

- The app is currently configured as a private Vite project.
- Dark mode theming is managed through `ThemeProvider`.
- Interview questions are fetched from Firestore and displayed in a responsive grid.

## License

This project is currently private.
````
