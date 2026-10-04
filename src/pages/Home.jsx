import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import MiniProjects from '../components/MiniProjects'

function Home() {
  return (
    <main>
      <section id="hero" className="hero">
        <div className="hero-flex">
          <div className="hero-photo placeholder">LB</div>

          <div className="hero-copy">
            <h1>Lemuel Bulla</h1>

            <p className="hero-role">
              Software Developer, CS Student &amp; Innovator
            </p>

            <p className="hero-blurb">
              Hello there! My name is Lemuel Bulla, a CS student, tech enthusiast
              as well as a junior software developer, and welcome to my portfolio website.
            </p>

            <div className="quick-links">
              <a href="#about" className="quick-pill pill-primary">
                About Me
              </a>

              <a href="#projects" className="quick-pill pill-tertiary">
                Projects
              </a>

              <a href="#skills" className="quick-pill pill-secondary">
                Skills
              </a>

              <a href="#mini-projects" className="quick-pill pill-secondary">
                Mini Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <MiniProjects />
    </main>
  )
}

export default Home