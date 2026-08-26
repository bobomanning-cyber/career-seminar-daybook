# Career Seminar Course Curriculum — rebuild handoff

## Standing practice (decided, applies every lesson going forward)
Every day gets its slide deck linked on the site as soon as the deck exists — this is not a one-off, do it automatically each lesson without waiting to be asked. Find the deck in the **2026-27 Seminar Materials** Drive folder (day decks often appear there as shortcuts — resolve the shortcut to its real presentation file, since duplicate-titled files exist and shortcuts don't expose their target through basic metadata; search by title with `mimeType = 'application/vnd.google-apps.presentation'` to find the real file). Add it to that day's `links` array in `days-data.js` as `{t:"Day N slides", u:".../preview"}`, run `node build.js`, then commit.

## What changed, Aug 26 (this round) — Day 4 & Day 5 slides added
- **Day 4 slides** (`1TQlDqlzKE-9WvNCb0qFlZYfnpt9oxiSXKaX9kQ_MgTQ`) and **Day 5 slides** (`1fnE6pPwZ8KVaCxaz3Fz6xDaC7_c8veRGji5WZwyE6Ew`) added to their days' link lists, matching the pattern already used for Days 1, 3, and 6. Day 1 and Day 3 already had slides linked; Day 2 already has its SchooLinks walkthrough deck linked (a different kind of deck, not a daily recap). Day 7 has no deck yet since it isn't taught/published.
- **Day 6 lesson plan** updated to match Bob's hand-edit to the Day 6 slide deck: the building-introductions brief now says show hall pass / explain why you have it (not "ask what they do / write it down"), plus two notice-and-discuss prompts. Flagged separately: `days-data.js`'s Day 6 "have" list still references "notes on the back of your workday sheet," which assumed the old "write it down" step — worth a look before teaching.

## What changed, Aug 26 (earlier round) — Day 6 published
- **Day 6 (Wed Aug 26) flipped to `published: true`** ahead of actually being taught — Bob's explicit call today, not the usual "publish after you teach it" rule. Content reflects the final lesson plan: Favorite Things #1 checked off, Employability Skills (assessment + two self-assessments), Journal #1, and building introductions to three fixed stops (Security, Main Office, Media Center).
- **New assignment**: Favorite Things #2 ("same steps, a new favorite thing"), assigned Wed Aug 26, due Thu Aug 27 — added to Day 6's `due`/links and as a new `ASSIGNED` row.
- If Day 6 doesn't run exactly as planned, **correct `days-data.js` to match what actually happened** before the next push, same as Day 5 — don't leave the public site describing a lesson that didn't run that way.

## What changed, Aug 25
- **Renamed** "Day Book" → **"Course Curriculum"** throughout (page title, H1, nav references).
- **Course overview section** added just above the nav tabs (non-sticky masthead, sits above the sticky tab bar): first paragraph of the syllabus course description + Bob's contact info. The Remind reference was in the first draft of this and has been **removed** per Bob's request — contact block is now just name, room, email.
- **Day 5 links**: added **"Favorite Things Activity — my example (backpacking)"** (`/preview` — Bob's own filled/completed copy, not a blank template) alongside the existing worksheet and Best/Worst Workday links.
- If you haven't pushed the Remind-removal/rename round yet, this push covers both — see the consolidated prompt below.

## What changed, Aug 25 — planning/public split
The site is no longer one hand-edited HTML file. It's now generated from a single data file, so there's no way for the public and planning versions to drift apart the way the old site did.

**Three source files, one command:**
- `days-data.js` — the only file you edit. Every day and every assignment row carries `published: true` or `false`.
- `template.html` — the shared page design (don't need to touch this normally).
- `build.js` — run `node build.js` after editing `days-data.js`. It generates two files:
  - **`index.html`** — public, only `published: true` days/assignments. This is what gets pushed to `careerseminar.netlify.app` for students.
  - **`plan.html`** — everything, drafts included. Amber banner pinned at the top while you scroll, amber dashed border + a "DRAFT — NOT YET TAUGHT" ribbon on any day that isn't published yet. Already-published days show in the normal red style even here, so you can tell at a glance which of the two you're looking at, and which days within the planning copy are already live.

**To publish a day once you've actually taught it:** open `days-data.js`, flip that day's `published` to `true` (and fix its content to match what actually happened, the way we corrected Day 5), run `node build.js`, then commit + push `index.html`. `plan.html` never needs to go anywhere public — see below.

**Currently:** Days 1–6 are published (Aug 18–26). Day 7 is drafted but not published — it won't appear on the public site until you flip it after teaching it.

## Where plan.html should live
It's not linked from anywhere on the public site, so nobody finds it by browsing. Two options, your call:
- **Keep it local only** — don't push it anywhere, just double-click the file on your Mac when you want to see it. Zero exposure, but only viewable on that one machine.
- **Push it to the same Netlify site** at an unlisted path (e.g. `careerseminar.netlify.app/plan.html`) so you can check it from your phone too. This is obscurity, not real security — anyone who guessed or found that exact URL could open it. The content isn't sensitive (lesson drafts, not student data), so that's probably fine, but if you want a real lock on it later, Netlify can password-protect a single path — that's a small follow-up, not part of this build.

## Link sourcing (carried over from the previous handoff)
Every link was pulled from Drive by title match, not guessed. Two spots had duplicate Drive files with the same title and no clear "final" version:
- **Day 1 slides** → used `109yXR8fGj6LysDZICoS8bJSzZHxCSKaefPEUdUoTGz4`. Alternate: `1f7Wd_xFxY9lvTippS0aZVs2UN6__7orlU2RkO066_SM` (20 slides vs. 16).
- **SchooLinks slides** → used `1qcBF1zEwSumoGwkYqLbNw4LoDqvNIMeTrFxw8ZJ5sGc`. Two other near-duplicates exist from the same Aug 17 session.

Worksheets students fill in use `/copy` (forces "Make a copy"); reference material (slides, syllabus, handouts) uses `/preview` (strips the edit toolbar, read-only regardless of sharing role); nothing links with `/edit`.

## Hosting (unchanged): GitHub + Netlify
Repo lives in `Pathways Work/Classroom Embedded/Claude Course Revisions/Career Seminar/07 Website/` on your machine, pushed via a real Claude Code CLI session — this Cowork session still can't push to GitHub directly.

## Files in this folder
- `days-data.js` — edit this for content/publish changes
- `template.html` — shared design, rarely touched
- `build.js` — run after editing days-data.js
- `index.html` — generated, public
- `plan.html` — generated, planning-only
