import { AgileSection } from "./components/AgileSection"
import { GitHubTools } from "./components/GitHubTools"
import { Hero } from "./components/Hero"
import { Maalpinde } from "./components/Maalpinde"
import { MercantecPractice } from "./components/MercantecPractice"
import { Requirements } from "./components/Requirements"
import { ScrumDeep } from "./components/ScrumDeep"
import { SiteFooter } from "./components/SiteFooter"
import { SiteNav } from "./components/SiteNav"
import { Stages } from "./components/Stages"
import { WhatIsScrum } from "./components/WhatIsScrum"
import { XpTdd } from "./components/XpTdd"

export default function App() {
  return (
    <>
      <Hero />
      <SiteNav />
      <main>
        <WhatIsScrum />
        <AgileSection />
        <ScrumDeep />
        <Requirements />
        <XpTdd />
        <Maalpinde />
        <MercantecPractice />
        <GitHubTools />
        <Stages />
      </main>
      <SiteFooter />
    </>
  )
}
