# Portfolio remake — design prompt and implementation plan

## Reusable implementation prompt

Act as a product designer and frontend engineer rebuilding Moisés do Nascimento's personal portfolio. Build a polished, dark-first project hub that helps a visitor understand what he makes, find a relevant project, and reach its homepage or source in two actions. His focus is Python, backend systems, data engineering and useful personal automation. His projects turn recurring real-life problems into understandable, maintainable tools. Communicate that through the actual work, precise writing and thoughtful interaction.

Use an editorial layout with near-black graphite surfaces, warm off-white text, restrained mint green accents, fine borders and generous spacing. Use Geist for readable interface typography and Geist Mono for small technical labels. Design an original system diagram and distinct project illustrations using HTML/CSS/SVG. Keep technical character subtle; the site should feel like a professional maker's workshop. Avoid neon glow, animated terminal gimmicks, fake activity feeds, invented metrics, skill percentage charts, generic stock art and placeholder blog content.

Lead with a short identity statement and a strong projects action. Put the catalog immediately after the introduction. Feature PriceTracker and PropertyProspector, then show the other public repositories as compact, equally usable project cards. Every project needs a plain-language purpose, category, real technology tags, a dedicated shareable project page and a GitHub source link. Show a website action only when a real public URL is configured. The project pages should explain the problem, approach and capabilities without implying that a source repository is a working hosted demo. Keep demonstration visuals explicitly illustrative.

Build a search and category filter that work together, include result counts and a useful empty state, and preserve the visitor's position and filters when returning from a project page. Give Budget Flow, moise-en-place and Home Server a restrained workbench section with general descriptions and no unavailable links. Make adding another project a change to one typed data file. Do not fetch GitHub at runtime, require tokens, or display unverified star counts or uptime claims.

Use semantic HTML, accessible names, keyboard navigation, visible focus, sufficient contrast, reduced-motion support and touch targets of at least 44 px. Verify 320 px phones through wide desktops, including clipped elements, long labels, filter wrapping and project detail pages. Keep all fonts and graphics local. Preserve the React/TypeScript/Vite foundation while removing unused generator scaffolding. Use hash routing for GitHub Pages so refreshed project URLs work without server rewrites. Include accurate metadata, favicon, social preview and a clear README. Deliver a tested local preview and leave all publishing decisions to the owner.

## Verified public inventory — 2026-10-02

Public GitHub API inventory and repository READMEs were checked for:

- [PriceTracker](https://github.com/moise-s/PriceTracker): self-hosted grocery comparison, FastAPI, PostgreSQL, React and Docker; demo screenshots are labeled as synthetic in its README.
- [PropertyProspector](https://github.com/moise-s/PropertyProspector): asynchronous property collection, validation and SQL storage. The README describes supported adapters; current live website compatibility is not asserted here.
- [Upwork Scraper](https://github.com/moise-s/upwork_scraper): Selenium-based extraction of job/profile data to validated JSON.
- [Airflow Pipeline](https://github.com/moise-s/Indicium-codeChallenge-AirFlow): a learning project orchestrating Northwind SQLite extraction and CSV processing.
- [Data Engineering ETL](https://github.com/moise-s/Indicium-codeChallenge-DataEngineer): a learning project moving CSV/PostgreSQL data through date-based files into MySQL.
- [Data Science Challenge](https://github.com/moise-s/Indicium-codeChallenge-DataScientist): a Python/Jupyter learning project generating predictions.
- [futStats](https://github.com/moise-s/futStats): a football match/statistics API prototype; additional player-stat endpoints remain unfinished in the public README.

Exclude the old portfolios, the profile repository and the third-party fork from the catalog. None of the seven selected repositories advertises an external homepage in its public metadata. Local project homepages therefore provide the primary destination; public websites can be added later.

## Information architecture

1. Header: identity, Projects, About, Contact and GitHub.
2. Introduction: what Moisés builds, primary catalog action, diagram of his approach.
3. Project hub: search, category filters, featured visuals, compact remaining entries.
4. Workbench: three upcoming project stories, without speculative release dates.
5. About: practical engineering interests and working principles.
6. Contact: existing public LinkedIn and GitHub destinations.
7. Project pages: context, capabilities, stack, illustration, source/website actions, next project and return to catalog.

## Implementation sequence

1. Audit the existing source, public inventory and relevant personal project context. Separate public descriptions from private operational details.
2. Define the visual tokens and typed catalog. Build the responsive home page around the visitor's project discovery task.
3. Implement combined search/category filtering, query persistence and accessible empty states.
4. Add hash-based project homepages, return navigation, honest illustrations and external link handling.
5. Replace metadata and placeholder assets. Simplify dependencies and document how to add projects.
6. Run build, TypeScript, lint and interaction tests. Inspect desktop and mobile layouts, keyboard behavior, browser console and production preview.
7. Save the local implementation, validation evidence and preview. Do not commit, push or deploy.

## Acceptance criteria

- Seven verified public projects, each reachable through a direct project URL.
- No invented demo links, contact details, metrics or operational health claims.
- Search, category filters, clear controls and empty states work together.
- Returning to the catalog preserves filters; direct URLs and refresh work on a static host.
- Readable dark theme with no horizontal overflow at 320, 390, 768, 1280 and 1440 px.
- Keyboard users can navigate the entire page; focus is clear and project route changes announce their heading.
- Production build, type checking, lint and meaningful interaction tests pass.
- New projects and optional external homepages are added through `src/data/projects.ts`.
- Public-facing content includes no private records, credentials, private host addresses or internal operational details.
