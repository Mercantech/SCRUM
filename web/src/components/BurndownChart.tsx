import { useState } from "react"
import { burndownExample } from "../content/scrum"
import { Reveal } from "./Reveal"

const W = 560
const H = 260
const PAD = { t: 28, r: 24, b: 44, l: 44 }

function coords(values: number[]) {
  const max = Math.max(...burndownExample.ideal, ...burndownExample.actual)
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b
  return values.map((v, i) => {
    const x = PAD.l + (i / (values.length - 1)) * innerW
    const y = PAD.t + (1 - v / max) * innerH
    return { x, y, v }
  })
}

export function BurndownChart() {
  const [active, setActive] = useState(4)
  const idealPts = coords(burndownExample.ideal)
  const actualPts = coords(burndownExample.actual)
  const max = Math.max(...burndownExample.ideal, ...burndownExample.actual)
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b

  const idealLine = idealPts.map((p) => `${p.x},${p.y}`).join(" ")
  const actualLine = actualPts.map((p) => `${p.x},${p.y}`).join(" ")
  const area =
    `${PAD.l},${PAD.t + innerH} ` +
    actualPts.map((p) => `${p.x},${p.y}`).join(" ") +
    ` ${PAD.l + innerW},${PAD.t + innerH}`

  const dayIdeal = burndownExample.ideal[active]
  const dayActual = burndownExample.actual[active]
  const delta = dayActual - dayIdeal
  const annotation = burndownExample.annotations.find((a) => a.day === active)

  return (
    <Reveal>
      <div className="ex-burn">
        <header className="ex-burn__header">
          <div>
            <p className="ex-board__kicker">{burndownExample.subtitle}</p>
            <h3>{burndownExample.title}</h3>
          </div>
          <p className="ex-burn__note">{burndownExample.note}</p>
        </header>

        <div className="ex-burn__layout">
          <div className="ex-burn__chart">
            <div className="ex-burn__days" role="tablist" aria-label="Vælg dag">
              {burndownExample.days.map((d, i) => (
                <button
                  key={d}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  className={active === i ? "is-active" : ""}
                  onClick={() => setActive(i)}
                >
                  {d}
                </button>
              ))}
            </div>

            <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Burndown chart">
              <defs>
                <linearGradient id="burnFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2ec4b6" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#2ec4b6" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {[0, 0.25, 0.5, 0.75, 1].map((t) => {
                const y = PAD.t + (1 - t) * innerH
                return (
                  <line
                    key={t}
                    x1={PAD.l}
                    x2={W - PAD.r}
                    y1={y}
                    y2={y}
                    className="ex-burn__grid"
                  />
                )
              })}

              <polygon points={area} fill="url(#burnFill)" />
              <polyline points={idealLine} className="ex-burn__ideal" fill="none" />
              <polyline points={actualLine} className="ex-burn__actual" fill="none" />

              {actualPts.map((p, i) => (
                <g key={i} className={active === i ? "ex-burn__point is-active" : "ex-burn__point"}>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={active === i ? 7 : 5}
                    onClick={() => setActive(i)}
                    style={{ cursor: "pointer" }}
                  />
                </g>
              ))}

              <line
                x1={actualPts[active].x}
                x2={actualPts[active].x}
                y1={PAD.t}
                y2={PAD.t + innerH}
                className="ex-burn__cursor"
              />

              {burndownExample.days.map((d, i) => (
                <text
                  key={d}
                  x={idealPts[i].x}
                  y={H - 14}
                  textAnchor="middle"
                  className="ex-burn__label"
                >
                  {d}
                </text>
              ))}
              <text x={PAD.l - 10} y={PAD.t + 4} textAnchor="end" className="ex-burn__label">
                {max}
              </text>
              <text
                x={PAD.l - 10}
                y={PAD.t + innerH + 4}
                textAnchor="end"
                className="ex-burn__label"
              >
                0
              </text>
            </svg>

            <div className="ex-burn__legend">
              <span className="is-ideal">Ideal (jævn afbrænding)</span>
              <span className="is-actual">Faktisk resterende SP</span>
            </div>
          </div>

          <aside className="ex-burn__panel">
            <p className="ex-burn__day">{burndownExample.days[active]}</p>
            <div className="ex-burn__nums">
              <div>
                <span>Ideal</span>
                <strong>{dayIdeal} SP</strong>
              </div>
              <div>
                <span>Faktisk</span>
                <strong>{dayActual} SP</strong>
              </div>
              <div className={delta > 0 ? "is-behind" : "is-ahead"}>
                <span>Difference</span>
                <strong>
                  {delta > 0 ? "+" : ""}
                  {delta} SP
                </strong>
              </div>
            </div>
            {annotation ? <p className="ex-burn__anno">{annotation.text}</p> : null}
            <p className="ex-burn__hint">
              {delta > 0
                ? "I er bagud ift. ideal — find blockers eller skær scope."
                : delta < 0
                  ? "I er foran ideal — godt tempo, hold fokus på sprintmålet."
                  : "Præcis på ideal-linjen."}
            </p>
          </aside>
        </div>

        <div className="ex-learn ex-learn--burn">
          {burndownExample.readTips.map((tip) => (
            <article key={tip.title}>
              <h4>{tip.title}</h4>
              <p>{tip.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
