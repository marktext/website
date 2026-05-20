# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (lockfile is `pnpm-lock.yaml`).

- `pnpm dev` — start Vite dev server on **port 8080** (auto-opens browser). The README says 5173, but `vite.config.ts` overrides it.
- `pnpm build` — runs `tsc` (type check) then `vite build`; output goes to `build/` (not the default `dist/`).
- `pnpm preview` — serve the production build locally.
- `pnpm type-check` — `tsc --noEmit`.
- `pnpm lint` — ESLint on `src/**/*.{ts,tsx}` with `--max-warnings 0` (warnings fail CI-equivalent local runs).

Deployment is automatic via `.github/workflows/deploy.yml` on push to `master` → GitHub Pages. The site serves from the custom domain `marktext.me`, which is why `vite.config.ts` keeps `base: '/'` (do not change to a repo-name subpath — commit `7712dbc` explicitly reverted that).

## Architecture

Single-page React 18 marketing site for the MarkText editor. `src/App.tsx` mounts five sections in order: `TitleBar` → `Feature` → `Theme` → `Sponsor` → `Footer`. There is no router; in-page navigation uses `utils/scrollTo.ts` against section anchor IDs (`#features`, `#themes`, `#sponsors`).

### Markdown rendering pipeline

The Feature and Theme sections demo the editor by rendering bundled `.md` files to HTML at runtime:

1. **Markdown files are imported as strings** via a custom Vite plugin (`vite.config.ts:11`, `markdownPlugin`) that transforms any `.md` import into `export default <JSON-stringified content>`. `assetsInclude: ['**/*.md']` is also set. Files live in `src/markdowns/`.
2. **`src/utils/markdownToHtml.ts`** wraps `@muyajs/core`'s `MarkdownToHtml.renderHtml()` and includes a **load-bearing workaround** for a bug in that library: its module-level `marked` instance accumulates `walkTokens` callbacks across calls, which clears the `lang` field on code tokens after the first render. As a result mermaid code fences lose their `language-mermaid` class and the built-in renderer misses them. `rewrapMermaidSource()` re-parses the HTML, detects mermaid by content (matching the `MERMAID_HEAD` regex of known diagram types), and rewraps those `<pre><code>` blocks as `<div class="mermaid">`. **Do not remove this** unless `@muyajs/core` is upgraded and verified to fix the issue.
3. **Mermaid rendering is a second pass.** After HTML is injected via `dangerouslySetInnerHTML`, the component effect calls `mermaid.run({ nodes })` (Feature) or `mermaid.init` (Theme) on the rewrapped `div.mermaid` elements. Mermaid theme is reinitialized to `'dark'` / `'default'` when a dark/light theme is selected (`Theme.tsx`).

### Theme system

`src/utils/theme.ts` maintains a single `<style id="marktext-website-themes">` element in `<head>` and swaps its `innerHTML` when a theme is selected. Each theme is a CSS string returned from a function in `src/utils/themeColor.ts` (e.g. `dark()`, `oneDark()`), wrapped in `@media not print { ... }` so themes don't leak into printed output. The `'light'` case clears the element (the default theme is plain `src/themes/default.css`, imported statically in `Theme.tsx`). When adding a theme, register it in both `themeColor.ts` (the CSS), `theme.ts` (the switch case), and `Theme.tsx` (the `lightThemes`/`darkThemes` arrays).

### Path aliases

Defined in both `vite.config.ts` and `tsconfig.json` (keep them in sync):

- `@/*` → `src/*`
- `assets/*` → `src/assets/*`
- `markdown` → `src/markdowns` (Vite only)
- `themes` → `src/themes` (Vite only)

### SVG imports

`vite-plugin-svgr` is configured with `icon: true`. Two import styles coexist:

- `import GitHubIcon from '.../github.svg?url'` → URL string (used in `<img src>`).
- `import { ReactComponent as Icon } from '.../foo.svg'` → React component (not currently used but available).

## Notable history

- `@muyajs/core` replaced a vendored local `muya/` copy in commit `9ac6119`. The mermaid workaround in `markdownToHtml.ts` is a direct consequence of that switch.
