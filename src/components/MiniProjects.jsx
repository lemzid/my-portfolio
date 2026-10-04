// Same pattern as Projects.jsx, just a different (longer) list,
// and the cards render as plain <div>s instead of clickable <a> links
// since these smaller builds don't have individual project pages/links.
const miniProjects = [
  { title: 'CampusCafé', description: 'Flutter mobile app for campus food ordering.', stack: ['Flutter', 'Dart'] },
  { title: 'Student Records App', description: 'Flutter app with local storage via sqflite.', stack: ['Flutter', 'SQLite'] },
  { title: 'Java Grade Calculator', description: 'Console app computing grades across multiple criteria.', stack: ['Java'] },
  { title: 'Directory Report Generator', description: 'Python script that scans directories and generates reports under strict style constraints.', stack: ['Python'] },
  { title: 'Project Manager Script', description: 'Bash script for managing project folder structure and workflow.', stack: ['Bash'] },
  { title: 'Easter Date Calculator', description: 'Python implementation of the Gauss algorithm to compute the date of Easter for any given year.', stack: ['Python'] },
  { title: 'Rock-Paper-Scissors', description: 'Python CLI game matching exact sample-output formatting.', stack: ['Python'] },
]

function MiniProjects() {
  return (
    <section id="mini-projects" className="mini-projects">
      <p className="section-label">04 — Mini Projects</p>
      <h2>Smaller builds</h2>
      <div className="mini-grid">
        {miniProjects.map((p) => (
          // Notice this is a plain <div>, not <a href=...> like Projects.jsx —
          // that's a deliberate, small design choice: these aren't clickable
          // because there's no separate page/link to send someone to.
          <div key={p.title} className="mini-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project-stack">
              {p.stack.map((s) => (
                <span key={s} className="stack-pill">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MiniProjects
