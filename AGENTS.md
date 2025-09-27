# Repository Guidelines

## Project Structure & Module Organization
This Vite + Vue 3 app mounts from `index.html` via `src/main.js`, rendering `src/App.vue`. Shared UI sits in `src/components` (header, footer, overlays), while domain features live under `src/features`, e.g. `src/features/outfits/components/OutfitCard.vue`. Route-level pages belong in `src/views`, and static fixture data resides in `src/data/mockData.js`. Place compiled assets in `public/` when they must be served verbatim; keep generated files out of version control.

## Build, Test, and Development Commands
- `npm install`: restore dependencies against Node 20.19+ (see `package.json` engines).
- `npm run dev`: start the Vite dev server with hot-module reload.
- `npm run build`: produce the production bundle in `dist/`.
- `npm run preview`: run the built bundle locally for smoke checks.
- `npm run lint`: run ESLint across `src/` and auto-fix eligible issues.
- `npm run format`: format Vue and JS files in `src/` with Prettier defaults.

## Coding Style & Naming Conventions
Use `<script setup>` SFCs with PascalCase component files (`SearchOverlay.vue`) and camelCase exports. Follow two-space indentation and trailing commas per Prettier. Organize feature code by domain (`src/features/<domain>/components`) and keep shared assets in `src/assets/`. ESLint extends `vue3-recommended`; keep template lint warnings at zero and disable rules locally only when justified.

## Testing Guidelines
No automated suite exists yet. When adding tests, use Vitest plus @vue/test-utils and place specs under `tests/unit/<component>.spec.js`. Name scenarios with the behavior under test (`renders error state`). Run `npm run test` once introduced, and gate pull requests on green tests and relevant manual QA (e.g., visual confirmation of layout changes).

## Commit & Pull Request Guidelines
Commits follow conventional types (`feat:`, `fix:`, `doc:`, `refactor:`). Keep messages in the imperative mood and scoped to one change. Pull requests should summarize intent, list major UI/UX impacts, link issues or task IDs, and attach before/after screenshots when altering presentation. Request review once linting, formatting, and preview checks pass locally.
