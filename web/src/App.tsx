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
import { useTheme } from "./hooks/useTheme"

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="app-shell">
      <Hero theme={theme} onToggleTheme={toggle} />
      <SiteNav theme={theme} onToggleTheme={toggle} />
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
    </div>
  )
}
