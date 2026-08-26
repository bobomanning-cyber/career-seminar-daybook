/* ============================================================
   MASTER DATA — the only file you edit day-to-day.

   Every DAY and every ASSIGNED row carries `published: true/false`.
   - true  = already taught / actually assigned — shows on the PUBLIC
             student site (index.html).
   - false = drafted ahead of time, not taught yet — shows ONLY on
             the PLANNING copy (plan.html), flagged as a draft there.

   To publish a day once you've actually taught it: flip its
   `published` to true (and fix its content to match what really
   happened, same as we did for Day 5), then run:

       node build.js

   That regenerates both index.html and plan.html. Commit and push
   only index.html for the public site to update — plan.html can
   stay local, or get pushed too since it isn't linked from
   anywhere public (see HANDOFF.md for that tradeoff).

   Every link with u:"" is NOT YET WIRED — renders as
   "link goes here" per the site's own footer convention.
   ============================================================ */

const COURSE_OVERVIEW = {
  paragraph: "This self-directed elective is designed for students who are motivated to explore careers and make informed decisions about their post-secondary path. It provides an opportunity for students to discover their interests and aptitudes and explore careers through interviews, facility tours, job shadow and real world experiences with professionals in fields of interest.",
  contact: [
    {label: "Bob Manning"},
    {label: "Room D220"},
    {label: "manningr@stillwaterschools.org", href: "mailto:manningr@stillwaterschools.org"}
  ]
};

const UNITS = [
  "1 · Intro & Cohort",
  "2 · Employability",
  "3 · Career Exploration",
  "4 · Technology",
  "5 · Networking",
  "6",
];

const DAYS = [
  {
    n: 1, date: "Tue Aug 18", type: "ALL", block: "45", published: true,
    title: "Love / Hate, and what this class is",
    did: [
      "Love/Hate — three things you love doing, three you can't stand",
      "Two Truths and a Job",
      "Where do you stand — the human continuum, 1 to 10",
      "Agreements, passes, Remind, SchooLinks, ID cards"
    ],
    have: ["Love/Hate sheet"],
    due: [
      {t:"Behavior & Transportation Agreement, signed", when:"Fri Aug 21"},
      {t:"Read the syllabus", when:""}
    ],
    links: [
      {t:"Behavior & Transportation Agreement", u:"https://docs.google.com/document/d/1Hq66Yi-fpLeXVj3juUG-PzuSdfvHirqcwCfMw2pSx0c/preview"},
      {t:"Syllabus", u:"https://docs.google.com/document/d/13WcAhgfp-SPksNNkdhfKeb0RcSLrptX2zOta0WoRQUU/preview"},
      {t:"Day 1 slides", u:"https://docs.google.com/presentation/d/109yXR8fGj6LysDZICoS8bJSzZHxCSKaefPEUdUoTGz4/preview"}
    ],
    missed: "Write your own Love/Hate sheet — three and three. Pick up the agreement, your pass and the Remind code, then come find me for the one-on-one check-in."
  },
  {
    n: 2, date: "Wed Aug 19", type: "ALL", block: "45", published: true,
    title: "The four job-launch gaps",
    did: [
      "Vocabulary: pain point · entry-level job · aspiration · career ladder · social capital",
      "Read Manno, “Four Job-Launch Pain Points in Young People's Career Journey”",
      "Where Do I Stand? — rated yourself 1–10 on each of the four gaps",
      "SchooLinks profile and résumé walkthrough"
    ],
    have: ["Where Do I Stand? sheet"],
    due: [
      {t:"SchooLinks profile + résumé", when:"TBD"}
    ],
    links: [
      {t:"The article (Forbes)", u:"https://www.forbes.com/sites/brunomanno/2024/11/29/four-job-launch-pain-points-in-young-peoples-career-journey/"},
      {t:"Where Do I Stand? handout", u:"https://docs.google.com/document/d/1y-4xc9_Lcsg-0ktMCSiNUjh_mrppRAK1yz9wkrUw4oM/copy"},
      {t:"SchooLinks slides", u:"https://docs.google.com/presentation/d/1qcBF1zEwSumoGwkYqLbNw4LoDqvNIMeTrFxw8ZJ5sGc/preview"},
      {t:"SchooLinks", u:"https://app.schoolinks.com/login/k12"}
    ],
    missed: "Read the article and get the five terms. Fill in the Where Do I Stand? sheet — then find a partner before the Four Corners activity so you hear all four gaps out loud."
  },
  {
    n: 3, date: "Thu Aug 20", type: "ALL", block: "45", published: true,
    title: "Solutions to gaps",
    did: [
      "Four Corners — the room taught all four gaps",
      "Solutions to Gaps — what the school could do, what I could do",
      "Silent Conversation on four posters, four rotations, the “+” rule",
      "What this class actually is, mapped onto the four gaps"
    ],
    have: ["Solutions to Gaps worksheet", "Four wall posters (still up)"],
    due: [
      {t:"Three things people come to you for — each labelled good at / like a lot / known for, plus a competency word", when:"Fri Aug 21"},
      {t:"Start your Who Knows You list", when:"Fri Aug 21"}
    ],
    links: [
      {t:"Solutions to Gaps + Who Knows You handout", u:"https://docs.google.com/document/d/1mMUU8ICpqyjta65dn_zaCJ9NdKnBSepOL5jzG-c210g/copy"},
      {t:"Day 3 slides", u:"https://docs.google.com/presentation/d/1b027Z2WLhenxRQlYXdNBMAkR1qvKyvv4C0FHz3MHr3c/preview"}
    ],
    missed: "Get the Solutions to Gaps handout — Who Knows You is on the back. The posters are still on the wall, so come read them, then do both homework pieces."
  },
  {
    n: 4, date: "Fri Aug 21", type: "ALL", block: "45", published: true,
    title: "Who knows you, and the workday you want",
    did: [
      "Competency words — the group named the word for each of you",
      "Who Knows You — counted before, traded categories with three people, counted after",
      "Best / Worst Workday — started, hour by hour, no job titles ever. We ran out of time; it carries to Monday",
      "Building introductions did not run — moved to Wednesday"
    ],
    have: ["Who Knows You sheet, before + after counts", "Best / Worst Workday sheet (started)"],
    due: [
      {t:"Move your names into the Professional Contacts document", when:"Mon Aug 24"}
    ],
    links: [
      {t:"Professional Contacts — make your copy", u:"https://docs.google.com/document/d/16AKMNz0kI8voEOYHW44cnoOSRRGOUlRIU8ikYPmUDY0/copy"},
      {t:"Solutions to Gaps + Who Knows You handout", u:"https://docs.google.com/document/d/1mMUU8ICpqyjta65dn_zaCJ9NdKnBSepOL5jzG-c210g/copy"},
      {t:"Best / Worst Workday sheet", u:"https://docs.google.com/document/d/1wigZ2OF7IfDHcrk3UHx-47PyG6fbCWc0X_z-WF_JEmk/copy"},
      {t:"Day 4 slides", u:"https://docs.google.com/presentation/d/1TQlDqlzKE-9WvNCb0qFlZYfnpt9oxiSXKaX9kQ_MgTQ/preview"}
    ],
    missed: "The Who Knows You sheet needs a partner for the trading round — the two counts mean nothing filled in alone. Grab a partner at lunch — Monday's survey block is built for catching this up."
  },
  {
    n: 5, date: "Mon Aug 24", type: "BLOCK", block: "83", published: true,
    title: "Favorite Things",
    did: [
      "Quick survey — where everyone got to on the workday sheet",
      "Favorite Things modelled: components, ranking, AEIOU, descriptors (Bob's own backpacking example, finished)",
      "Your own activity — started in class, not finished",
      "Didn't get to: the back-to-Best/Worst-Workday pass, Close, or the building-introductions stretch"
    ],
    have: ["Favorite Things worksheet #1, started", "Workday sheet, still in progress"],
    due: [
      {t:"Favorite Things #1 — finish what you started in class", when:"Mon Aug 31"}
    ],
    links: [
      {t:"Favorite Things Activity — my example (backpacking)", u:"https://docs.google.com/document/d/1En9qsmV08ujMjJCtCXWL2jTbeX7ggNHmn689Cc2LFW8/preview"},
      {t:"Favorite Things worksheet", u:"https://docs.google.com/document/d/1qcOeL3_789Ao2I3HlejaZaYN_wpTLAaihB4Of7YbYDw/copy"},
      {t:"Best / Worst Workday sheet", u:"https://docs.google.com/document/d/1wigZ2OF7IfDHcrk3UHx-47PyG6fbCWc0X_z-WF_JEmk/copy"},
      {t:"Day 5 slides", u:"https://docs.google.com/presentation/d/1fnE6pPwZ8KVaCxaz3Fz6xDaC7_c8veRGji5WZwyE6Ew/preview"}
    ],
    missed: "You need your Day 1 loves before you can start. Come in and do the worksheet with a partner — and you can start a workday sheet cold during the survey block."
  },
  {
    n: 6, date: "Wed Aug 26", type: "ALL", block: "45", published: true,
    title: "Employability skills, and Journal #1",
    did: [
      "Employability Skills — what employers want, first look at the assessment, two self-assessments",
      "Journal #1 — the Wednesday routine starts and runs every Wednesday",
      "Didn't get to Favorite Things #1 check-off or building introductions — both move to Thursday"
    ],
    have: ["Employability Skills Assessment, started", "Journal #1, started"],
    due: [
      {t:"Journal Entry #1 — finish and share with Mr. Manning", when:"Thu Aug 27"}
    ],
    links: [
      {t:"Employability Skills Assessment", u:"https://docs.google.com/document/d/1ais2uVUjKcqdHA_VXW-bz-Vy5uasM6Bcbzqt8_wtyxc/copy"},
      {t:"Journal for Career Seminar", u:"https://docs.google.com/document/d/1d7rDk7dLS8mayxoI_lEebzi3UqD0KwgF1qWXJyN1CxM/copy"},
      {t:"Favorite Things worksheet", u:"https://docs.google.com/document/d/1qcOeL3_789Ao2I3HlejaZaYN_wpTLAaihB4Of7YbYDw/copy"},
      {t:"Day 6 slides", u:"https://docs.google.com/presentation/d/1yhBH7Oap7AujEUSq1LNVIbZ51RRUbVd1W7_IQtoiXdo/preview"}
    ],
    missed: "Do the Employability Skills self-assessment on your own — pick two skills, score yourself, one example each. Finish the Journal #1 entry and share it with me, due Thursday same as everyone else. Favorite Things and building introductions haven't happened for the class yet either — you're not behind on those."
  },
  {
    n: 7, date: "Thu Aug 27", type: "BLOCK", block: "83", published: false,
    title: "Common denominators",
    did: [
      "The words that repeat across both your activities — that's the finding",
      "LinkedIn, and the Eve Vang example",
      "Mock interview using your Favorite Things"
    ],
    have: ["Your common-denominator list"],
    due: [
      {t:"Unit 2 — Employability Skills — opens Aug 31", when:""}
    ],
    links: [],
    missed: "This step needs two finished activities. If you're short one, get it done before Unit 2 — everything after this is built on that list."
  }
];

const ASSIGNED = [
  {published: true, assigned:"Tue Aug 18", what:"Behavior & Transportation Agreement, signed", due:"Fri Aug 21", where:"Behavior & Transportation Agreement", u:"https://docs.google.com/document/d/1Hq66Yi-fpLeXVj3juUG-PzuSdfvHirqcwCfMw2pSx0c/preview"},
  {published: true, assigned:"Wed Aug 19", what:"SchooLinks profile + résumé", due:"TBD", where:"The article (Forbes)", u:"https://www.forbes.com/sites/brunomanno/2024/11/29/four-job-launch-pain-points-in-young-peoples-career-journey/"},
  {published: true, assigned:"Thu Aug 20", what:"Three things people come to you for — each labelled good at / like a lot / known for, plus a competency word", due:"Fri Aug 21", where:"Solutions to Gaps + Who Knows You handout", u:"https://docs.google.com/document/d/1mMUU8ICpqyjta65dn_zaCJ9NdKnBSepOL5jzG-c210g/copy"},
  {published: true, assigned:"Thu Aug 20", what:"Start your Who Knows You list", due:"Fri Aug 21", where:"Solutions to Gaps + Who Knows You handout", u:"https://docs.google.com/document/d/1mMUU8ICpqyjta65dn_zaCJ9NdKnBSepOL5jzG-c210g/copy"},
  {published: true, assigned:"Fri Aug 21", what:"Move your names into the Professional Contacts document", due:"Mon Aug 24", where:"Professional Contacts — make your copy", u:"https://docs.google.com/document/d/16AKMNz0kI8voEOYHW44cnoOSRRGOUlRIU8ikYPmUDY0/copy"},
  {published: true, assigned:"Mon Aug 24", what:"Favorite Things #1 — finish what you started in class", due:"Mon Aug 31", where:"Favorite Things worksheet", u:"https://docs.google.com/document/d/1qcOeL3_789Ao2I3HlejaZaYN_wpTLAaihB4Of7YbYDw/copy"},
  {published: true, assigned:"Wed Aug 26", what:"Journal Entry #1 — finish and share with Mr. Manning", due:"Thu Aug 27", where:"Journal for Career Seminar", u:"https://docs.google.com/document/d/1d7rDk7dLS8mayxoI_lEebzi3UqD0KwgF1qWXJyN1CxM/copy"}
];

const WEEKS = [
  {wk:3, dates:"Aug 31 – Sep 3", unit:"2 — Employability Skills", focus:"Rubric, self-assessment, pick two skills to work on"},
  {wk:4, dates:"Sep 8 – 11", unit:"3 — Career Exploration", focus:"SchooLinks Career Center, clusters, interest inventory"},
  {wk:5, dates:"Sep 14 – 18", unit:"3 — Career Exploration", focus:"Ikigai, industry research, resource share"},
  {wk:6, dates:"Sep 21 – 25", unit:"4 — Technology Literacy", focus:"Email etiquette, calendar, digital conferencing"},
  {wk:7, dates:"Sep 29 – Oct 1", unit:"4 — Technology Literacy", focus:"AI literacy · Odyssey Plans begin"},
  {wk:8, dates:"Oct 5 – 9", unit:"4 → 5 Networking", focus:"Odyssey Plans finish · contact list built"},
  {wk:9, dates:"Oct 12 – 14", unit:"6 — Informational Interviews", focus:"How to prepare, conduct, follow up"},
  {wk:10, dates:"Oct 21 – 23", unit:"6 — Informational Interviews", focus:"Outreach emails sent"},
  {wk:11, dates:"Oct 26 – 30", unit:"7 — Independence", focus:"Interview #1 · advisor meetings"},
  {wk:12, dates:"Nov 2 – 6", unit:"8 — Financial Literacy", focus:"Cost of training, post-secondary money"},
  {wk:13, dates:"Nov 9 – 13", unit:"7 — Independence", focus:"Interview #2 · LinkedIn-model profile"},
  {wk:14, dates:"Nov 16 – 20", unit:"9 — Work-Based Learning", focus:"Job shadow, part-time work, internship setup"},
  {wk:15, dates:"Nov 23", unit:"7 — Independence", focus:"Interview #3 (short week)"},
  {wk:16, dates:"Nov 30 – Dec 3", unit:"10 — Post-Secondary", focus:"Labor market, salaries, plan draft"},
  {wk:17, dates:"Dec 7 – 11", unit:"7 — Independence", focus:"Interviews #4 and #5 · résumé export"},
  {wk:18, dates:"Dec 14 – 18", unit:"11 — Capstone", focus:"Build and rehearse"},
  {wk:19, dates:"Dec 21 – 22", unit:"11 — Capstone", focus:"Presentations, final journal"}
];

const RESOURCES = [
  {
    title:"Professional Contacts",
    body:"Every adult who knows something about you. Started from the Who Knows You sheet, added to all semester, used in October to set up interviews.",
    links:[{t:"Make your copy", u:"https://docs.google.com/document/d/16AKMNz0kI8voEOYHW44cnoOSRRGOUlRIU8ikYPmUDY0/copy"}]
  },
  {
    title:"Informational Interviews",
    body:"How to prepare, conduct and follow up. Five of these happen in Quarter 2.",
    links:[{t:"Open the document", u:"https://docs.google.com/document/d/13ICRSgqR2oRksEyK8x-KKav1qPUwKAGGuUxqnKsAN-Q/preview"}]
  },
  {
    title:"SchooLinks",
    body:"Your profile, your résumé, the Career Center and the assessments.",
    links:[{t:"Go to SchooLinks", u:"https://app.schoolinks.com/login/k12"}]
  },
  {
    title:"Syllabus & agreements",
    body:"The 2026-27 syllabus and the Behavior & Transportation Agreement.",
    links:[{t:"Syllabus", u:"https://docs.google.com/document/d/13WcAhgfp-SPksNNkdhfKeb0RcSLrptX2zOta0WoRQUU/preview"}, {t:"Agreement", u:"https://docs.google.com/document/d/1Hq66Yi-fpLeXVj3juUG-PzuSdfvHirqcwCfMw2pSx0c/preview"}]
  },
  {
    title:"Career search",
    body:"BLS Occupational Outlook Handbook, CareerForce MN, CareerOneStop, Jobs Explained.",
    links:[{t:"BLS Handbook", u:"https://www.bls.gov/ooh/"}]
  }
];

module.exports = { COURSE_OVERVIEW, UNITS, DAYS, ASSIGNED, WEEKS, RESOURCES };
