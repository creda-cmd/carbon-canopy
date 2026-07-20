function Hero({ onNavigate }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Career-ready documents made simple</p>
        <h1>Build a CV That Opens Doors</h1>
        <p className="hero-text">
          Create a professional CV and cover letter in minutes with easy-to-use templates and live previews.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#cv-builder" onClick={(event) => onNavigate(event, '#cv-builder')}>
            Build My CV
          </a>
          <a className="btn btn-secondary" href="#cover-letter" onClick={(event) => onNavigate(event, '#cover-letter')}>
            Create Cover Letter
          </a>
        </div>
        <div className="feature-strip">
          <div className="feature-card">
            <strong>Easy to use</strong>
            <span>Clean steps for every stage of your career journey.</span>
          </div>
          <div className="feature-card">
            <strong>Professional templates</strong>
            <span>Choose polished layouts designed to impress recruiters.</span>
          </div>
          <div className="feature-card">
            <strong>Download as PDF</strong>
            <span>Export clean, job-ready documents in seconds.</span>
          </div>
        </div>
      </div>
      <div className="hero-preview-card" aria-label="Sample CV preview">
        <div className="preview-chip">Preview</div>
        <h3>Nadia Okafor</h3>
        <p>Operations Coordinator</p>
        <div className="preview-row">
          <span>nadia@email.com</span>
          <span>+254 700 123 456</span>
        </div>
        <div className="preview-body">
          <div>
            <strong>Summary</strong>
            <p>Organized, detail-focused professional with experience in client support and operations.</p>
          </div>
          <div>
            <strong>Experience</strong>
            <p>Coordinated schedules, supported teams, improved workflow efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
