# Career Seminar Day Book — rebuild handoff

## What changed, Aug 25 — planning/public split
The site is no longer one hand-edited HTML file. It's now generated from a single data file, so there's no way for the public and planning versions to drift apart the way the old site did.

**Three source files, one command:**
- `days-data.js` — the only file you edit. Every day and every assignment row carries `published: true` or `false`.
- `template.html` — the shared page design (don't need to touch this normally).
- `build.js` — run `node build.js` after editing `days-data.js`. It generates two files:
  - **`index.html`** — public, only `published: true` days/assignments. This is what gets pushed to `careerseminar.netlify.app` for students.
  - **`plan.html`** — everything, drafts included. Amber banner pinned at the top while you scroll, amber dashed border + a "DRAFT — NOT YET TAUGHT" ribbon on any day that isn't published yet. Already-published days show in the normal red style even here, so you can tell at a glance which of the two you're looking at, and which days within the planning copy are already live.

**To publish a day once you've actually taught it:** open `days-data.js`, flip that day's `published` to `true` (and fix its content to match what actually happened, the way we corrected Day 5), run `node build.js`, then commit + push `index.html`. `plan.html` never needs to go anywhere public — see below.

**Currently:** Days 1–5 are published (Aug 18–24, all already taught). Days 6–7 are drafted but not published — they won't appear on the public site until you flip them after teaching them.

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
