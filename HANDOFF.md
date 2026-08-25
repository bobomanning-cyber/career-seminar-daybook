# Career Seminar Day Book — rebuild handoff

## What this is
A from-scratch rebuild of the course-hub website, since the old one (a Claude Artifact) went unreadable from Cowork sessions due to a network block. Content is exact — retyped straight from your screenshots of the live site (Days 1–7, the assignments table, the weeks 3–19 table, resource cards, footer), not reconstructed from memory. Design tweak applied: card and table borders are now solid red (`#9c2b26`), interiors stay white/gray/black.

`index.html` is a single self-contained file — no build step, no dependencies. Open it directly in a browser to check it, or drop it straight into a GitHub repo.

## What's NOT done yet — on purpose
Every "Links" pill and resource link is rendered as **"— link goes here"** (dashed border, italic) instead of a guessed URL. Screenshots show text, not hrefs — I don't have the real URLs, and guessing would risk sending students to the wrong place. Search `u:""` in the `DAYS`, `ASSIGNED`, and `RESOURCES` arrays near the top of the `<script>` block in `index.html` — each one just needs its `u:` value filled in with the real link (Drive share link, SchooLinks URL, etc.) and it'll switch from placeholder styling to a live link automatically.

A couple I can pre-fill for you from this session's work, if you want them wired now — tell me and I'll drop them in:
- Day 5 slides (your edited copy): Google Slides id `1fnE6pPwZ8KVaCxaz3Fz6xDaC7_c8veRGji5WZwyE6Ew`
- Favorite Things worksheet source doc: Google Doc id `1qcOeL3_789Ao2I3HlejaZaYN_wpTLAaihB4Of7YbYDw` (double-check this is the one you want students opening, vs. the print version)

Everything else — Day 1/3 slides, Syllabus, Behavior & Transportation Agreement, SchooLinks, BLS Handbook, Professional Contacts, the various handouts — needs your real Drive/SchooLinks links.

## Hosting plan (confirmed): GitHub + Netlify
This Cowork session has no GitHub access (no connector, no local git auth), so the actual repo/push/deploy work needs to happen in a real Claude Code CLI session on your machine. Rough steps for that session:

1. `git init` in a folder containing this `index.html`
2. Create a GitHub repo (via `gh repo create` or the web UI) and push
3. Connect the repo in Netlify (New site from Git → pick the repo → no build command needed, publish directory is just the repo root since it's a static file)
4. Netlify gives you a `*.netlify.app` URL immediately; add a custom domain later if you want one

Both GitHub and Netlify are free at this scale (one small static site, low traffic) — no billing concerns.

## Files in this folder
- `index.html` — the site
- `preview_top.png`, `preview_mid.png` — quick visual check renders (not needed for the deploy, just so you can see it before opening the real file)
