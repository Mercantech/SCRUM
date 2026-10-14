import { githubTools } from "../content/scrum"
import { Reveal } from "./Reveal"

export function GitHubTools() {
  return (
    <section id="github" className="section">
      <Reveal>
        <p className="section__eyebrow">Værktøjer</p>
        <h2 className="section__title">GitHub i praksis</h2>
        <p className="section__lede">
          Issues, Projects, Releases og pull requests er vores SCRUM-værktøjskasse
          — fra første hovedforløb.
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
    </section>
  )
}
