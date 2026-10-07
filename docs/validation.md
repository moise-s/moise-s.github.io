# Local validation — 2026-10-02

The local remake passes:

- Production build with Vite 8.
- Strict TypeScript checking for application and build configuration.
- ESLint.
- 12 Vitest interaction checks, including combined search/category filtering, empty-state recovery, direct project homepages, invalid-route recovery and filter persistence on return.
- Dependency audit: zero reported vulnerabilities after updating the inherited toolchain.
- 40 production-browser layout checks: the homepage and seven project pages at 320, 390, 768, 1280 and 1440 px. No document overflow or visible elements crossing the viewport edge were detected.
- Manual desktop and mobile visual review.
- Browser verification of search → category → project → return, including the restored query, selected category and result count.
- Keyboard activation of the skip link: focus moves to main content without changing the hash route.
- Programmatic focus on project headings and catalog return heading.
- No browser warnings or errors in the production preview.
- Git whitespace check.

Browser evidence is saved locally under `.local-review/` (ignored by Git).
This verification used the Codex browser's responsive viewport emulation. Physical
devices, Safari and Firefox were not tested. Social metadata describes the whole
portfolio; individual hash routes share that metadata.

The initial local implementation did not commit, push, create a PR, deploy,
operate infrastructure or write to external services. Public project metadata and README descriptions were read for curation.
