# AGENTS.md

Vue 3 + TypeScript + Vite funnel/landing app for client "Luisa Pita Bejarano". Fresh scaffold — most directories (`components`, `composables`, `config`, `layout`, `assets`) are empty placeholders (`.gitkeep`), not yet wired up.

## Commands

- Package manager is **pnpm** (`.npmrc` sets `node-linker=hoisted`). Do not use npm/yarn — lockfile is `pnpm-lock.yaml`.
- `pnpm dev` — Vite dev server.
- `pnpm build` — runs `vue-tsc -b` (project-references typecheck) **then** `vite build`. Typecheck failures block the build.
- `pnpm preview` — preview production build.
- No lint/format/test tooling is configured (no ESLint, Prettier, Vitest). Don't assume `pnpm lint`/`pnpm test` exist.
- No CI workflows in this repo.

## Env

- `VITE_API_BASE_URL` (see `.env.example`), default fallback `http://localhost:8100/api`.
- `src/services/httpBase.ts` auto-appends `/api` to the base URL unless it already ends in/contains `/api`.

## Architecture notes

- Path alias `@` → `src/` (set in both `vite.config.ts` and `tsconfig.app.json`).
- SCSS globals are auto-injected into every `<style lang="scss">` block via Vite's `additionalData` (`@use "@/styles/index.scss" as *;` in `vite.config.ts`). Variables like `$primary`, `$font-principal`, `$text-secondary` (from `src/styles/colorVariables.module.scss` and `fonts.module.scss`) are available in any component's scoped style **without importing them manually**.
- `src/styles/index.scss` also defines local Sass `lighten()`/`darken()` functions that shadow Dart Sass color module behavior — be aware if adding new color math.
- API calls: extend `APIBase` (`src/services/httpBase.ts`), which wraps axios with `get/post/put/patch/delete` protected methods, auto Bearer-token header from `localStorage.access_token`, and normalizes errors to `{ status, message, data }` (see `ApiError` in `src/types/index.ts`). Don't call axios directly in new services — subclass `APIBase` instead.
- Auth is token-presence based only: `src/router/index.ts` guards routes via `meta.requiresAuth` + `localStorage.access_token` (no `/login` route exists yet — guard references a path that isn't defined in `routes`). `httpBase.ts` dispatches a `auth:token-expired` window CustomEvent on 401; nothing currently listens for it.
- Pinia store `useUserStore` (`src/stores/user.ts`) has a `hydrate()` action that must be called manually to sync state from `localStorage` — it is not called automatically in `main.ts`.
- `tsconfig.app.json` has `strict`, `noUnusedLocals`, `noUnusedParameters` — unused vars/params fail `vue-tsc -b` (and thus `pnpm build`).

## Funnel UI constraints

- All structural layouts use `display: flex` and `width: 100%`; CSS Grid is explicitly prohibited.
- Keep every source file below 400 lines. Funnel sections live as separate components under `src/components/funnel/`; `HomeView.vue` only composes them.
- Checkout buttons use `VITE_CHECKOUT_URL`. Without it they intentionally fall back to `#faq`, so set the real checkout URL before launch.
- The 60-minute offer deadline is created once and persisted in `localStorage` under `bakanology_offer_expires_at`; reloading must not reset it.
