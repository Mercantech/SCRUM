import { useState } from "react"
import { values } from "../content/scrum"
import { Reveal } from "./Reveal"

export function ScrumValues() {
  const [active, setActive] = useState(0)
  const current = values[active]

  return (
    <div className="val-lab">
      <Reveal>
        <div className="val-lab__intro">
          <p className="section__eyebrow">Scrum Guide</p>
          <h3 className="stack__heading">De fem Scrum-værdier</h3>
          <p className="section__lede section__lede--tight">
            Værdierne er ikke plakater på væggen — de er adfærd I kan øve hver
            dag. Klik en værdi, og se hvad den betyder i praksis hos MAGS.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="val-ring" role="tablist" aria-label="Scrum-værdier">
          {values.map((v, i) => (
            <button
              key={v.name}
              type="button"
              role="tab"
              aria-selected={active === i}
              className={`val-pill${active === i ? " is-active" : ""}`}
              style={{ ["--val" as string]: v.color }}
              onClick={() => setActive(i)}
            >
              <span className="val-pill__letter" aria-hidden="true">
                {v.letter}
              </span>
              <span className="val-pill__name">
                {v.name}
                <small>{v.da}</small>
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal key={current.name}>
        <article
          className="val-spotlight"
          style={{ ["--val" as string]: current.color }}
        >
          <div className="val-spotlight__mark" aria-hidden="true">
            {current.letter}
          </div>
          <div className="val-spotlight__body">
            <h4>
              {current.name}
              <span> · {current.da}</span>
            </h4>
            <p className="val-spotlight__text">{current.body}</p>
            <p className="val-spotlight__practice">
              <span>Øv det</span>
              {current.practice}
            </p>
          </div>
        </article>
      </Reveal>

      <div className="val-grid">
        {values.map((v, i) => (
          <Reveal key={v.name} delay={i * 45}>
            <button
              type="button"
              className={`val-card${active === i ? " is-active" : ""}`}
              style={{ ["--val" as string]: v.color }}
              onClick={() => setActive(i)}
            >
              <span className="val-card__letter" aria-hidden="true">
                {v.letter}
              </span>
              <strong>
                {v.name}
                <span>{v.da}</span>
              </strong>
              <p>{v.body}</p>
            </button>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
