import { boardExample } from "../content/scrum"
import { Reveal } from "./Reveal"

export function ScrumBoard() {
  return (
    <Reveal>
      <div className="board" aria-label="Eksempel på Scrum-board">
        <div className="board__head">
          <h3>{boardExample.title}</h3>
          <p>
            Sprintmål: <strong>{boardExample.sprintGoal}</strong>
          </p>
        </div>
        <div className="board__cols">
          {boardExample.columns.map((col) => (
            <div key={col.name} className="board__col">
              <h4>{col.name}</h4>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
