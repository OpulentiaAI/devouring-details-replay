# Devouring Details landing page, offline 1:1 replay

A self-contained recreation of the public [devouringdetails.com](https://devouringdetails.com/) landing page as captured on 2026-10-20. It runs the site's own shipped Next.js code, so the scroll-tracking ruler and line, the 22 demo videos (hover to play), the FAQ accordion, section anchors and layout behave like the live page, with zero network access.

- **Open:** `index.html` (single file, about 14 MB, including all demo videos).
- **MagicPath:** https://api.magicpath.ai/v1/sunnily-minute-1451

## How it works
`source/build.cjs` takes the server HTML, removes external script/style tags, inlines CSS and fonts, and gzips all 25 JS files and 27 images/videos into the page. `source/boot.js` runs first and serves everything from memory: scripts load from blob URLs while reporting their original paths, `<img>`, `<video>`/`<source>` and `poster` are mapped to in-memory data or blob URLs, and `fetch`/XHR and analytics get local responses. A Content-Security-Policy blocks all network access. Links, Login, Register and checkout show a notice instead of navigating.

## Verification
Side-by-side screenshots at six scroll positions match the live page (`evidence/live-vs-replay.jpg`). All 22 videos load, hover playback triggers the same demo video as live, the FAQ expands, and headless Chromium shows 0 network requests.

## Limits
- Landing page only. The free prototype/resource previews, login and purchase pages open the real site.
- Content is frozen at capture time.

## Rights
All code, design, text, images and videos belong to Devouring Details / Rauno Freiberg. This is an unaffiliated, non-commercial reference replay of a public marketing page; no paid course content is included. Remove on request.
