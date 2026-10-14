import { gitWorkflow, githubTools, goodIssue } from "../content/scrum"
import { Reveal } from "./Reveal"

export function GitHubTools() {
  return (
    <section id="github" className="section">
      <Reveal>
        <p className="section__eyebrow">Værktøjer</p>
        <h2 className="section__title">GitHub i praksis</h2>
        <p className="section__lede">
          Issues, Projects, Releases og pull requests er vores SCRUM-værktøjskasse
          — fra første hovedforløb. Nedenfor ser du en god issue og Git-flowet
          issue → branch → PR.
        </p>
      </Reveal>

      <div className="tools">
        {githubTools.map((tool, i) => (
          <Reveal key={tool.name} delay={i * 60}>
            <article className="tool">
              <h3>{tool.name}</h3>
              <p>{tool.body}</p>
              {tool.link ? (
                <a
                  className="tool__link"
                  href={tool.link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {tool.link.label}
                </a>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>

      <div id="god-issue" className="stack">
        <Reveal>
          <p className="section__eyebrow">Skriv klart</p>
          <h3 className="stack__heading">{goodIssue.title}</h3>
          <p className="section__lede section__lede--tight">{goodIssue.subtitle}</p>
        </Reveal>

        <Reveal>
          <article className="issue-card" aria-label="Eksempel på GitHub issue">
            <header className="issue-card__head">
              <span className="issue-card__num">{goodIssue.number}</span>
              <h4>{goodIssue.heading}</h4>
            </header>

            <div className="issue-card__tags">
              {goodIssue.tags.map((tag) => (
                <span key={tag.label} style={{ ["--tag" as string]: tag.color }}>
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="issue-card__meta">
              {goodIssue.meta.map((m) => (
                <div key={m.label}>
                  <span>{m.label}</span>
                  <strong>{m.value}</strong>
                </div>
              ))}
            </div>

            <div className="issue-card__body">
              <h5>Beskrivelse</h5>
              {goodIssue.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="issue-card__ac">
              <h5>Acceptkriterier</h5>
              <ul>
                {goodIssue.acceptance.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>

        <div className="issue-tips">
          {goodIssue.tips.map((tip, i) => (
            <Reveal key={tip} delay={i * 40}>
              <p>{tip}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div id="git-flow" className="stack">
        <Reveal>
          <p className="section__eyebrow">Git</p>
          <h3 className="stack__heading">{gitWorkflow.title}</h3>
          <p className="section__lede section__lede--tight">{gitWorkflow.intro}</p>
        </Reveal>

        <div className="git-steps">
          {gitWorkflow.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 45}>
              <article
                className="git-step"
                style={{ ["--g" as string]: step.color }}
              >
                <span className="git-step__n">{String(i + 1).padStart(2, "0")}</span>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
                <pre>
                  <code>{step.cmd}</code>
                </pre>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="git-extras">
          <Reveal>
            <article className="git-naming">
              <h4>Branch-navne</h4>
              <ul>
                {gitWorkflow.naming.map((n) => (
                  <li key={n.pattern}>
                    <code>{n.pattern}</code>
                    <span>{n.meaning}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={60}>
            <article className="git-pr">
              <h4>PR-tjekliste</h4>
              <ul>
                {gitWorkflow.prChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <article className="git-anti">
            <h4>Undgå</h4>
            <ul>
              {gitWorkflow.antiPatterns.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
