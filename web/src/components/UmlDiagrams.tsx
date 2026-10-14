type Props = {
  type: number
}

export function UmlDiagrams({ type }: Props) {
  if (type === 1) return <ActivityDiagram />
  if (type === 2) return <ClassDiagram />
  return <UseCaseDiagram />
}

function UseCaseDiagram() {
  return (
    <figure className="uml-fig" aria-label="Use case-diagram: Elev og Studie-app">
      <div className="uml-uc">
        <div className="uml-uc__actor">
          <svg
            className="uml-stick"
            viewBox="0 0 40 90"
            width="40"
            height="90"
            aria-hidden="true"
          >
            <circle cx="20" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="20" y1="22" x2="20" y2="52" stroke="currentColor" strokeWidth="2" />
            <line x1="20" y1="32" x2="6" y2="48" stroke="currentColor" strokeWidth="2" />
            <line x1="20" y1="32" x2="34" y2="48" stroke="currentColor" strokeWidth="2" />
            <line x1="20" y1="52" x2="8" y2="78" stroke="currentColor" strokeWidth="2" />
            <line x1="20" y1="52" x2="32" y2="78" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span>Elev</span>
        </div>

        <div className="uml-uc__links" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="uml-uc__system">
          <span className="uml-uc__system-name">Studie-app</span>
          <ul className="uml-uc__cases">
            <li>Login</li>
            <li>Opret opgave</li>
            <li>Se liste</li>
          </ul>
        </div>
      </div>
      <figcaption>
        Aktør uden for systemet · use cases som ovaler inde i systemgrænsen
      </figcaption>
    </figure>
  )
}

function ActivityDiagram() {
  return (
    <figure className="uml-fig" aria-label="Aktivitetsdiagram for opret opgave">
      <div className="uml-act">
        <div className="uml-act__node uml-act__node--start" title="Start" />
        <span className="uml-act__edge" aria-hidden="true" />
        <div className="uml-act__action">Udfyld formular</div>
        <span className="uml-act__edge" aria-hidden="true" />
        <div className="uml-act__decision" title="Beslutning">
          <span>Tom?</span>
        </div>
        <div className="uml-act__fork">
          <div className="uml-act__branch">
            <span className="uml-act__guard">[ja]</span>
            <div className="uml-act__action uml-act__action--warn">Vis fejl</div>
          </div>
          <div className="uml-act__branch">
            <span className="uml-act__guard">[nej]</span>
            <div className="uml-act__action">Gem opgave</div>
          </div>
        </div>
        <span className="uml-act__edge uml-act__edge--merge" aria-hidden="true" />
        <div className="uml-act__node uml-act__node--end" title="Slut" />
      </div>
      <figcaption>
        Start/slut-noder · aktiviteter som afrundede bokse · diamant til beslutning
      </figcaption>
    </figure>
  )
}

function ClassDiagram() {
  return (
    <figure className="uml-fig" aria-label="Simpelt klassediagram User og Task">
      <div className="uml-cls">
        <div className="uml-cls__box">
          <div className="uml-cls__name">User</div>
          <ul className="uml-cls__attrs">
            <li>+ id: string</li>
            <li>+ name: string</li>
            <li>+ email: string</li>
          </ul>
          <ul className="uml-cls__ops">
            <li>+ login()</li>
          </ul>
        </div>

        <div className="uml-cls__assoc" aria-hidden="true">
          <span>1</span>
          <div className="uml-cls__line" />
          <span>*</span>
        </div>

        <div className="uml-cls__box">
          <div className="uml-cls__name">Task</div>
          <ul className="uml-cls__attrs">
            <li>+ title: string</li>
            <li>+ deadline: date</li>
            <li>+ done: bool</li>
          </ul>
          <ul className="uml-cls__ops">
            <li>+ markDone()</li>
          </ul>
        </div>
      </div>
      <figcaption>
        Klassebokse med navn, attributter og operationer · association 1—*
      </figcaption>
    </figure>
  )
}
