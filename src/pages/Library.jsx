import { Link } from 'react-router-dom'

function Library() {
  return (
    <main>
      <section className="projects">
        <p className="section-label">Project</p>

        <h2>Smart Library Management System</h2>

        <p>
          An AWS-hosted library platform with full CRUD, authentication,
          borrowing workflow with overdue detection, an analytics dashboard,
          and email notifications routed through AWS SES.
        </p>

        <h3>What it does</h3>

        <p>
          The system allows library users and administrators to manage
          library resources and borrowing activities through a web-based
          platform.
        </p>

        <h3>What I used</h3>

        <div className="project-stack">
          <span className="stack-pill">PHP</span>
          <span className="stack-pill">MySQL</span>
          <span className="stack-pill">AWS EC2</span>
          <span className="stack-pill">AWS RDS</span>
          <span className="stack-pill">AWS S3</span>
          <span className="stack-pill">CloudWatch</span>
        </div>

        <h3>What was hard</h3>

       <h3>What was hard</h3>

<p>
  One of the biggest challenges was testing and debugging the system across
  different parts of the application. I fixed issues with overdue-status
  refreshes, notification-log JSON handling, outdated navigation, and database
  migrations. I also had to adapt the database design when pending borrow
  requests required nullable dates.
</p>

<p>
  Working with a team also became challenging when development slowed down,
  so I took responsibility for completing and testing the system. When
  another codebase was introduced, I reviewed it critically and adopted only
  improvements that strengthened the project, including session security,
  additional book fields, and the password-reset flow.
</p>

        <Link className="quick-pill pill-secondary" to="/">
          ← Back to home
        </Link>
      </section>
    </main>
  )
}

export default Library