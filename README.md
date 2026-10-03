# Moisés — portfolio & project hub

A dark-first portfolio focused on practical backend, data and automation projects.
Built with React, TypeScript and Vite. All project descriptions and links are curated
locally: there are no GitHub API calls, tokens, trackers or contact-form backend.

## Local development

Use Node.js 22.12 or newer (Node.js 24 LTS recommended).

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:4173`. For the production preview:

```sh
npm run build
npm run preview
```

## Checks

```sh
npm run typecheck
npm run lint
npm test
npm run build
```

## Add or update a project

Edit `src/data/projects.ts`. Each entry has a stable `id`, plain-language copy,
category, stack, verified source URL and detail-page sections. `featured: true`
adds a large card with an illustrative visual. For new illustration types, extend
`src/components/ProjectVisual.tsx` and its `Project` union.

When a public app or landing page exists, add `website: 'https://…'` to its entry.
The website action then appears on the catalog card and project homepage. Leave
it absent until the URL is real. A source repository is not presented as a live demo.

The workbench section in `src/pages/Index.tsx` holds project stories whose portfolio
pages are still in preparation. Move an entry to the catalog when it is ready.
Do not add private service addresses, household data or sensitive screenshots.

## Navigation & static hosting

The root domain is configured for `https://moise-s.github.io/`. Project URLs use
hash routing, e.g. `https://moise-s.github.io/#/projects/price-tracker`, so direct
visits and refreshes work on GitHub Pages without rewrite rules. Search and
category choices live in the hash query string and survive project navigation.
Social metadata describes the portfolio as a whole; hash detail pages do not have
independent server-rendered social cards.

`npm run build` creates `dist/`. Publishing is a separate owner-authorized action.
No deployment workflow was added or executed as part of this local remake.

## Design

See `docs/design-brief.md` for the complete implementation prompt, research-backed
inventory, UX plan and acceptance criteria. Fonts are self-hosted through Fontsource.
The product diagrams are illustrative, not screenshots or real operational data.
