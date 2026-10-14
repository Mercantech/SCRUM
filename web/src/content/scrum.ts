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
    body: "Sig fra, prøv nyt, tag en rolle. Mod til at vise ufærdigt arbejde i review.",
  },
  {
    name: "Focus",
    da: "Fokus",
    body: "Én task ad gangen. Sprintmålet er helligt — undgå sideprojekter midt i ugen.",
  },
  {
    name: "Commitment",
    da: "Forpligtelse",
    body: "Når du tager en task, forpligter du dig over for teamet.",
  },
  {
    name: "Respect",
    da: "Respekt",
    body: "Lyt, giv konstruktiv feedback, hold kamera tændt til møder.",
  },
  {
    name: "Openness",
    da: "Åbenhed",
    body: "Vær ærlig om blockers, estimater og usikkerhed — over for team, kunde og underviser.",
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

export const boardExample = {
  title: "Eksempel: Scrum-board (uge 3)",
  sprintGoal: "Brugeren kan oprette, redigere og slette opgaver",
  columns: [
    {
      name: "Backlog",
      items: ["#21 Notifikationer", "#22 Mørk tilstand"],
    },
    {
      name: "Todo",
      items: ["#18 Slet opgave", "#19 Tom-tilstand"],
    },
    {
      name: "Doing",
      items: ["#17 Rediger opgave (Anna)"],
    },
    {
      name: "Review",
      items: ["#16 Opret opgave (PR #8)"],
    },
    {
      name: "Done",
      items: ["#14 Login", "#15 Listevisning"],
    },
  ],
}

export const burndownExample = {
  title: "Eksempel: Burndown (story points)",
  days: ["Man", "Tir", "Ons", "Tor", "Fre"],
  ideal: [20, 15, 10, 5, 0],
  actual: [20, 18, 14, 9, 3],
  note: "Kurven falder, når arbejde lukkes. Hvis actual ligger over ideal, er I bagud — justér scope eller få hjælp.",
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
      label: "Eksempel: MAGS SCRUM-board",
      href: "https://github.com/orgs/MAGS-Template/projects/6",
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

export type StageId = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

export const stages: {
  id: StageId
  label: string
  title: string
  highlight?: boolean
  points: string[]
}[] = [
  {
    id: "h1",
    label: "H1",
    title: "Kom godt i gang",
    points: [
      "Issues og GitHub Projects-board",
      "Sprints og standup (daily)",
      "Releases allerede fra H1",
      "Ingen formelle roller som krav",
    ],
  },
  {
    id: "h2",
    label: "H2",
    title: "Samme kerne, mere rutine",
    points: [
      "Issues + board fortsætter",
      "Sprints og standup styrkes",
      "Ugentlige Releases",
      "Boardet spejler arbejdet",
    ],
  },
  {
    id: "h3",
    label: "H3",
    title: "Struktur uden roller",
    points: [
      "Issues, board, sprints og Releases",
      "Daily med fokus på blockers",
      "Review og retro på fredag",
      "Stadig uden formelle roller som krav",
    ],
  },
  {
    id: "h4",
    label: "H4",
    title: "Roller + kravspec",
    highlight: true,
    points: [
      "PO, SM og Kundechef (rotation)",
      "I er kunder på egen idé og udviklere på en andens",
      "Kravspec, Use Cases, accepttest (6239)",
      "Agile, Scrum, XP og TDD i dybden (6278)",
    ],
  },
  {
    id: "h5",
    label: "H5",
    title: "Kernepraksis — roller frivillige",
    points: [
      "Issues, board, sprints og Releases",
      "Roller er ikke et krav",
      "Brug H4-erfaringen hvis det hjælper",
    ],
  },
  {
    id: "h6",
    label: "H6",
    title: "Mod svendeprøven",
    points: [
      "Fortsæt den agile kernepraksis",
      "Releases og ærligt board",
      "Roller er ikke et krav",
    ],
  },
]

export const requirements = {
  intro:
    "Før I koder, skal I forstå hvad der skal bygges — og kunne skrive det, så andre kan byde ind eller levere. Det er kernen i IT-kravsspecifikation (6239).",
  methods: [
    {
      name: "Brainstorming",
      body: "Generér mange idéer uden at dømme først. Vælg og prioriter bagefter. Godt til at finde features og risici.",
      visual: "Idé → idé → idé → klynge → top 5",
    },
    {
      name: "Interviews",
      body: "Spørg brugere/kunde: Hvem er I? Hvad er smertepunktet? Hvordan ser succes ud? Notér citater og behov — ikke løsninger.",
      visual: "Spørgsmål → svar → behov → krav",
    },
    {
      name: "Prototyping",
      body: "Lav en billig skitse (Figma, papir, klikbar mock) for at teste idéen, før I investerer i kode.",
      visual: "Skitse → feedback → næste skitse",
    },
    {
      name: "Use Cases",
      body: "Beskriv interaktion: Aktør gør X → system svarer Y. Inkludér happy path og fejlscenarier.",
      visual: "Aktør → System → Resultat",
    },
  ],
  useCaseExample: {
    title: "Use Case: Opret opgave",
    actor: "Elev",
    goal: "Oprette en ny opgave i listen",
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
      body: "Tag kundens ønsker (og Figma) og omsæt dem til testbare krav: funktionelle (“systemet skal…”) og ikke-funktionelle (performance, sikkerhed, tilgængelighed).",
    },
    {
      title: "Kravspec til tilbud",
      body: "En god kravspec gør det muligt at afgive/indhente tilbud: scope, acceptkriterier, deadlines, antagelser og hvad der er uden for scope.",
    },
    {
      title: "Analysér en kravspec",
      body: "Find uklarheder, konflikter, manglende acceptkriterier og urealistisk scope. Stil spørgsmål før I lover leverance.",
    },
  ],
  acceptTest: {
    title: "Accepttest",
    body: "Accepttest tjekker om systemet opfylder aftalte krav — ofte med kunden. Bestået accepttest = “vi er enige om, at det er leveret”.",
    example: [
      "Givet at jeg er logget ind",
      "Når jeg opretter opgaven “Aflevering”",
      "Så ser jeg den øverst i listen",
    ],
  },
  uml: {
    title: "UML i kravarbejdet",
    body: "UML er et notationssprog. Til kravspec bruger I ofte use case-diagrammer, aktivitetsdiagrammer og simple klassediagrammer — ikke nødvendigvis alt UML.",
    types: [
      {
        name: "Use case-diagram",
        body: "Aktører og use cases — overblik over “hvem gør hvad”.",
      },
      {
        name: "Aktivitetsdiagram",
        body: "Flow og beslutninger i en proces.",
      },
      {
        name: "Klassediagram (simpelt)",
        body: "Begreber i domænet: Opgaver, Bruger, Liste.",
      },
    ],
  },
}

export const xp = {
  intro:
    "Extreme Programming (XP) er en Agile metode med fokus på teknisk praksis og tæt samarbejde. Scrum organiserer arbejdet; XP skærper hvordan I bygger software.",
  activities: [
    {
      name: "Listening",
      da: "Lytte",
      body: "Forstå kundens behov — ofte via user stories og dialog.",
    },
    {
      name: "Designing",
      da: "Designe",
      body: "Hold designet simpelt. Refaktorer når I lærer mere.",
    },
    {
      name: "Coding",
      da: "Kode",
      body: "Skriv den simpleste kode der virker. Pair programming hjælper.",
    },
    {
      name: "Testing",
      da: "Teste",
      body: "Automatiserede tests. TDD er en kernepraksis i XP-familien.",
    },
  ],
  practices: [
    {
      name: "Pair programming",
      body: "To personer, én maskine: driver skriver, navigator tænker. Skift ofte. Flere øjne = færre fejl og mere læring.",
    },
    {
      name: "Continuous integration",
      body: "Integrér ofte — små commits, grønne builds.",
    },
    {
      name: "Simple design",
      body: "Ingen over-arkitektur. Byg det I har brug for nu.",
    },
    {
      name: "Refactoring",
      body: "Forbedr struktur uden at ændre adfærd — støttet af tests.",
    },
  ],
}

export const tdd = {
  intro:
    "Test Driven Development: skriv testen først, få den til at fejle, skriv minimal kode, refaktorer.",
  cycle: [
    {
      step: "Red",
      body: "Skriv en test der fejler — den beskriver ønsket adfærd.",
    },
    {
      step: "Green",
      body: "Skriv mindst mulig kode, så testen består.",
    },
    {
      step: "Refactor",
      body: "Ryd op i koden. Tests skal stadig være grønne.",
    },
  ],
  why: [
    "Tvinger jer til at tænke i små, testbare bidder.",
    "Giver et sikkerhedsnet når I ændrer kode.",
    "Dokumenterer adfærd bedre end lange kommentarer.",
  ],
}

export const scenario = {
  title: "Scenarie: Scrum + XP på en uge",
  story:
    "Gruppen “Nord” er udviklere for gruppen “Syds” app-idé: en studiemåls-tracker. De kører Scrum light + XP-praksis.",
  days: [
    {
      day: "Mandag",
      items: [
        "PO prioriterer backlog med Kundechef fra Syd.",
        "Sprint Planning: mål = “opret og se mål”.",
        "Par: Anna + Bo starter TDD på “opret mål”.",
      ],
    },
    {
      day: "Tirsdag–torsdag",
      items: [
        "Daily 10 min ved boardet — blockers synlige.",
        "Pair programming på svære tasks.",
        "PR + review før Done. Board opdateres løbende.",
      ],
    },
    {
      day: "Fredag",
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
