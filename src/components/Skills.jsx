// This array lives up here, OUTSIDE the function, because it's just data —
// it doesn't need to be recreated every time the component renders.
// If it were inside the function, React would rebuild this whole object
// on every re-render for no reason.
const skills = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'PHP', 'C', 'C++', 'SQL', 'Dart', 'HTML/CSS'],
  'Frameworks & Tools': ['React', 'Flutter', 'Node.js', 'AWS', 'Git', 'Bash', 'XAMPP/MySQL'],
  'Core Concepts': ['OOP & UML Design', 'Fundamental Software Engineering', 'Networking Fundamentals', 'Cloud Architecture'],
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <p className="section-label">02 — Skills</p>
      <h2>What I work with</h2>
      <div className="skill-columns">
        {/* Object.entries(skills) converts an object like
              { Languages: [...], Tools: [...] }
            into an array of pairs:
              [ ["Languages", [...]], ["Tools", [...]] ]
            That's necessary because .map() only works on arrays,
            not on objects directly. */}
        {Object.entries(skills).map(([category, items]) => (
          // category = the string key, e.g. "Languages"
          // items = the array of skill names for that category
          // key={category} is required by React whenever you .map() —
          // it needs a unique ID per item to track them efficiently.
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
  )
}

export default Skills

// "export default" is what lets App.jsx do
// import Skills from './components/Skills'
// without needing curly braces around the name.