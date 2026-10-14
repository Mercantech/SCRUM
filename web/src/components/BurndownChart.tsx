import { burndownExample } from "../content/scrum"
import { Reveal } from "./Reveal"

const W = 420
const H = 200
const PAD = { t: 20, r: 16, b: 36, l: 36 }

function points(values: number[]) {
  const max = Math.max(...burndownExample.ideal, ...burndownExample.actual)
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b
  return values
    .map((v, i) => {
      const x = PAD.l + (i / (values.length - 1)) * innerW
      const y = PAD.t + (1 - v / max) * innerH
      return `${x},${y}`
    })
    .join(" ")
}

export function BurndownChart() {
  const ideal = points(burndownExample.ideal)
  const actual = points(burndownExample.actual)
  const max = Math.max(...burndownExample.ideal, ...burndownExample.actual)
  const innerW = W - PAD.l - PAD.r
  const innerH = H - PAD.t - PAD.b

  return (
    <Reveal>
      <figure className="burndown">
        <figcaption>
          <h3>{burndownExample.title}</h3>
          <p>{burndownExample.note}</p>
        </figcaption>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Burndown chart">
          {[0, 0.5, 1].map((t) => {
            const y = PAD.t + (1 - t) * innerH
            return (
              <line
                key={t}
                x1={PAD.l}
                x2={W - PAD.r}
                y1={y}
                y2={y}
                className="burndown__grid"
              />
            )
          })}
          <polyline points={ideal} className="burndown__ideal" fill="none" />
          <polyline points={actual} className="burndown__actual" fill="none" />
          {burndownExample.actual.map((v, i) => {
            const x = PAD.l + (i / (burndownExample.actual.length - 1)) * innerW
            const y = PAD.t + (1 - v / max) * innerH
            return <circle key={i} cx={x} cy={y} r="4" className="burndown__dot" />
          })}
          {burndownExample.days.map((d, i) => {
            const x = PAD.l + (i / (burndownExample.days.length - 1)) * innerW
            return (
              <text key={d} x={x} y={H - 10} textAnchor="middle" className="burndown__label">
                {d}
              </text>
            )
          })}
          <text x={PAD.l - 8} y={PAD.t + 4} textAnchor="end" className="burndown__label">
            {max}
          </text>
          <text x={PAD.l - 8} y={PAD.t + innerH} textAnchor="end" className="burndown__label">
            0
          </text>
        </svg>
        <div className="burndown__legend">
          <span className="burndown__legend-ideal">Ideal</span>
          <span className="burndown__legend-actual">Faktisk</span>
        </div>
      </figure>
    </Reveal>
  )
}
