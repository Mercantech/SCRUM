import { dailyExample, dodExample } from "../content/scrum"
import { Reveal } from "./Reveal"

export function DailyExample() {
  return (
    <div className="ex-extra">
      <Reveal>
        <article className="ex-daily">
          <header>
            <div>
              <p className="ex-board__kicker">Ceremoni i praksis</p>
              <h3>{dailyExample.title}</h3>
            </div>
            <span className="ex-daily__time">{dailyExample.duration}</span>
          </header>
          <ul className="ex-daily__lines">
            {dailyExample.lines.map((line) => (
              <li key={line.who} style={{ ["--who" as string]: line.color }}>
                <div className="ex-daily__who">
                  <span aria-hidden="true">{line.who.slice(0, 1)}</span>
                  <div>
                    <strong>{line.who}</strong>
                    <small>{line.role}</small>
                  </div>
                </div>
                <p>{line.text}</p>
              </li>
            ))}
          </ul>
          <p className="ex-daily__take">{dailyExample.takeaway}</p>
        </article>
      </Reveal>

      <Reveal delay={80}>
        <article className="ex-dod">
          <p className="ex-board__kicker">Definition of Done</p>
          <h3>{dodExample.title}</h3>
          <ol>
            {dodExample.items.map((item, i) => (
              <li key={item}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ol>
        </article>
      </Reveal>
    </div>
  )
}
