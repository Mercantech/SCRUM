import { artifacts, ceremonies, roles, values } from "../content/scrum"
import { BurndownChart } from "./BurndownChart"
import { Reveal } from "./Reveal"
import { ScrumBoard } from "./ScrumBoard"

export function ScrumDeep() {
  return (
    <section id="scrum-dybde" className="section">
      <Reveal>
        <p className="section__eyebrow">6278 · Scrum</p>
        <h2 className="section__title">Scrum i dybden</h2>
        <p className="section__lede">
          Ifølge{" "}
          <a
            href="https://scrumguides.org/scrum-guide.html"
            target="_blank"
            rel="noreferrer"
          >
            Scrum Guide
          </a>{" "}
          er Scrum et framework med accountabilities (roller), events og
          artefacts. Faget 6278 fremhæver tre ceremonier og tre værktøjer —
          vi dækker dem visuelt her, plus retrospektivet fra guiden.
        </p>
      </Reveal>

      <Reveal className="week">
        <div className="week__track" aria-hidden="true" />
        <ol className="week__days">
          <li>
            <span>Man</span>
            <strong>Planning</strong>
          </li>
          <li>
            <span>Tir–tor</span>
            <strong>Daily</strong>
          </li>
          <li>
            <span>Fre</span>
            <strong>Review · Retro · Release</strong>
          </li>
        </ol>
      </Reveal>

      <div id="roller" className="stack">
        <Reveal>
          <h3 className="stack__heading">Tre roller (+ Kundechef på H4)</h3>
        </Reveal>
        <div className="roles__grid">
          {roles.map((role, i) => (
            <Reveal key={role.name} delay={i * 50}>
              <article className="role role--rich">
                <span className="role__short">{role.short}</span>
                <h4>{role.name}</h4>
                <p>{role.body}</p>
                <ul className="role__does">
                  {role.does.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="stack">
        <Reveal>
          <h3 className="stack__heading">Ceremonier</h3>
        </Reveal>
        <div className="flow-grid">
          {ceremonies.map((item, i) => (
            <Reveal key={item.name} delay={i * 50}>
              <article className="flow-item flow-item--example">
                <span className="flow-item__when">{item.when}</span>
                <h4>{item.name}</h4>
                <p className="flow-item__aka">{item.aka}</p>
                <p>{item.body}</p>
                <p className="example-line">
                  <span>Eksempel</span> {item.example}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div id="vaerktoejer" className="stack">
        <Reveal>
          <h3 className="stack__heading">Værktøjer / artefakter</h3>
        </Reveal>
        <div className="flow-grid flow-grid--2">
          {artifacts.map((item, i) => (
            <Reveal key={item.name} delay={i * 50}>
              <article className="flow-item">
                <h4>{item.name}</h4>
                <p>{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div id="eksempel" className="stack">
        <Reveal>
          <h3 className="stack__heading">Visuelle eksempler</h3>
          <p className="section__lede section__lede--tight">
            Sådan kan et sprint se ud på boardet — og hvordan en burndown
            fortæller, om I er på sporet.
          </p>
        </Reveal>
        <ScrumBoard />
        <BurndownChart />
      </div>

      <div className="stack">
        <Reveal>
          <h3 className="stack__heading">De fem Scrum-værdier</h3>
        </Reveal>
        <div className="values">
          {values.map((item, i) => (
            <Reveal key={item.name} delay={i * 40}>
              <div className="values__item">
                <strong>
                  {item.name}
                  <span> · {item.da}</span>
                </strong>
                <p>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
