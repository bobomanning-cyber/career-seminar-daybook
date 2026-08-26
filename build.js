/* ============================================================
   Generates index.html (public) and plan.html (planning) from
   days-data.js + template.html.

   Run:  node build.js

   Edit days-data.js to change content or flip a day's/assignment's
   `published` flag, then re-run this to regenerate both files.
   ============================================================ */

const fs = require('fs');
const path = require('path');

const { COURSE_OVERVIEW, UNITS, DAYS, ASSIGNED, WEEKS, RESOURCES } = require('./days-data.js');

const templatePath = path.join(__dirname, 'template.html');
const template = fs.readFileSync(templatePath, 'utf8');

function fill(tpl, replacements) {
  let out = tpl;
  for (const [token, value] of Object.entries(replacements)) {
    out = out.split(token).join(value);
  }
  return out;
}

function buildPage({ mode, pageTitle, pageH1, days, assigned, outFile }) {
  const html = fill(template, {
    '__MODE__': mode,
    '__PAGE_TITLE__': pageTitle,
    '__PAGE_H1__': pageH1,
    '__COURSE_OVERVIEW_JSON__': JSON.stringify(COURSE_OVERVIEW),
    '__UNITS_JSON__': JSON.stringify(UNITS),
    '__DAYS_JSON__': JSON.stringify(days),
    '__ASSIGNED_JSON__': JSON.stringify(assigned),
    '__WEEKS_JSON__': JSON.stringify(WEEKS),
    '__RESOURCES_JSON__': JSON.stringify(RESOURCES),
  });
  fs.writeFileSync(path.join(__dirname, outFile), html);
  console.log(`Wrote ${outFile} (${days.length} day card${days.length === 1 ? '' : 's'})`);
}

// PUBLIC — only what's actually been taught/assigned
buildPage({
  mode: 'public',
  pageTitle: 'Career Seminar Course Curriculum',
  pageH1: 'Career Seminar Course Curriculum',
  days: DAYS.filter(d => d.published),
  assigned: ASSIGNED.filter(a => a.published),
  outFile: 'index.html',
});

// PLANNING — everything, drafts flagged
buildPage({
  mode: 'planning',
  pageTitle: 'Career Seminar — PLANNING (internal)',
  pageH1: 'Career Seminar Course Curriculum — PLANNING COPY',
  days: DAYS,
  assigned: ASSIGNED,
  outFile: 'plan.html',
});
