import { mercantecPractice } from "../content/scrum"
import { Reveal } from "./Reveal"

export function MercantecPractice() {
  return (
    <section id="mercantec" className="section section--tint">
      <Reveal>
        <p className="section__eyebrow">På MAGS</p>
        <h2 className="section__title">Sådan kører vi det</h2>
        <p className="section__lede">
          Vi tilpasser SCRUM til elevteams — ikke til en virksomheds
          budgetcyklus. Strukturen er den samme; formålet er læring.
        </p>
      </Reveal>
      <div className="practice">
        {mercantecPractice.map((item, i) => (
          <Reveal key={item.title} delay={i * 70}>
            <article className="practice__item">
              <span className="practice__index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
