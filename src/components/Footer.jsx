const socials = [
  { name: 'LinkedIn', url: '#' },
  { name: 'GitHub', url: '#' },
  { name: 'Instagram', url: '#' },
]

function Footer() {
  return (
    // id="footer" is what the "Let's connect ↗" button in the header
    // scrolls down to — it's an anchor target, using href="#footer".
    <footer className="footer" id="footer">
      <div className="footer-socials">
        {socials.map((s) => (
          <a key={s.name} href={s.url} className="social-pill">
            {s.name} <span className="arrow">↗</span>
          </a>
        ))}
      </div>
      <p>
        {/* {} lets you drop real JavaScript into the middle of HTML-like JSX.
            new Date().getFullYear() asks the browser's clock what year it is
            RIGHT NOW, so this copyright year updates itself automatically
            every January 1st — you'll never need to manually change "2026"
            to "2027" by hand. */}
        &copy; {new Date().getFullYear()} Lemuel Bulla. Built with React &amp; Vite.
      </p>
    </footer>
  )
}

export default Footer

