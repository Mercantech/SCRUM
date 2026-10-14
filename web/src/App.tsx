import { GitHubTools } from "./components/GitHubTools"
import { Hero } from "./components/Hero"
import { MercantecPractice } from "./components/MercantecPractice"
import { ScrumCore } from "./components/ScrumCore"
import { SiteFooter } from "./components/SiteFooter"
import { Stages } from "./components/Stages"

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <ScrumCore />
        <MercantecPractice />
        <GitHubTools />
        <Stages />
      </main>
      <SiteFooter />
    </>
  )
}
