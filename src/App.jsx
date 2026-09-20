import { useState } from 'react'
import './App.css'

const skills = {
  Languages: ['JavaScript', 'Python', 'Java', 'PHP', 'C++', 'SQL', 'Dart'],
  'Frameworks & Tools': ['React', 'Flutter', 'Node.js', 'AWS', 'Git', 'Bash', 'XAMPP/MySQL'],
  'Core Concepts': ['OOP & UML Design', 'Automata Theory', 'Networking Fundamentals', 'Cloud Architecture'],
}

const projects = [
  {
    title: 'Smart Library Management System',
    tag: 'Cloud Computing Capstone',
    description:
      'An AWS-hosted library platform with full CRUD, authentication, borrowing workflow with overdue detection, an analytics dashboard, and email notifications routed through AWS SES.',
    stack: ['PHP', 'MySQL', 'AWS EC2/RDS/S3', 'CloudWatch'],
    link: '#',
  },
  {
    title: 'Hospital Patient Management System',
    tag: 'Group Coursework Project',
    description:
      'A Java-based patient management system built with a team. Led the system design work, producing the UML class diagram that shaped the object model for the rest of the group.',
    stack: ['Java', 'OOAD', 'UML'],
    link: '#',
  },
]

const miniProjects = [
  { title: 'CampusCafé', description: 'Flutter mobile app for campus food ordering.', stack: ['Flutter', 'Dart'] },
  { title: 'Student Records App', description: 'Flutter app with local storage via sqflite.', stack: ['Flutter', 'SQLite'] },
  { title: 'Java Grade Calculator', description: 'Console app computing grades across multiple criteria.', stack: ['Java'] },
  { title: 'Directory Report Generator', description: 'Python script that scans directories and generates reports under strict style constraints.', stack: ['Python'] },
  { title: 'Project Manager Script', description: 'Bash script for managing project folder structure and workflow.', stack: ['Bash'] },
  { title: 'Easter Date Calculator', description: 'Python implementation of the Gauss algorithm to compute the date of Easter for any given year.', stack: ['Python'] },
  { title: 'Rock-Paper-Scissors', description: 'Python CLI game matching exact sample-output formatting.', stack: ['Python'] },
]

const socials = [
  { name: 'LinkedIn', url: '#' },
  { name: 'GitHub', url: '#' },
  { name: 'Instagram', url: '#' },
]

function App() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      <header className="nav">
        <div className="badge-row">
          <span className="badge"><span className="dot"></span> Open to opportunities</span>
          <span className="badge badge-muted">📍 Ghana</span>
          <span className="badge badge-muted">🎓 Level 200</span>
        </div>
        <button
          className="nav-toggle"
          onClick={() => setNavOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
        <nav className={navOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#about" onClick={() => setNavOpen(false)}>About</a>
          <a href="#skills" onClick={() => setNavOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setNavOpen(false)}>Projects</a>
          <a href="#mini-projects" onClick={() => setNavOpen(false)}>Mini Projects</a>
        </nav>
        <a href="#footer" className="badge cta-badge">Let's connect ↗</a>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="hero-flex">
            {/* Swap this div for: <img src={photo} alt="Lemy" className="hero-photo" /> */}
            <div className="hero-photo placeholder">LB</div>
            <div className="hero-copy">
              <h1>Lemuel Bulla</h1>
              <p className="hero-role">Software Developer , CS Student & Innovator</p>
              <p className="hero-blurb">
                Currently sharpening my craft through coursework at GCTU and
                hands-on training with ERA Technologies — I like building things
                that actually work, then figuring out how to make them better.
              </p>
              <div className="quick-links">
                <a href="#about" className="quick-pill pill-a">About</a>
                <a href="#skills" className="quick-pill pill-b">Skills</a>
                <a href="#projects" className="quick-pill pill-c">Projects</a>
                <a href="#mini-projects" className="quick-pill pill-d">Mini Projects</a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <p className="section-label">01 — About</p>
          <h2>About me</h2>
          <p className="about-lead">
            I turn complex ideas into clean, working software — and I'm just getting started.
          </p>
          <p>
            I'm a Level 200 Computer Science student at Ghana Communication Technology
            University, building on a strong foundation in object-oriented design and
            notable skills in problem-solving and systems thinking, alongside hands-on
            training in the ERA Technologies Developer Program. I actively bridge the
            gap between CS theory and practical execution — most recently through the
            Smart Library Management System, an AWS-hosted platform handling everything
            from authentication to overdue book tracking.
          </p>
          <p>
            My toolkit spans Python, C++, Java, PHP, JavaScript, SQL, Dart, and Node.js.
            Beyond traditional software development, I'm a continuous learner driven by
            analytical curiosity — currently expanding into systems-level engineering.
          </p>
        </section>

        <section id="skills" className="skills">
          <p className="section-label">02 — Skills</p>
          <h2>What I work with</h2>
          <div className="skill-columns">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-column">
                <h3>{category}</h3>
                <div className="skill-grid">
                  {items.map((skill) => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="projects">
          <p className="section-label">03 — Projects</p>
          <h2>Selected work</h2>
          <div className="project-grid">
            {projects.map((p) => (
              <a key={p.title} href={p.link} className="project-card">
                <span className="project-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span key={s} className="stack-pill">{s}</span>
                  ))}
                </div>
                <span className="project-link">View project ↗</span>
              </a>
            ))}
          </div>
        </section>

        <section id="mini-projects" className="mini-projects">
          <p className="section-label">04 — Mini Projects</p>
          <h2>Smaller builds</h2>
          <div className="mini-grid">
            {miniProjects.map((p) => (
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
      </main>

      <footer className="footer" id="footer">
        <div className="footer-socials">
          {socials.map((s) => (
            <a key={s.name} href={s.url} className="social-pill">
              {s.name} <span className="arrow">↗</span>
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Lemuel Bulla. Built with React &amp; Vite.</p>
      </footer>
    </>
  )
}

export default App