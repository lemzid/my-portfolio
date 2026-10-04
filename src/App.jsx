
import Home from './pages/Home'
import Library from './pages/Library'
import Hospital from './pages/Hospital'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1)

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: 'smooth',
        })
      }, 0)
    }
  }, [location])

  return null
}

function App() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      <header className="nav">
        <div className="badge-row">
          <span className="badge">
            <span className="dot"></span> Open to opportunities
          </span>

          <span className="badge badge-muted">📍 Ghana</span>

          <span className="badge badge-muted">🎓 Level 300</span>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setNavOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={navOpen ? 'nav-links open' : 'nav-links'}>
          <Link to="/#about" onClick={() => setNavOpen(false)}>
            About
          </Link>

          <Link to="/#skills" onClick={() => setNavOpen(false)}>
  Skills
</Link>

          <Link to="/#projects" onClick={() => setNavOpen(false)}>
            Projects
          </Link>

          <Link to="/#mini-projects" onClick={() => setNavOpen(false)}>
            Mini Projects
          </Link>
        </nav>

        <a href="#footer" className="badge cta-badge">
          Let's connect ↗
        </a>
      </header>
<ScrollToHash />
     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/projects/library" element={<Library />} />
  <Route path="/projects/hospital" element={<Hospital />} />
</Routes>

      <Footer />
    </>
  )
}

export default App