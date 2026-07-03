# ilyes-jamoussi.github.io

[![Deploy](https://github.com/Ilyes-Jamoussi/Ilyes-Jamoussi.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Ilyes-Jamoussi/Ilyes-Jamoussi.github.io/actions/workflows/deploy.yml)

Personal site of [Ilyes Jamoussi](https://ilyes-jamoussi.github.io) — statically
generated, zero client-side JavaScript except a ~20-line theme toggle, deployed
on GitHub Pages.

## Stack

- **[Astro 5](https://astro.build)** — fully static export, no SSR, no runtime.
- **TypeScript** on the [`strictest`](https://github.com/withastro/astro/blob/main/packages/astro/tsconfigs/strictest.json)
  preset, plus `noUncheckedSideEffectImports` and `erasableSyntaxOnly`.
- **Hand-written CSS** — design tokens as custom properties, dark/light theme
  via `data-theme` + `prefers-color-scheme`, no framework.
- **Self-hosted fonts** (Fontsource): Inter for text and display, system mono
  stack for labels.
- **Build-time asset generation** — the OG image, favicon, and touch icon are
  rendered by [`scripts/generate-assets.ts`](scripts/generate-assets.ts)
  (satori → resvg) on every build.

## Architecture

```
src/
├── data/resume.ts     # single source of truth for all content, fully typed
├── layouts/Base.astro # document shell: meta, OG/Twitter, JSON-LD, theme init
├── components/        # Header, Footer, ExtLink
├── pages/             # index.astro, 404.astro
└── styles/global.css  # design tokens + all styling
scripts/
└── generate-assets.ts # OG image / favicon / apple-touch-icon generation
```

Content lives in one typed module ([`src/data/resume.ts`](src/data/resume.ts));
templates only render it. Every fact there is sourced from my CV or the linked
repositories.

## Development

```sh
npm ci
npm run dev        # generate assets + dev server on localhost:4321
npm run build      # generate assets + static build into dist/
npm run preview    # serve the production build locally
npm run lint       # eslint (type-checked) + prettier
npm run typecheck  # astro check
```

## Deployment

Every push to `main` runs [`deploy.yml`](.github/workflows/deploy.yml):
lint → typecheck → build → deploy to GitHub Pages via `actions/deploy-pages`.

## Accessibility & performance

- Semantic landmarks, single `h1`, labeled sections, skip link,
  `focus-visible` styles, WCAG AA contrast in both themes,
  `prefers-reduced-motion` respected.
- Static HTML with inlined critical CSS, self-hosted subset fonts, no images
  on the page, no third-party requests.

## License

Code is MIT. Content is © Ilyes Jamoussi.
