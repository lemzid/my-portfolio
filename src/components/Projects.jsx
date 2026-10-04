// Each object in this array represents one project card.
// Want to add a new project later? Just add one more object here —
// the JSX below (the actual layout code) never has to change.
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'Smart Library Management System',
    tag: 'Cloud Computing Capstone',
    description:
      'An AWS-hosted library platform with full CRUD, authentication, borrowing workflow with overdue detection, an analytics dashboard, and email notifications routed through AWS SES.',
    stack: ['PHP', 'MySQL', 'AWS EC2/RDS/S3', 'CloudWatch'],
   path: '/projects/library',
  },
  {
    title: 'Hospital Patient Management System',
    tag: 'Group Coursework Project',
    description:
      'A Java-based patient management system built with a team. Led the system design work, producing the UML class diagram that shaped the object model for the rest of the group.',
    stack: ['Java', 'OOAD', 'UML'],
  path: '/projects/hospital',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <p className="section-label">03 — Projects</p>
      <h2>Selected work</h2>
      <div className="project-grid">
        {/* .map() runs the code inside it ONCE per object in the array.
            "p" is just a name we chose for "the current project in this loop" —
            it could be called anything, but "p" for "project" keeps it readable. */}
        {projects.map((p) => (
          <Link key={p.title} to={p.path} className="project-card">
            <span className="project-tag">{p.tag}</span>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project-stack">
              {/* a SECOND, smaller .map() here — this one loops over
                  p.stack (an array INSIDE the current project object)
                  to turn each tech name into its own little pill */}
              {p.stack.map((s) => (
                <span key={s} className="stack-pill">{s}</span>
              ))}
            </div>
            <span className="project-link">View project ↗</span>
          </Link>
        ))}
      </div>
    </section>
  )
}






export default Projects
