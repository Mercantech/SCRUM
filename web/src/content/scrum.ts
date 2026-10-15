export const site = {
  brand: "SCRUM",
  org: "Mercantec · MAGS",
  tagline: "Fra nul til agilt teamwork",
  intro:
    "En visuel guide til Agile, Scrum, kravspecifikation og XP — skrevet til dig, der ikke kender begreberne endnu, og til H4 hvor roller og kravspec bliver alvor.",
}

export const nav = [
  { href: "#hvad-er-scrum", label: "Hvad er Scrum?" },
  { href: "#agile", label: "Agile" },
  { href: "#scrum-dybde", label: "Scrum" },
  { href: "#eksempel", label: "Eksempel" },
  { href: "#krav", label: "Kravspec" },
  { href: "#xp-tdd", label: "XP & TDD" },
  { href: "#github", label: "GitHub & Git" },
  { href: "#mags-board", label: "Board-template" },
  { href: "#maalpinde", label: "Målpinde" },
  { href: "#forloeb", label: "H1–H6" },
]

export const officialLinks = [
  {
    label: "The Scrum Guide (2020)",
    href: "https://scrumguides.org/scrum-guide.html",
    note: "Den officielle definition af Scrum",
  },
  {
    label: "Agile Manifesto",
    href: "https://agilemanifesto.org/",
    note: "De fire værdier",
  },
  {
    label: "12 Agile-principper",
    href: "https://agilemanifesto.org/principles.html",
    note: "Principper bag Agile udvikling",
  },
  {
    label: "Scrum.org",
    href: "https://www.scrum.org/",
    note: "Ressourcer og ordliste",
  },
]

export const whatIsScrum = {
  plain:
    "Forestil dig, at I skal bygge en app. I stedet for at planlægge alt i 6 måneder og håbe det rammer rigtigt, arbejder I i korte cyklusser (sprints) — typisk én uge hos os. Hver uge leverer I noget, I kan vise, får feedback og justerer kursen.",
  bullets: [
    "Scrum er et framework (en ramme) — ikke en opskrift på kode.",
    "Det hjælper teams med at samarbejde, når krav ændrer sig.",
    "Kernen er: roller, ceremonier (møder) og værktøjer (artefakter).",
    "Hos Mercantec bruger vi GitHub Issues, Projects og Releases til at gøre Scrum synligt.",
  ],
  analogy: {
    title: "Køkken-analogi",
    body: "En restaurant laver ikke én kæmpe ret om året. De laver retter hver aften, smager til, og forbedrer menuen. Et sprint er som en aften: planlæg, lav, server (review), lær (retro).",
  },
}

export const agileManifesto = {
  intro:
    "Agile er ikke et værktøj — det er en måde at tænke udvikling på. I 2001 skrev 17 praktikere et manifest. De fire værdier er den korte version:",
  values: [
    {
      left: "Individer og interaktioner",
      right: "processer og værktøjer",
      why: "Mennesker der taler sammen løser problemer hurtigere end en perfekt proces alene.",
    },
    {
      left: "Fungererende software",
      right: "omfattende dokumentation",
      why: "Dokumentation er nyttig — men noget der kører, giver mere værdi.",
    },
    {
      left: "Kundesamarbejde",
      right: "kontraktforhandling",
      why: "Dialogen med kunden undervejs slår en stiv kontrakt, når virkeligheden ændrer sig.",
    },
    {
      left: "Respondere på forandring",
      right: "følge en plan",
      why: "Planer er fine — men forandring er normal. Agile planlægger for at kunne tilpasse.",
    },
  ],
  footnote:
    "Der er stadig værdi i tingene til højre — vi værdsætter bare tingene til venstre mere.",
  principlesShort: [
    "Tilfredsstil kunden med tidlig og løbende levering af værdifuld software.",
    "Byd forandringer velkommen — også sent i forløbet.",
    "Lever fungerende software ofte (uger, ikke måneder).",
    "Forretning og udviklere arbejder sammen dagligt.",
    "Byg projekter omkring motiverede personer — giv dem tillid.",
    "Ansigt-til-ansigt er den mest effektive kommunikation.",
    "Fungererende software er det primære mål for fremskridt.",
    "Agil proces fremmer bæredygtigt tempo.",
    "Kontinuerlig opmærksomhed på teknisk excellence og godt design.",
    "Enkelhed — kunsten at maksimere det arbejde, der ikke gøres — er essentiel.",
    "De bedste arkitekturer og designs kommer fra selvorganiserende teams.",
    "Teamet reflekterer jævnligt over, hvordan det bliver mere effektivt.",
  ],
}

export const agileTools = [
  {
    name: "Product backlog",
    body: "Prioriteret liste over alt, der kunne komme i produktet.",
  },
  {
    name: "Sprint / iteration",
    body: "Fast tidsboks hvor teamet leverer en færdig bid.",
  },
  {
    name: "Board (Kanban/Scrum)",
    body: "Synligt flow: Todo → Doing → Review → Done.",
  },
  {
    name: "User stories",
    body: "“Som [rolle] vil jeg [mål], så [værdi]”.",
  },
  {
    name: "Definition of Done",
    body: "Fælles aftale om, hvornår noget er færdigt.",
  },
  {
    name: "Burndown / velocity",
    body: "Synlighed over fremskridt i sprintet.",
  },
]

export const ceremonies = [
  {
    name: "Sprint Planning",
    aka: "Sprint Planning Workshop",
    when: "Mandag",
    body: "Teamet og Product Owner vælger, hvad der skal ind i sprintet, og sætter et sprintmål. Tag fra toppen af product backlog.",
    example:
      "Mål: “Brugeren kan oprette og se en opgaveliste”. Issues #12, #14, #15 trækkes ind.",
  },
  {
    name: "Daily Scrum",
    aka: "Daily standup",
    when: "Tir–tor · ~15 min",
    body: "Kort synkronisering. Fokus på fremdrift og blockers — ikke et langt statusmøde til chefen.",
    example:
      "Jeg er blokeret af API-auth — SM hjælper med at finde en pair-session.",
  },
  {
    name: "Sprint Review",
    aka: "Sprint Review Meeting",
    when: "Fredag",
    body: "Vis det, der er Done. Få feedback. Opdater backlog ud fra det, I lærte.",
    example: "Demo af login + dashboard. Kunden vil have sortering næste sprint.",
  },
  {
    name: "Retrospective",
    aka: "Ikke i fagets “3 ceremonier” — men i Scrum Guide",
    when: "Fredag",
    body: "Hvad gik godt? Hvad kan forbedres? Hvad forpligter vi os til? Officiel Scrum Guide inkluderer retrospektivet som event.",
    example: "Aftale: issues skal være under 1 dag, før de trækkes ind.",
  },
]

export const artifacts = [
  {
    name: "Product backlog",
    body: "Levende, prioriteret liste over features, bugs og forbedringer. Product Owner ejer prioriteringen.",
  },
  {
    name: "Sprint backlog",
    body: "Det konkrete arbejde teamet har valgt til dette sprint + planen for at nå sprintmålet.",
  },
  {
    name: "Burndown chart",
    body: "Graf over resterende arbejde over tid. Viser om I er på vej til at nå sprintmålet. (Praksis/værktøj — ofte brugt sammen med Scrum.)",
  },
  {
    name: "Increment / Done",
    body: "Det færdige resultat af sprintet. Skal opfylde Definition of Done — hos os typisk: PR, review, merge, Release.",
  },
]

export const values = [
  {
    name: "Courage",
    da: "Mod",
    letter: "C",
    color: "#f0a35e",
    body: "Sig fra, prøv nyt, tag en rolle. Mod til at vise ufærdigt arbejde i review.",
    practice: "Tag Scrum Master-rollen i en uge — også selvom det føles nyt.",
  },
  {
    name: "Focus",
    da: "Fokus",
    letter: "F",
    color: "#2ec4b6",
    body: "Én task ad gangen. Sprintmålet er helligt — undgå sideprojekter midt i ugen.",
    practice: "Ingen ny issue, før den nuværende er i Done.",
  },
  {
    name: "Commitment",
    da: "Forpligtelse",
    letter: "Co",
    color: "#7aa2ff",
    body: "Når du tager en task, forpligter du dig over for teamet.",
    practice: "Sig højt i planning: “Den her lukker jeg inden fredag.”",
  },
  {
    name: "Respect",
    da: "Respekt",
    letter: "R",
    color: "#c084fc",
    body: "Lyt, giv konstruktiv feedback, hold kamera tændt til møder.",
    practice: "I PR-review: foreslå forbedring — ikke bare “LGTM” eller “nej”.",
  },
  {
    name: "Openness",
    da: "Åbenhed",
    letter: "O",
    color: "#3ecf8e",
    body: "Vær ærlig om blockers, estimater og usikkerhed — over for team, kunde og underviser.",
    practice: "Sig i daily: “Jeg er usikker — kan vi pair’e 20 min?”",
  },
]

export const roles = [
  {
    name: "Product Owner",
    short: "PO",
    body: "Maksimerer værdien af produktet. Prioriterer product backlog, siger ja/nej til scope, og sørger for at kravene er forståelige.",
    does: ["Prioriterer backlog", "Afklarer krav med kunde", "Accepterer/afviser Done"],
  },
  {
    name: "Scrum Master",
    short: "SM",
    body: "Faciliterer Scrum-processen. Fjerner blockers, holder ceremonier på sporet, og hjælper teamet med at forbedre sig.",
    does: ["Faciliterer daily/planning", "Følger op på retro", "Skærmer for forstyrrelser"],
  },
  {
    name: "Scrum Team / Developers",
    short: "Dev",
    body: "Det selvorganiserende team der leverer incrementet. Estimérer, bygger, tester og vedligeholder boardet.",
    does: ["Bygger i sprintet", "Opdaterer board", "Reviewer hinandens PR"],
  },
  {
    name: "Kundechef",
    short: "H4",
    body: "Mercantec-H4: kontakt til kundegruppen, forventningsafstemning og rotation så alle prøver rollen.",
    does: ["Fredags-kundemøde", "Krav og Figma", "Feedback til udviklergruppen"],
  },
]

export type TicketKind = "feature" | "bug" | "chore"
export type BoardColumnId = "backlog" | "todo" | "doing" | "review" | "done"

export type BoardTicket = {
  id: string
  title: string
  points: number
  kind: TicketKind
  assignee?: string
  note?: string
}

export type BoardColumn = {
  id: BoardColumnId
  name: string
  hint: string
  color: string
  tickets: BoardTicket[]
}

export const boardExample: {
  title: string
  subtitle: string
  sprintGoal: string
  team: { name: string; role: string; color: string }[]
  stats: { label: string; value: string }[]
  columns: BoardColumn[]
  learn: { title: string; body: string }[]
} = {
  title: "Live-eksempel: Sprint board",
  subtitle: "Gruppe Nord · Uge 3 · Onsdag · matched til MAGS-templaten",
  sprintGoal: "Brugeren kan oprette, redigere og slette opgaver",
  team: [
    { name: "Anna", role: "PO", color: "#2ec4b6" },
    { name: "Bo", role: "SM", color: "#f0a35e" },
    { name: "Chris", role: "Dev", color: "#7aa2ff" },
  ],
  stats: [
    { label: "Sprintmål", value: "CRUD opgaver" },
    { label: "Kapacitet", value: "20 SP" },
    { label: "Done nu", value: "12 SP" },
    { label: "Tilbage", value: "8 SP" },
  ],
  columns: [
    {
      id: "backlog",
      name: "Backlog",
      hint: "Ikke i dette sprint",
      color: "#6b8a88",
      tickets: [
        {
          id: "#11",
          title: "Tom-tilstand på listen",
          points: 2,
          kind: "chore",
          note: "Venter i Backlog-view",
        },
        {
          id: "#10",
          title: "Slet opgave",
          points: 3,
          kind: "feature",
        },
      ],
    },
    {
      id: "todo",
      name: "Todo",
      hint: "Forpligtet i sprintet",
      color: "#7aa2ff",
      tickets: [
        {
          id: "#4",
          title: "Torsdag · Daily",
          points: 0,
          kind: "chore",
          note: "Ceremoni",
        },
        {
          id: "#5",
          title: "Fredag · Review + Retro",
          points: 0,
          kind: "chore",
          note: "Ceremoni",
        },
        {
          id: "#9",
          title: "Rediger opgave",
          points: 3,
          kind: "feature",
          assignee: "Chris",
        },
      ],
    },
    {
      id: "doing",
      name: "In Progress",
      hint: "Max 1 pr. person",
      color: "#f0a35e",
      tickets: [
        {
          id: "#3",
          title: "Onsdag · Daily",
          points: 0,
          kind: "chore",
          assignee: "Bo",
          note: "Ceremoni kører nu",
        },
        {
          id: "#8",
          title: "Opret opgave",
          points: 3,
          kind: "feature",
          assignee: "Anna",
          note: "Næsten færdig",
        },
      ],
    },
    {
      id: "review",
      name: "Review",
      hint: "PR åben (valgfri kolonne)",
      color: "#c084fc",
      tickets: [
        {
          id: "#12",
          title: "Fix crash ved tom titel",
          points: 2,
          kind: "bug",
          assignee: "Bo",
          note: "PR #4",
        },
      ],
    },
    {
      id: "done",
      name: "Done",
      hint: "Merged + DoD",
      color: "#3ecf8e",
      tickets: [
        {
          id: "#6",
          title: "Mandag · Sprint Planning",
          points: 0,
          kind: "chore",
          note: "Ceremoni ✓",
        },
        {
          id: "#2",
          title: "Tirsdag · Daily",
          points: 0,
          kind: "chore",
          note: "Ceremoni ✓",
        },
        {
          id: "#7",
          title: "Login",
          points: 5,
          kind: "feature",
          assignee: "Chris",
        },
        {
          id: "#15",
          title: "Listevisning",
          points: 5,
          kind: "feature",
          assignee: "Anna",
        },
      ],
    },
  ],
  learn: [
    {
      title: "Ceremonier er kort",
      body: "Planning, daily og review ligger på boardet — så ugens rytme ikke glemmes.",
    },
    {
      title: "Boardet er sandheden",
      body: "Arbejder Anna på #8, skal kortet stå i In Progress — ellers lyver daily.",
    },
    {
      title: "Én task ad gangen",
      body: "Max ét produkt-issue i In Progress pr. person. Focus i praksis.",
    },
  ],
}

export const magsBoard = {
  title: "MAGS SCRUM-board template",
  intro:
    "Kopiér den struktur eleverne allerede kender fra MAGS-Template: views der skiller backlog fra sprint, status der matcher virkeligheden, og ceremoni-issues så ugens rytme er synlig.",
  href: "https://github.com/orgs/MAGS-Template/projects/6/views/1",
  repoHref: "https://github.com/MAGS-Template/SCRUM",
  views: [
    {
      name: "Backlog",
      color: "#7aa2ff",
      body: "Alt der ikke er In Progress eller Done. Her ligger kommende features og kommende ceremonier — uden at støje i sprintet.",
      filter: "-status:\"In Progress\",Done",
    },
    {
      name: "Sprint",
      color: "#f0a35e",
      body: "Kanban for den aktuelle uge. Gruppér på Status. Opret Sprint 2, Sprint 3 … efter behov.",
      filter: "Kun ugens Todo / In Progress / Done",
    },
  ],
  statuses: [
    {
      name: "Todo",
      color: "#7aa2ff",
      rule: "Kun det I har forpligtet jer til i planning",
    },
    {
      name: "In Progress",
      color: "#f0a35e",
      rule: "Max 1 aktivt produkt-issue pr. person",
    },
    {
      name: "Done",
      color: "#3ecf8e",
      rule: "Merged + Definition of Done — så luk issue",
    },
  ],
  optionalReview: {
    name: "Review (valgfri)",
    body: "Tilføj en Status mellem In Progress og Done, når I vil synliggøre åbne PR’er. Templaten virker også uden.",
  },
  ceremonies: [
    {
      day: "Man",
      title: "Sprint Planning",
      color: "#2ec4b6",
      time: "20–30 min",
      agenda: [
        "Skriv sprintmål i én sætning",
        "Træk issues Backlog → Todo",
        "Fordel assignee — hold scope realistisk",
      ],
      output: "Sprintmål + Todo-liste aftalt",
    },
    {
      day: "Tir–tor",
      title: "Daily Scrum",
      color: "#f0a35e",
      time: "10–15 min",
      agenda: [
        "I går / i dag / blocker",
        "Boardet er åbent hele tiden",
        "Flyt kort der ikke matcher virkeligheden",
      ],
      output: "Blockers synlige + plan for dagen",
    },
    {
      day: "Fre",
      title: "Review · Retro · Release",
      color: "#c084fc",
      time: "30–45 min",
      agenda: [
        "Demo det der er Done ift. sprintmål",
        "Én retro-handling til næste uge",
        "GitHub Release med korte notes",
      ],
      output: "Feedback + release-link + næste skridt",
    },
  ],
  rules: [
    {
      title: "Ceremonier er arbejde",
      body: "Flyt ceremoni-issue til In Progress under mødet, og Done når output er skrevet i en kommentar.",
    },
    {
      title: "Små issues",
      body: "Kan I ikke lukke den inden fredag, så split den — ellers lyver burndown og board.",
    },
    {
      title: "Labels med mening",
      body: "Brug type:feature / type:bug / type:chore / ceremony. Prioritet kun når det hjælper planning.",
    },
    {
      title: "DoD før Done",
      body: "PR + review + merge + lukket issue. Done er ikke “jeg er færdig på min maskine”.",
    },
  ],
  setup: [
    {
      step: "1",
      title: "Fork eller kopiér repo",
      body: "Start fra MAGS-Template/SCRUM — README og issue-templates følger med.",
    },
    {
      step: "2",
      title: "Opret Project (Board)",
      body: "Status-felt: Todo, In Progress, Done. Tilføj Review hvis I vil synliggøre PR’er.",
    },
    {
      step: "3",
      title: "Lav to views",
      body: "Backlog (skjul In Progress/Done) + Sprint (Kanban på Status).",
    },
    {
      step: "4",
      title: "Seed ugen",
      body: "Ceremoni-issues + 3–8 produkt-issues i Todo. Skriv sprintmål i planning-issue.",
    },
  ],
}

export const burndownExample = {
  title: "Burndown: resterende story points",
  subtitle: "Samme sprint — sådan læser I kurven",
  days: ["Man", "Tir", "Ons", "Tor", "Fre"],
  ideal: [20, 15, 10, 5, 0],
  actual: [20, 18, 14, 9, 3],
  annotations: [
    { day: 0, text: "Planning: 20 SP valgt" },
    { day: 2, text: "Ons: tempo stiger" },
    { day: 4, text: "Fre: 3 SP tilbage (#17)" },
  ],
  readTips: [
    {
      title: "Ideal-linjen",
      body: "Den stiplede linje er “hvis vi brænder jævnt af”. Den er et pejlemærke — ikke en dom.",
    },
    {
      title: "Over ideal = bagud",
      body: "Tirsdag lå actual over ideal (18 vs 15). Teamet snakkede blockers i daily.",
    },
    {
      title: "Handl i tide",
      body: "På torsdag kunne de skære #19 ud af sprintet — hellere et færdigt mål end tre halv færdige.",
    },
  ],
  note: "Burndown er et af Scrums klassiske værktøjer (sammen med product- og sprint backlog).",
}

export const dailyExample = {
  title: "Mini Daily Scrum (onsdag)",
  duration: "~12 min",
  lines: [
    {
      who: "Anna",
      role: "PO/Dev",
      color: "#2ec4b6",
      text: "I går: listevisning Done. I dag: rediger-formular. Blocker: ingen.",
    },
    {
      who: "Bo",
      role: "SM",
      color: "#f0a35e",
      text: "I går: startede opret-opgave. I dag: færdiggør + åbn PR. Blocker: usikker på validering.",
    },
    {
      who: "Chris",
      role: "Dev",
      color: "#7aa2ff",
      text: "I går: login merged. I dag: pair med Bo på validering — så blocker væk.",
    },
  ],
  takeaway:
    "Daily er ikke status til underviseren. Det er et kort synk: fremdrift, plan og blockers — med boardet som sandhed.",
}

export const dodExample = {
  title: "Definition of Done (eksempel)",
  items: [
    "Kode på branch + PR oprettet",
    "Mindst ét review fra en anden i teamet",
    "Merged til main",
    "Issue lukket og flyttet til Done",
    "Dækket af sprint-Release (fredag)",
  ],
}

export const mercantecPractice = [
  {
    title: "Teams på ~3",
    body: "Ofte tre personer (nogle gange fire). Scrum light — stadig struktureret, tilpasset små hold.",
  },
  {
    title: "Ugentlige sprints",
    body: "Mandag: planning. Tir–tor: daily. Fredag: review, retro og Releases.",
  },
  {
    title: "Læring først",
    body: "Vi måler ikke kun “output”. Målet er at vise, at I kan arbejde struktureret og agilt.",
  },
  {
    title: "Boardet spejler virkeligheden",
    body: "GitHub Projects er udgangspunkt for møderne. Hold kolonnerne ærlige.",
  },
]

export const githubTools = [
  {
    name: "Issues",
    body: "Tasks, bugs og features i backlog. Små nok til at kunne lukkes inden næste daily.",
  },
  {
    name: "Projects",
    body: "Scrum-board med kolonner der følger jeres flow.",
    link: {
      label: "Live: MAGS SCRUM-board",
      href: "https://github.com/orgs/MAGS-Template/projects/6/views/1",
    },
  },
  {
    name: "Releases",
    body: "Leverance pr. sprint — allerede fra H1. Fredag er typisk release-dag.",
  },
  {
    name: "Pull requests",
    body: "Luk issues via PR. Commits dokumenterer ændringen; review er del af Done.",
  },
]

export const goodIssue = {
  title: "Eksempel: En god issue",
  subtitle: "Tags + beskrivelse + acceptkriterier — klar til at blive trukket ind i sprintet",
  number: "#17",
  heading: "Elev kan redigere en eksisterende opgave",
  tags: [
    { label: "feature", color: "#2ec4b6" },
    { label: "sprint-3", color: "#7aa2ff" },
    { label: "priority:high", color: "#f0a35e" },
    { label: "frontend", color: "#c084fc" },
  ],
  meta: [
    { label: "Assignee", value: "Anna" },
    { label: "Estimate", value: "3 SP" },
    { label: "Project", value: "Todo → Doing" },
  ],
  description: [
    "Som elev vil jeg kunne rette titel og deadline på en opgave, så jeg kan rette tastefejl uden at slette og oprette forfra.",
    "Baggrund: Kunden (gruppe Syd) har prioriteret redigering lige efter opret/liste i sprintmål for uge 3.",
  ],
  acceptance: [
    "Eleven kan åbne en eksisterende opgave og ændre titel + deadline",
    "Tom titel viser fejl og gemmer ikke",
    "Efter gem opdateres listen med det nye indhold uden reload-fejl",
    "Ændringen er dækket af mindst én automatiseret test eller manuel accepttest noteret i PR",
  ],
  tips: [
    "Én issue = ét klart resultat. Del store features op.",
    "Acceptkriterier skal være testbare (ja/nej).",
    "Tags hjælper boardet: type, sprint, prioritet, område.",
  ],
}

export const gitWorkflow = {
  title: "Git best practice: 1 issue → 1 branch → 1 PR",
  intro:
    "Hold historikken ren og review nemt: hver issue får sin egen branch og sin egen pull request. Når PR merges, lukkes issuen.",
  steps: [
    {
      title: "Tag issuen",
      color: "#7aa2ff",
      body: "Flyt til Doing / assign dig selv. Ingen anden arbejder på samme issue.",
      cmd: "Issue #17 → Assignee: Anna",
    },
    {
      title: "Opret branch fra main",
      color: "#2ec4b6",
      body: "Navngiv branchen efter type + issue-nummer + kort slug.",
      cmd: "git checkout main && git pull\ngit checkout -b feature/17-edit-task",
    },
    {
      title: "Små commits",
      color: "#f0a35e",
      body: "Commit ofte med klare beskeder. Referér gerne issuen.",
      cmd: "git commit -m \"Add edit form for task (#17)\"",
    },
    {
      title: "Åbn PR",
      color: "#c084fc",
      body: "PR mod main. Beskriv hvad/hvorfor, link issuen, og bed om review.",
      cmd: "Closes #17",
    },
    {
      title: "Review → merge → Done",
      color: "#3ecf8e",
      body: "Kollega reviewer. Merge til main. Issue lukkes automatisk og flyttes til Done.",
      cmd: "PR #8 approved → squash merge",
    },
  ],
  naming: [
    { pattern: "feature/17-edit-task", meaning: "Ny funktionalitet" },
    { pattern: "fix/13-empty-title", meaning: "Bugfix" },
    { pattern: "chore/19-empty-state", meaning: "Oprydning / UI-polering" },
  ],
  prChecklist: [
    "Titel matcher issuen (gerne med #17)",
    "Beskrivelse: hvad er lavet + hvordan testes det",
    "Linje `Closes #17` (eller `Fixes #17`) så issuen lukkes ved merge",
    "Mindst ét review fra en anden i teamet",
    "Ingen hemmeligheder / .env i commit",
  ],
  antiPatterns: [
    "Én kæmpe branch med 8 issues blandet sammen",
    "Push direkte til main uden PR",
    "PR uden link til issue — boardet mister sporbarhed",
    "“WIP hele ugen” uden commits — ingen synlig fremdrift",
  ],
}

export type StagePhaseId = "early" | "h4" | "late"

export type StageBlock = {
  title: string
  body: string
  items?: string[]
}

export type StageLevelDetail = {
  level: string
  body: string
}

export const stagePhases: {
  id: StagePhaseId
  range: string
  levels: string[]
  title: string
  summary: string
  highlight?: boolean
  goal: string
  byLevel?: StageLevelDetail[]
  blocks?: StageBlock[]
  points: string[]
  tip: string
  links?: { label: string; href: string }[]
}[] = [
  {
    id: "early",
    range: "H1–H3",
    levels: ["H1", "H2", "H3"],
    title: "Kernepraksis uden roller",
    summary:
      "Her lærer I at arbejde agilt i praksis — før I skal forklare metoder og roller til en underviser. Fokus er rytme, synlighed og små leverancer.",
    goal: "Kunne køre en uge som et mini-sprint: planlægge, bygge, vise og forbedre — uden formelle roller.",
    byLevel: [
      {
        level: "H1",
        body: "Første møde med Issues, board og ugentlige sprints. I vænner jer til at arbejde synligt: alt arbejde ligger på GitHub, og fredag er der noget at vise (release).",
      },
      {
        level: "H2",
        body: "Samme kernepraksis, men med mere ansvar for kvalitet: bedre issues, kortere feedback-loops og stærkere vaner omkring PR og review.",
      },
      {
        level: "H3",
        body: "I konsoliderer rytmen. Boardet skal være troværdigt, daily skal være nyttig, og I skal kunne forklare hvorfor I arbejder som I gør — stadig uden krav om roller.",
      },
    ],
    points: [
      "GitHub Issues + Projects-board er jeres fælles sandhed",
      "Ugentlige sprints med planning, daily, review og retro",
      "Releases allerede fra H1 — I øver at levere, ikke kun kode",
      "Ingen formelle roller (PO/SM/Kundechef) som krav endnu",
      "Målet er vane: synligt arbejde, små bidder, ærlig status",
    ],
    tip: "Hvis boardet ikke matcher virkeligheden, er det boardet der skal opdateres — ikke historien I fortæller underviseren.",
  },
  {
    id: "h4",
    range: "H4",
    levels: ["H4"],
    title: "Hoppet — roller, krav og metodik",
    summary:
      "H4 er det store skifte. Nu skal I både levere software og kunne forklare metodikken: kravspecifikation (6239) og programmeringsmetodik (6278). I spiller to roller på én gang — kunde og udvikler.",
    highlight: true,
    goal: "Kunne skrive og læse krav, køre Scrum med roller, og beskrive Agile/XP/TDD med egne eksempler fra projektet.",
    blocks: [
      {
        title: "To hold, to sider",
        body: "I er kunder på jeres egen idé og udviklere på en anden gruppes idé. Det træner begge sider af leverancen: klare krav og ærlig feedback — og at bygge det kunden rent faktisk bad om.",
        items: [
          "Kundechef holder kontakt, forventninger og fredagsmøde",
          "Udviklergruppen leverer increments mod jeres accepttest",
          "Rotation: alle skal prøve kundechef-rollen",
        ],
      },
      {
        title: "Scrum-roller i praksis",
        body: "Nu er roller et krav — ikke bare labels. Product Owner prioriterer, Scrum Master faciliterer, teamet leverer. Kundechef er Mercantec-rollen der binder kundegruppen sammen.",
        items: [
          "PO: backlog, scope, “done nok til demo?”",
          "SM: ceremonier, blockers, at teamet følger processen",
          "Dev-team: estimater, PR, board, kvalitet",
          "Kundechef: krav, Figma/feedback, fredags-kundemøde",
        ],
      },
      {
        title: "6239 · IT-kravsspecifikation",
        body: "En uge med fokus på at omsætte behov til noget I kan byde ind på og teste. Det er ikke “ekstra dokumentation” — det er kontrakten mellem kunde og udvikler.",
        items: [
          "Metoder: brainstorm, interviews, prototyping, Use Cases",
          "Skriv kravspec der kan bruges til tilbud / afklaring",
          "Læs og analysér andres kravspec",
          "Accepttest: hvordan ved I at det er godt nok?",
          "UML: use case-, aktivitets- og simple klassediagrammer",
        ],
      },
      {
        title: "6278 · Programmeringsmetodik",
        body: "En uge hvor I skal kunne beskrive Agile, Scrum, XP og TDD — med jeres eget projekt som eksempel. Teori uden praksis tæller ikke; praksis uden sprog tæller heller ikke.",
        items: [
          "Agile-manifest + principper (hvorfor I arbejder iterativt)",
          "Scrum: roller, ceremonier, backlog/burndown",
          "XP: listening, designing, coding, testing + pairing",
          "TDD: red → green → refactor som vane",
          "Ét samlet scenarie der binder Scrum og XP sammen",
        ],
      },
    ],
    points: [
      "H4 er tungere end H1–H3 — planlæg tid til både kode og dokumentation",
      "Hold board og kravspec synkroniseret: issues skal spejle aftalte krav",
      "Demo for kunden på fredag er jeres “sandhedscheck”",
      "Brug siden her aktivt: målpinde, UML, XP/TDD og roller linker direkte ind",
    ],
    tip: "Spørg altid: “Hvilket krav / hvilken accepttest dækker det her issue?” — hvis I ikke kan svare, er issue’et for vagt.",
    links: [
      { label: "Målpinde 6239 & 6278", href: "#maalpinde" },
      { label: "Kravspec & UML", href: "#krav" },
      { label: "Roller", href: "#roller" },
      { label: "XP & TDD", href: "#xp-tdd" },
    ],
  },
  {
    id: "late",
    range: "H5–H6",
    levels: ["H5", "H6"],
    title: "Kernepraksis — roller frivillige",
    summary:
      "I vender tilbage til den agile rytme fra H1–H3, men med H4-erfaringen i bagagen. Roller er ikke et krav — god struktur er.",
    goal: "Vise selvstændigt, struktureret samarbejde mod svendeprøven: synligt arbejde, rene leverancer og professionel kommunikation.",
    byLevel: [
      {
        level: "H5",
        body: "Genstart kernepraksis uden rollekrav. Brug det I lærte på H4 (krav, accepttest, ceremonier) når det hjælper — drop det der bliver teater.",
      },
      {
        level: "H6",
        body: "Sidste hovedforløb før svendeprøven. Fokus på at I kan køre et projekt professionelt: backlog, kvalitet, releases og samarbejde under tidspres.",
      },
    ],
    points: [
      "Issues, board, sprints og Releases fortsætter som standard",
      "Roller (PO/SM/Kundechef) er frivillige — kun hvis teamet har gavn af dem",
      "Tag H4-værktøjerne med: klare issues, acceptkriterier, ærlig retro",
      "Mod svendeprøven: dokumentér valg og vis at I kan arbejde agilt uden at blive bedt om det",
    ],
    tip: "Frivillige roller betyder ikke “ingen proces”. Det betyder at I selv vælger den letteste struktur der stadig holder jer ærlige.",
  },
]

export const requirements = {
  intro:
    "Før I koder, skal I forstå hvad der skal bygges — og kunne skrive det, så andre kan byde ind eller levere. Det er kernen i IT-kravsspecifikation (6239).",
  pipeline: [
    { label: "Behov", color: "#7aa2ff" },
    { label: "Metoder", color: "#c084fc" },
    { label: "Kravspec", color: "#f0a35e" },
    { label: "Accepttest", color: "#3ecf8e" },
  ],
  methods: [
    {
      name: "Brainstorming",
      color: "#f0a35e",
      body: "Generér mange idéer uden at dømme først. Vælg og prioriter bagefter. Godt til at finde features og risici.",
      visual: ["Idé", "Idé", "Idé", "Klynge", "Top 5"],
      do: "Sæt 10 minutter på uret. Ingen kritik midt i flowet — sorter bagefter.",
      example: "Post-its: notifikationer, offline, dark mode, deling, statistik…",
    },
    {
      name: "Interviews",
      color: "#7aa2ff",
      body: "Spørg brugere/kunde: Hvem er I? Hvad er smertepunktet? Hvordan ser succes ud? Notér citater og behov — ikke løsninger.",
      visual: ["Spørgsmål", "Svar", "Behov", "Krav"],
      do: "Spørg “hvorfor?” tre gange før I foreslår en feature.",
      example: "“Jeg glemmer afleveringer” → behov: påmindelser — ikke “byg en AI”.",
    },
    {
      name: "Prototyping",
      color: "#c084fc",
      body: "Lav en billig skitse (Figma, papir, klikbar mock) for at teste idéen, før I investerer i kode.",
      visual: ["Skitse", "Feedback", "Ny skitse"],
      do: "Vis prototypen til kunden fredag — før I har skrevet backend.",
      example: "Figma-flow: Login → Liste → Ny opgave → Bekræftelse.",
    },
    {
      name: "Use Cases",
      color: "#3ecf8e",
      body: "Beskriv interaktion: Aktør gør X → system svarer Y. Inkludér happy path og fejlscenarier.",
      visual: ["Aktør", "System", "Resultat"],
      do: "Skriv altid mindst ét alternativt forløb (fejl / tom input).",
      example: "Se det fulde eksempel nedenfor: “Opret opgave”.",
    },
  ],
  useCaseExample: {
    title: "Use Case: Opret opgave",
    id: "UC-01",
    actor: "Elev",
    goal: "Oprette en ny opgave i listen",
    pre: "Eleven er logget ind",
    post: "Opgaven findes i listen og er synlig for eleven",
    main: [
      "Eleven åbner appen og trykker “Ny opgave”.",
      "Systemet viser en formular (titel, deadline).",
      "Eleven udfylder og trykker “Gem”.",
      "Systemet gemmer og viser opgaven i listen.",
    ],
    alt: [
      "Titel er tom → systemet viser fejl og gemmer ikke.",
      "Ingen netværk → systemet viser offline-besked.",
    ],
  },
  specSteps: [
    {
      title: "Fra produkt-/designkrav til kravspec",
      color: "#7aa2ff",
      body: "Tag kundens ønsker (og Figma) og omsæt dem til testbare krav: funktionelle (“systemet skal…”) og ikke-funktionelle (performance, sikkerhed, tilgængelighed).",
      checklist: [
        "Funktionelle krav (hvad systemet gør)",
        "Ikke-funktionelle krav (hvordan det opfører sig)",
        "Acceptkriterier pr. krav",
      ],
      example:
        "FR-01: Systemet skal lade en elev oprette en opgave med titel og deadline.",
    },
    {
      title: "Kravspec til tilbud",
      color: "#f0a35e",
      body: "En god kravspec gør det muligt at afgive/indhente tilbud: scope, acceptkriterier, deadlines, antagelser og hvad der er uden for scope.",
      checklist: [
        "Scope (i / ude)",
        "Tidsramme og leverancer",
        "Antagelser og afhængigheder",
      ],
      example: "Ude af scope: push-notifikationer (parkeres til næste sprint).",
    },
    {
      title: "Analysér en kravspec",
      color: "#c084fc",
      body: "Find uklarheder, konflikter, manglende acceptkriterier og urealistisk scope. Stil spørgsmål før I lover leverance.",
      checklist: [
        "Er kravene testbare?",
        "Er der konflikter mellem krav?",
        "Er estimatet realistisk for 1 uge?",
      ],
      example: "“Hurtig app” er uklart → spørg: “Under 2 sek. til listevisning?”",
    },
  ],
  reqTypes: [
    {
      name: "Funktionelt",
      color: "#2ec4b6",
      body: "Hvad systemet skal gøre.",
      example: "Eleven kan slette en opgave.",
    },
    {
      name: "Ikke-funktionelt",
      color: "#f0a35e",
      body: "Kvalitetskrav til driften.",
      example: "Listen loader på under 2 sekunder.",
    },
  ],
  acceptTest: {
    title: "Accepttest",
    body: "Accepttest tjekker om systemet opfylder aftalte krav — ofte med kunden. Bestået accepttest = “vi er enige om, at det er leveret”.",
    steps: [
      { key: "Given", da: "Givet", text: "at jeg er logget ind", color: "#7aa2ff" },
      {
        key: "When",
        da: "Når",
        text: "jeg opretter opgaven “Aflevering”",
        color: "#f0a35e",
      },
      {
        key: "Then",
        da: "Så",
        text: "ser jeg den øverst i listen",
        color: "#3ecf8e",
      },
    ],
    tips: [
      "Skriv accepttest sammen med kunden — ikke efter demo.",
      "Én test = ét klart resultat (bestået / ikke bestået).",
      "Kobl testen til et krav-ID (fx FR-01).",
    ],
  },
  uml: {
    title: "UML i kravarbejdet",
    body: "UML er et notationssprog. Til kravspec bruger I ofte use case-diagrammer, aktivitetsdiagrammer og simple klassediagrammer — ikke nødvendigvis alt UML.",
    types: [
      {
        name: "Use case-diagram",
        color: "#3ecf8e",
        body: "Aktører og use cases — overblik over “hvem gør hvad”. Stickfigur uden for systemgrænsen, ovaler indenfor.",
      },
      {
        name: "Aktivitetsdiagram",
        color: "#7aa2ff",
        body: "Flow og beslutninger i en proces. Fyldt cirkel = start, ring = slut, diamant = valg.",
      },
      {
        name: "Klassediagram (simpelt)",
        color: "#c084fc",
        body: "Begreber i domænet med attributter og associationer — her User 1—* Task.",
      },
    ],
  },
}

export const xp = {
  intro:
    "Extreme Programming (XP) er en Agile metode med fokus på teknisk praksis og tæt samarbejde. Scrum organiserer arbejdet; XP skærper hvordan I bygger software.",
  compare: [
    {
      side: "Scrum",
      color: "#2ec4b6",
      points: [
        "Roller, ceremonier, backlog",
        "Hvad og hvornår vi leverer",
        "Synligt flow på boardet",
      ],
    },
    {
      side: "XP",
      color: "#c084fc",
      points: [
        "Tekniske praksisser i koden",
        "Hvordan vi bygger sikkert",
        "Pairing, tests, simpel design",
      ],
    },
  ],
  activities: [
    {
      name: "Listening",
      da: "Lytte",
      color: "#7aa2ff",
      body: "Forstå kundens behov — ofte via user stories og dialog.",
      example: "Kundechef: “Vi skal kunne oprette et studiemål på under 30 sek.”",
    },
    {
      name: "Designing",
      da: "Designe",
      color: "#c084fc",
      body: "Hold designet simpelt. Refaktorer når I lærer mere.",
      example: "Skitse: Goal { id, title, done } — intet mere end nødvendigt.",
    },
    {
      name: "Coding",
      da: "Kode",
      color: "#f0a35e",
      body: "Skriv den simpleste kode der virker. Pair programming hjælper.",
      example: "Anna driver, Bo navigator — skift hvert 15. minut.",
    },
    {
      name: "Testing",
      da: "Teste",
      color: "#3ecf8e",
      body: "Automatiserede tests. TDD er en kernepraksis i XP-familien.",
      example: "Test først: createGoal(\"Aflevering\") returnerer et mål med titel.",
    },
  ],
  practices: [
    {
      name: "Pair programming",
      color: "#f0a35e",
      body: "To personer, én maskine: driver skriver, navigator tænker. Skift ofte. Flere øjne = færre fejl og mere læring.",
      tip: "Sæt et timer — 15 min, så bytter I roller.",
    },
    {
      name: "Continuous integration",
      color: "#2ec4b6",
      body: "Integrér ofte — små commits, grønne builds.",
      tip: "Hellere 5 små PR’er end én kæmpe fredags-merge.",
    },
    {
      name: "Simple design",
      color: "#7aa2ff",
      body: "Ingen over-arkitektur. Byg det I har brug for nu.",
      tip: "Spørg: “Har vi brug for det i dette sprint?”",
    },
    {
      name: "Refactoring",
      color: "#c084fc",
      body: "Forbedr struktur uden at ændre adfærd — støttet af tests.",
      tip: "Kun refaktorér når tests er grønne.",
    },
  ],
  pairRoles: [
    {
      role: "Driver",
      color: "#f0a35e",
      body: "Har tastaturet. Skriver den næste lille bid kode.",
    },
    {
      role: "Navigator",
      color: "#7aa2ff",
      body: "Ser det store billede, spotter fejl, foreslår næste skridt.",
    },
  ],
}

export const tdd = {
  intro:
    "Test Driven Development: skriv testen først, få den til at fejle, skriv minimal kode, refaktorer. Cyklussen hedder Red → Green → Refactor.",
  cycle: [
    {
      step: "Red",
      da: "Rød",
      color: "#e07070",
      body: "Skriv en test der fejler — den beskriver ønsket adfærd.",
      code: 'test("createGoal sætter titel", () => {\n  const g = createGoal("Aflevering");\n  expect(g.title).toBe("Aflevering");\n});',
      note: "Testen fejler, fordi createGoal endnu ikke findes — det er meningen.",
    },
    {
      step: "Green",
      da: "Grøn",
      color: "#3ecf8e",
      body: "Skriv mindst mulig kode, så testen består.",
      code: 'function createGoal(title) {\n  return { title };\n}',
      note: "Ikke smukt — bare nok til at blive grøn. Skønhed kommer i næste skridt.",
    },
    {
      step: "Refactor",
      da: "Ryd op",
      color: "#2ec4b6",
      body: "Ryd op i koden. Tests skal stadig være grønne.",
      code: 'function createGoal(title) {\n  if (!title.trim()) throw new Error("Tom");\n  return { id: crypto.randomUUID(), title };\n}',
      note: "Nu tilføjer I struktur — men kun mens tests forbliver grønne.",
    },
  ],
  why: [
    {
      title: "Små bidder",
      body: "Tvinger jer til at tænke i testbare skridt — ikke én kæmpe funktion.",
    },
    {
      title: "Sikkerhedsnet",
      body: "Når I ændrer kode senere, råber de røde tests, før brugeren gør.",
    },
    {
      title: "Levende dokumentation",
      body: "Tests beskriver adfærd tydeligere end lange kommentarer.",
    },
  ],
}

export const scenario = {
  title: "Scenarie: Scrum + XP på en uge",
  story:
    "Gruppen “Nord” er udviklere for gruppen “Syds” app-idé: en studiemåls-tracker. De kører Scrum light + XP-praksis.",
  days: [
    {
      day: "Mandag",
      color: "#2ec4b6",
      label: "Planning + start",
      items: [
        "PO prioriterer backlog med Kundechef fra Syd.",
        "Sprint Planning: mål = “opret og se mål”.",
        "Par: Anna + Bo starter TDD på “opret mål”.",
      ],
    },
    {
      day: "Tir–tor",
      color: "#f0a35e",
      label: "Byg + pair",
      items: [
        "Daily 10 min ved boardet — blockers synlige.",
        "Pair programming på svære tasks.",
        "PR + review før Done. Board opdateres løbende.",
      ],
    },
    {
      day: "Fredag",
      color: "#c084fc",
      label: "Review + release",
      items: [
        "Sprint Review / demo for Syd (kunden).",
        "Accepttest på de aftalte scenarier.",
        "Release på GitHub. Retro: “issues var for store”.",
      ],
    },
  ],
}

export const maalPinde = [
  {
    code: "6239",
    title: "IT-kravsspecifikation",
    weeks: "1 uge · H4 · 5 målpinde",
    items: [
      {
        id: 1,
        text: "Kendskab til principper/metoder der omsætter virksomheds-, bruger- og kundekrav til produkt- og designkrav (brainstorming, interviews, prototyping, Use Case).",
        anchors: ["#krav"],
      },
      {
        id: 2,
        text: "Med udgangspunkt i produkt-/designkrav udarbejde en kravspecifikation til brug ved tilbud.",
        anchors: ["#krav"],
      },
      {
        id: 3,
        text: "Analysere en kravspecifikation i forbindelse med afgivelse/indhentning af tilbud.",
        anchors: ["#krav"],
      },
      {
        id: 4,
        text: "Kendskab til accepttest.",
        anchors: ["#accepttest"],
      },
      {
        id: 5,
        text: "Udarbejde dokumentation i fx UML-notation i forbindelse med kravspecifikation.",
        anchors: ["#uml"],
      },
    ],
  },
  {
    code: "6278",
    title: "Programmeringsmetodik",
    weeks: "1 uge · H4 · 9 målpinde",
    items: [
      {
        id: 1,
        text: "Beskrive grundlæggende elementer i Agile metoder og Agile-manifestet.",
        anchors: ["#agile"],
      },
      {
        id: 2,
        text: "Beskrive grundlæggende principper inden for Agile softwareudvikling.",
        anchors: ["#agile-principper"],
      },
      {
        id: 3,
        text: "Beskrive de mest almindelige redskaber i Agile projekter.",
        anchors: ["#agile-redskaber"],
      },
      {
        id: 4,
        text: "Beskrive Scrums tre roller: Product Owner, Scrum Master og Scrum Team.",
        anchors: ["#roller"],
      },
      {
        id: 5,
        text: "Beskrive Scrums tre ceremonier: Sprint Planning, Daily Scrum, Sprint Review.",
        anchors: ["#scrum-dybde"],
      },
      {
        id: 6,
        text: "Beskrive Scrums tre værktøjer: Product Backlog, Sprint Backlog og Burndown Chart.",
        anchors: ["#vaerktoejer"],
      },
      {
        id: 7,
        text: "Beskrive XP: fire aktiviteter + pair programming.",
        anchors: ["#xp-tdd"],
      },
      {
        id: 8,
        text: "Beskrive principperne i Test Driven Development (TDD).",
        anchors: ["#tdd"],
      },
      {
        id: 9,
        text: "Beskrive et scenarie der bruger Agile principper fra Scrum og XP.",
        anchors: ["#scenarie"],
      },
    ],
  },
]
