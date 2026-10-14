export const site = {
  brand: "SCRUM",
  org: "Mercantec · MAGS",
  tagline: "Agilt teamwork på hovedforløbene",
  intro:
    "Vi arbejder i korte sprints, holder boardet ærligt og leverer med GitHub Releases — fra H1 og frem.",
}

export const ceremonies = [
  {
    name: "Sprint Planning",
    when: "Mandag",
    body: "Vælg opgaver fra toppen af backlog. Definér et sprintmål. Planlægningen behøver ikke tage lang tid, når backlog er prioriteret.",
  },
  {
    name: "Daily Scrum",
    when: "Tir–tor",
    body: "Kort møde (ca. 15 min). Fokus på fremdrift og blockers — ikke et statusmøde. Opgaver skal være så små, at de kan gøres færdig inden næste daily.",
  },
  {
    name: "Sprint Review",
    when: "Fredag",
    body: "Vis det, I har leveret. På skoleprojekter overleverer I ofte til Product Owner — ikke nødvendigvis eksterne stakeholders.",
  },
  {
    name: "Retrospective",
    when: "Fredag",
    body: "Hvad gik godt? Hvad kan forbedres? Hvad forpligter vi os til næste sprint? Næste Scrum Master følger op.",
  },
]

export const artifacts = [
  {
    name: "Product backlog",
    body: "Alle tasks, fejl og features — prioriteret efter værdi for kunden. Grundlaget for sprint-planlægning.",
  },
  {
    name: "Sprint backlog",
    body: "Det I har valgt til dette sprint, baseret på tid, teamstørrelse og et fornuftigt MVP.",
  },
  {
    name: "Definition of Done",
    body: "Aftal hvad “færdig” betyder — typisk: kode, PR godkendt, merged og issue lukket.",
  },
]

export const values = [
  {
    name: "Courage",
    da: "Mod",
    body: "Hop ud i nyt. Tag rollen som PO eller SM og gør dit bedste.",
  },
  {
    name: "Focus",
    da: "Fokus",
    body: "Én task ad gangen. Tag ikke en ny, før PR er godkendt og merged til Done.",
  },
  {
    name: "Commitment",
    da: "Forpligtelse",
    body: "Når du tager en task, forpligter du dig over for teamet — også ved research.",
  },
  {
    name: "Respect",
    da: "Respekt",
    body: "Lyt, giv konstruktiv feedback. Kamera tændt til møder — uden at sidde og spise.",
  },
  {
    name: "Openness",
    da: "Åbenhed",
    body: "Sig fra ved blockers. Vær ærlig over for kunder og undervisere om processen.",
  },
]

export const mercantecPractice = [
  {
    title: "Teams på ~3",
    body: "Ofte tre personer (nogle gange fire). Det kalder vi Scrum light — stadig struktureret, bare tilpasset små hold.",
  },
  {
    title: "Ugentlige sprints",
    body: "Mandag: planning. Tirsdag–torsdag: daily. Fredag: review, retro og Releases — plus forventningsafstemning.",
  },
  {
    title: "Læring først",
    body: "Vi gør ikke alt op i timer og penge. Målet er at vise, at I kan arbejde struktureret efter en agil metode.",
  },
  {
    title: "Boardet spejler virkeligheden",
    body: "GitHub Projects er udgangspunkt for møderne. Hold kolonnerne opdateret — ellers mister I overblikket.",
  },
]

export const githubTools = [
  {
    name: "Issues",
    body: "Tasks, bugs og features i backlog. Små nok til at kunne lukkes inden næste daily, når de er i sprint.",
  },
  {
    name: "Projects",
    body: "SCRUM-board med kolonner der følger jeres flow. Alle møder tager udgangspunkt i boardet.",
    link: {
      label: "Eksempel: MAGS SCRUM-board",
      href: "https://github.com/orgs/MAGS-Template/projects/6",
    },
  },
  {
    name: "Releases",
    body: "Leverance pr. sprint — allerede fra H1. Fredag er typisk release-dag, hvor I pakker det, I har gjort færdigt.",
  },
  {
    name: "Pull requests",
    body: "Luk issues via PR. Commits dokumenterer kodeændringen; kollega-review er en del af Definition of Done.",
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
      "Fokus på at boardet spejler arbejdet",
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
    title: "Roller kommer ind",
    highlight: true,
    points: [
      "Product Owner prioriterer backlog",
      "Scrum Master faciliterer flow og møder",
      "Kundechef (H4): kontakt til kundegruppen",
      "Roller roterer pr. sprint — alle skal prøve",
      "I er kunder på egen idé og udviklere på en andens",
    ],
  },
  {
    id: "h5",
    label: "H5",
    title: "Kernepraksis — roller frivillige",
    points: [
      "Issues, board, sprints og Releases",
      "Samme ceremonier som tidligere",
      "Roller er ikke et krav",
      "Brug det, I lærte på H4, hvis det hjælper teamet",
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
      "Vis, at I kan arbejde struktureret i et lille team",
    ],
  },
]

export const roles = [
  {
    name: "Product Owner",
    short: "PO",
    body: "Definerer og prioriterer krav. Vedligeholder product backlog, så sprint-planlægning bliver enkel.",
  },
  {
    name: "Scrum Master",
    short: "SM",
    body: "Faciliterer SCRUM-processen, holder møderne på sporet og følger op på retrospektivet næste sprint.",
  },
  {
    name: "Udviklingsteam",
    short: "Dev",
    body: "Leverer i sprintet. Opdeler arbejde, hjælper hinanden og holder fokus på én task ad gangen.",
  },
  {
    name: "Kundechef",
    short: "H4",
    body: "H4-specifik rolle: kontakt til “kundegruppen”, forventningsafstemning og rotation så alle prøver rollen.",
  },
]
