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
  "6"
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
      {t:"Favorite Things #1 — finish what you started in class", when:"Wed Aug 26"}
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
    n: 7, date: "Thu Aug 27", type: "BLOCK", block: "83", published: true,
    title: "Common denominators, mock interviews, and building introductions",
    did: [
      "Work time first \u2014 Favorite Things #1 and #2, three lanes",
      "Common denominators \u2014 Ella and Lucy put both of their activities up on the board, and the group found the themes that repeated across them",
      "Mock interview, in pairs around the room. Round 1: everyone answered \u201cTell me about yourself.\u201d Round 2: one partner rotated, and whoever stayed picked their question",
      "After every round \u2014 how did it go, how did it feel, did you use your Favorite Things sheet",
      "Hall pass and building introductions \u2014 who stops you and why, why you introduce yourself first, and how to handle that conversation with empathy",
      "Out into the building \u2014 Security, Main Office, Media Center, in groups of two or three",
      "Didn\u2019t get to: the conversation about the \u201cIs it a good fit?\u201d questions. That moves to Monday"
    ],
    have: ["Employability Skills Assessment, submitted", "Journal #1, submitted", "Favorite Things #1, finished", "Favorite Things #2, started", "Names from your three building introductions"],
    due: [
      {t:"Favorite Things #2 \u2014 same steps, a new favorite thing", when:"Mon Aug 31"}
    ],
    links: [
      {t:"Employability Skills Assessment", u:"https://docs.google.com/document/d/1ais2uVUjKcqdHA_VXW-bz-Vy5uasM6Bcbzqt8_wtyxc/copy"},
      {t:"Favorite Things \u2014 the full activity (4 tabs)", u:"https://docs.google.com/document/d/1FadCzlPwJGf6q_lgNQ76wo4ca2wWYpbkD6uwKA3_owg/copy"},
      {t:"Favorite Things worksheet", u:"https://docs.google.com/document/d/1qcOeL3_789Ao2I3HlejaZaYN_wpTLAaihB4Of7YbYDw/copy"},
      {t:"Professional Contacts \u2014 make your copy", u:"https://docs.google.com/document/d/16AKMNz0kI8voEOYHW44cnoOSRRGOUlRIU8ikYPmUDY0/copy"},
      {t:"Day 7 slides", u:"https://docs.google.com/presentation/d/17c2YHItaUAucSNidjMEdk9k2V-7CUTzH5rybAPVQmvw/preview"}
    ],
    missed: "Turn in your Employability Skills Assessment and Journal Entry #1 as soon as you\u2019re back. Favorite Things #1 was due Wednesday \u2014 get it in, and #2 is due Monday. Come find me to walk through the mock interview questions, and get a hall pass to do your three building introductions."
  },
  {
    n: 8, date: "Mon Aug 31", type: "BLOCK", block: "83", published: true,
    title: "LinkedIn, Eve Vang, and your SchooLinks profile",
    did: [
      "Website check \u2014 what everyone\u2019s screen actually said",
      "Favorite Things #2 in",
      "Started a Common Denominators document \u2014 the threads and repeated themes across the things you like and are good at",
      "The \u201cIs it a good fit?\u201d questions, this time as a conversation \u2014 pairs, then swap partners. The move is reacting to what your partner actually said before going to the next question",
      "LinkedIn \u2014 what it is, why you would have one, and how it is used to build and keep connections",
      "Eve Vang\u2019s profile \u2014 what is your impression of her, what did you learn about her",
      "LinkedIn vs SchooLinks \u2014 what will your profile eventually have in common with hers",
      "Work time \u2014 five SchooLinks assessments, then build them into your profile"
    ],
    have: ["Favorite Things #2, turned in", "A document called Common Denominators_LastName, started", "Five SchooLinks assessments under way"],
    due: [
      {t:"SchooLinks profile \u2014 first draft", when:"end of day Wed Sep 2"},
      {t:"Employability Skills \u2014 what are you working on this week?", when:"Wed Sep 2"}
    ],
    links: [
      {t:"Day 8 slides", u:"https://docs.google.com/presentation/d/11MYdwPiU-WxucoTusxFAo0OnymQzRM40F-t8Pa2xoNs/preview"},
      {t:"Employability Skills Assessment", u:"https://docs.google.com/document/d/1ais2uVUjKcqdHA_VXW-bz-Vy5uasM6Bcbzqt8_wtyxc/copy"},
      {t:"SchooLinks", u:"https://www.schoolinks.com/"},
      {t:"Favorite Things \u2014 the full activity (4 tabs)", u:"https://docs.google.com/document/d/1FadCzlPwJGf6q_lgNQ76wo4ca2wWYpbkD6uwKA3_owg/copy"},
      {t:"Professional Contacts \u2014 make your copy", u:"https://docs.google.com/document/d/16AKMNz0kI8voEOYHW44cnoOSRRGOUlRIU8ikYPmUDY0/copy"}
    ],
    missed: "Turn in Favorite Things #2. Start a document called Common Denominators_LastName and put the repeated themes from your activities in it. Then open SchooLinks, do the five assessments, and build your profile from them \u2014 use your own descriptors, not form language. Come find me and I will show you the LinkedIn example we looked at."
  },
  {
    n: 9, date: "Wed Sep 2", type: "BLOCK", block: "83", published: true, plan: true,
    title: "Ikigai and finding your why",
    did: [
      "Website check",
      "Ikigai and finding your why"
    ],
    have: ["Which two Employability Skills you are working on", "Favorite Things #2 completed", "Common Denominators document started"],
    due: [
      {t:"Galloway, \u201cThe Algebra of Wealth\u201d \u2014 what is his argument, and how does he support it?", when:"Tue Sep 8"},
      {t:"Employability Skills", when:"Tue Sep 8"},
      {t:"Journal Entry #2 \u2014 \u201clearn\u201d means in this class or related to your future", when:"Tue Sep 8"}
    ],
    links: [
      {t:"Galloway \u2014 The Algebra of Wealth (Medium)", u:"https://medium.com/@profgalloway/the-algebra-of-wealth-dont-follow-your-passion-follow-your-talent-3af23fb96488"},
      {t:"Simon Sinek \u2014 Finding Your Why", u:"https://youtu.be/nRaqe9M2DYc"},
      {t:"Ikigai Activity \u2014 make your copy", u:"https://docs.google.com/document/d/1-WIjlz25QuxVrlDNRI27LIyIbdJAQWwJMRwDMnQCNpA/copy"},
      {t:"Journal for Career Seminar", u:"https://docs.google.com/document/d/1d7rDk7dLS8mayxoI_lEebzi3UqD0KwgF1qWXJyN1CxM/copy"},
      {t:"Employability Skills Assessment", u:"https://docs.google.com/document/d/1ais2uVUjKcqdHA_VXW-bz-Vy5uasM6Bcbzqt8_wtyxc/copy"},
      {t:"Day 9 slides", u:"https://docs.google.com/presentation/d/14HddlPBO6P2PTV6fLVhcv8_csgLOvrgzRnZn8Di22qw/preview"}
    ],
    missed: "Watch the Simon Sinek \u201cWhy\u201d video and do the Ikigai chart."
  }
];

const ASSIGNED = [
  {published: true, assigned:"Tue Aug 18", what:"Behavior & Transportation Agreement, signed", due:"Fri Aug 21", where:"Behavior & Transportation Agreement", u:"https://docs.google.com/document/d/1Hq66Yi-fpLeXVj3juUG-PzuSdfvHirqcwCfMw2pSx0c/preview"},
  {published: true, assigned:"Wed Aug 19", what:"SchooLinks profile + résumé", due:"TBD", where:"The article (Forbes)", u:"https://www.forbes.com/sites/brunomanno/2024/11/29/four-job-launch-pain-points-in-young-peoples-career-journey/"},
  {published: true, assigned:"Thu Aug 20", what:"Three things people come to you for — each labelled good at / like a lot / known for, plus a competency word", due:"Fri Aug 21", where:"Solutions to Gaps + Who Knows You handout", u:"https://docs.google.com/document/d/1mMUU8ICpqyjta65dn_zaCJ9NdKnBSepOL5jzG-c210g/copy"},
  {published: true, assigned:"Thu Aug 20", what:"Start your Who Knows You list", due:"Fri Aug 21", where:"Solutions to Gaps + Who Knows You handout", u:"https://docs.google.com/document/d/1mMUU8ICpqyjta65dn_zaCJ9NdKnBSepOL5jzG-c210g/copy"},
  {published: true, assigned:"Fri Aug 21", what:"Move your names into the Professional Contacts document", due:"Mon Aug 24", where:"Professional Contacts — make your copy", u:"https://docs.google.com/document/d/16AKMNz0kI8voEOYHW44cnoOSRRGOUlRIU8ikYPmUDY0/copy"},
  {published: true, assigned:"Mon Aug 24", what:"Favorite Things #1 — finish what you started in class", due:"Wed Aug 26", where:"Favorite Things worksheet", u:"https://docs.google.com/document/d/1qcOeL3_789Ao2I3HlejaZaYN_wpTLAaihB4Of7YbYDw/copy"},
  {published: true, assigned:"Wed Aug 26", what:"Journal Entry #1 — finish and share with Mr. Manning", due:"Thu Aug 27", where:"Journal for Career Seminar", u:"https://docs.google.com/document/d/1d7rDk7dLS8mayxoI_lEebzi3UqD0KwgF1qWXJyN1CxM/copy"},
  {published: true, assigned:"Thu Aug 27", what:"Favorite Things #2 — same steps, a new favorite thing", due:"Mon Aug 31", where:"Favorite Things worksheet", u:"https://docs.google.com/document/d/1qcOeL3_789Ao2I3HlejaZaYN_wpTLAaihB4Of7YbYDw/copy"},
  {published: true, assigned:"Mon Aug 31", what:"Common Denominators_LastName \u2014 start the document, add the threads that repeat across your activities", due:"Ongoing", where:"Favorite Things \u2014 the full activity (4 tabs)", u:"https://docs.google.com/document/d/1FadCzlPwJGf6q_lgNQ76wo4ca2wWYpbkD6uwKA3_owg/copy"},
  {published: true, assigned:"Mon Aug 31", what:"SchooLinks profile \u2014 five assessments, then first draft of the profile", due:"Wed Sep 2", where:"SchooLinks", u:"https://www.schoolinks.com/"},
  {published: true, assigned:"Wed Sep 2", what:"Galloway, \u201cThe Algebra of Wealth\u201d \u2014 what is his argument, and how does he support it?", due:"Tue Sep 8", where:"Galloway \u2014 The Algebra of Wealth (Medium)", u:"https://medium.com/@profgalloway/the-algebra-of-wealth-dont-follow-your-passion-follow-your-talent-3af23fb96488"},
  {published: true, assigned:"Wed Sep 2", what:"Journal Entry #2 \u2014 \u201clearn\u201d means in this class or related to your future", due:"Tue Sep 8", where:"Journal for Career Seminar", u:"https://docs.google.com/document/d/1d7rDk7dLS8mayxoI_lEebzi3UqD0KwgF1qWXJyN1CxM/copy"}
];

const WEEKS = [
  {wk:3, dates:"Aug 31 \u2013 Sep 2", unit:"3 \u2014 Career Exploration", focus:"Find Your Why \u00b7 Ikigai \u00b7 Algebra of Wealth"},
  {wk:4, dates:"Sep 8 \u2013 10", unit:"3 \u2014 Career Exploration", focus:"SchooLinks Career Center and Career Clusters \u00b7 speed dating"},
  {wk:5, dates:"Sep 14 \u2013 17", unit:"3 \u2014 Career Exploration", focus:"Industry research \u00b7 project management \u00b7 Odyssey Plan"},
  {wk:6, dates:"Sep 21 \u2013 24", unit:"4 \u2014 Technology Literacy", focus:"Email etiquette, calendar, digital conferencing"},
  {wk:7, dates:"Sep 29 \u2013 Oct 1", unit:"4 \u2014 Technology Literacy", focus:"AI literacy \u00b7 build your interview list"},
  {wk:8, dates:"Oct 5 \u2013 8", unit:"5 \u2014 Networking", focus:"Networking"},
  {wk:9, dates:"Oct 12 \u2013 14", unit:"6 \u2014 Informational Interviews", focus:"Preparing for interviews \u00b7 mock interviews with outside professionals"},
  {wk:10, dates:"Oct 21 \u2013 22", unit:"6 \u2192 7", focus:"Outreach emails sent"},
  {wk:11, dates:"Oct 26 \u2013 29", unit:"7 \u2014 Independence", focus:"Interview #1 \u00b7 Pathways Day Oct 28"},
  {wk:12, dates:"Nov 2 \u2013 5", unit:"7 \u2014 Independence", focus:"Interview #2"},
  {wk:13, dates:"Nov 9 \u2013 12", unit:"7 \u2014 Independence", focus:"Interview #3 \u00b7 OSHA 10 introduced"},
  {wk:14, dates:"Nov 16 \u2013 19", unit:"7 \u2014 Independence", focus:"Interview #4 \u00b7 job shadowing"},
  {wk:15, dates:"Nov 23", unit:"7 \u2014 Independence", focus:"Interview #5 window opens \u00b7 job shadowing"},
  {wk:16, dates:"Nov 30 \u2013 Dec 3", unit:"7 \u2014 Independence", focus:"Interview #5 continues \u00b7 financial literacy"},
  {wk:17, dates:"Dec 7 \u2013 10", unit:"10 \u2014 Post-Secondary Planning", focus:"Interview #5 closes \u00b7 post-secondary plan"},
  {wk:18, dates:"Dec 14 \u2013 17", unit:"11 \u2014 Capstone", focus:"Build and rehearse \u00b7 first presentation slots"},
  {wk:19, dates:"Dec 21 \u2013 22", unit:"11 \u2014 Capstone", focus:"Presentations \u00b7 final journal"}
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
    title:"Unit 3 \u2014 Career Exploration",
    body:"Find Your Why, Ikigai, and the reading that argues with both of them.",
    links:[
      {t:"Simon Sinek \u2014 How great leaders inspire action", u:"https://youtu.be/nRaqe9M2DYc"},
      {t:"Ikigai Activity \u2014 make your copy", u:"https://docs.google.com/document/d/1-WIjlz25QuxVrlDNRI27LIyIbdJAQWwJMRwDMnQCNpA/copy"},
      {t:"Galloway \u2014 The Algebra of Wealth (Medium)", u:"https://medium.com/@profgalloway/the-algebra-of-wealth-dont-follow-your-passion-follow-your-talent-3af23fb96488"}
    ]
  },
  {
    title:"Career search",
    body:"BLS Occupational Outlook Handbook, CareerForce MN, CareerOneStop, Jobs Explained.",
    links:[{t:"BLS Handbook", u:"https://www.bls.gov/ooh/"}]
  }
];

module.exports = { COURSE_OVERVIEW, UNITS, DAYS, ASSIGNED, WEEKS, RESOURCES };
