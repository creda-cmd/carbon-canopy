const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Build CV', href: '#cv-builder' },
  { label: 'Cover Letter', href: '#cover-letter' },
  { label: 'Templates', href: '#templates' },
  { label: 'Tips', href: '#tips' },
]

function Navbar({ onNavigate }) {
  return (
    <header className="topbar">
      <a className="brand" href="#home" onClick={(event) => onNavigate(event, '#home')}>
        <span className="brand-mark">✦</span>
        CareerCraft
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={(event) => onNavigate(event, link.href)}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="btn btn-primary nav-cta" href="#cv-builder" onClick={(event) => onNavigate(event, '#cv-builder')}>
        Get Started
      </a>
    </header>
  )
}

export default Navbar
