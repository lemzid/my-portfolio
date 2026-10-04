import { Link } from 'react-router-dom'


function Hospital() {
  return (
    <main>
      <section className="projects">
        <p className="section-label">Project</p>

        <h2>Hospital Patient Management System</h2>

        <p>
          A Java-based patient management system built as a group coursework
          project. The system focused on applying object-oriented analysis and
          design principles to organize the different parts of the application.
        </p>

        <h3>My role</h3>

        <p>
          I contributed to the system design and produced the UML class diagram,
          which helped define the structure and relationships between the
          different objects in the system.
        </p>

        <h3>What I used</h3>

        <div className="project-stack">
          <span className="stack-pill">Java</span>
          <span className="stack-pill">OOAD</span>
          <span className="stack-pill">UML</span>
        </div>

        <h3>What was challenging</h3>

        <p>
          One of the main challenges was translating the requirements of the
          system into a clear object-oriented design. Creating the UML class
          diagram required thinking about the different classes, their
          responsibilities, and how they would relate to one another.
        </p>

        <Link className="quick-pill pill-secondary" to="/">
          ← Back to home
        </Link>
      </section>
  
    </main>
  )
}

export default Hospital