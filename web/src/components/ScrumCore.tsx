import {
  artifacts,
  ceremonies,
  values,
} from "../content/scrum"
import { Reveal } from "./Reveal"

export function ScrumCore() {
  return (
    <section id="scrum" className="section">
      <Reveal>
        <p className="section__eyebrow">Centrale dele</p>
        <h2 className="section__title">SCRUM i korte træk</h2>
        <p className="section__lede">
          SCRUM opdeler arbejdet i håndterbare opgaver og korte iterationer —
          sprints. Hos os er et sprint typisk én uge.
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

      <div className="stack">
        <Reveal>
          <h3 className="stack__heading">Ceremonier</h3>
        </Reveal>
        <div className="flow-grid">
          {ceremonies.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <article className="flow-item">
                <span className="flow-item__when">{item.when}</span>
                <h4>{item.name}</h4>
                <p>{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="stack">
        <Reveal>
          <h3 className="stack__heading">Artefakter</h3>
        </Reveal>
        <div className="flow-grid flow-grid--3">
          {artifacts.map((item, i) => (
            <Reveal key={item.name} delay={i * 60}>
              <article className="flow-item">
                <h4>{item.name}</h4>
                <p>{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="stack">
        <Reveal>
          <h3 className="stack__heading">De fem værdier</h3>
        </Reveal>
        <div className="values">
          {values.map((item, i) => (
            <Reveal key={item.name} delay={i * 50}>
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
