import './App.css'

const skills = [
  'Cybersecurity',
  'Networking',
  'IT Support',
  'React & Web Development',
]

const experience = [
  {
    title: 'Freelance Web Developer',
    period: '2022 – Present',
    details:
      'Built responsive web applications, integrated APIs, and delivered secure client solutions with strong UI detail.',
  },
  {
    title: 'IT Intern – East Africa School of Aviation',
    period: 'May 2025 – August 2025',
    details:
      'Supported network infrastructure, performed troubleshooting, documented systems, and assisted with security monitoring.',
  },
]

const projects = [
  {
    name: 'Portfolio Showcase',
    description: 'A polished, responsive brand website experience designed for modern personal branding.',
  },
  {
    name: 'Security Toolkit',
    description: 'A clean dashboard concept focused on monitoring, compliance, and threat visibility.',
  },
  {
    name: 'Support Tracker',
    description: 'A lightweight help desk workflow concept for incident logging and troubleshooting.',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">IT Graduand • Cybersecurity • Web Development</p>
          <h1>Faith Musyoka</h1>
          <p className="intro">
            I build secure, modern digital experiences with a blend of technical skill,
            creativity, and calm problem-solving.
          </p>
          <a className="cta" href="#contact">
            Let’s Connect
          </a>
        </div>
        <div className="hero-card">
          <div className="profile-badge">Creative • Analytical • Reliable</div>
          <p>
            I’m passionate about turning real-world IT knowledge into polished web apps,
            reliable systems, and smart digital solutions.
          </p>
        </div>
      </header>

      <main>
        <section className="section-block">
          <h2>About Me</h2>
          <p>
            I’m an Information Technology graduand with experience in cybersecurity,
            networking, IT support, and full-stack web development. My work is shaped by
            curiosity, precision, and practical problem-solving.
          </p>
        </section>

        <section className="section-block">
          <h2>Skills</h2>
          <div className="chip-grid">
            {skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section-block">
          <h2>Projects</h2>
          <div className="card-grid">
            {projects.map((project) => (
              <article key={project.name} className="info-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <h2>Experience</h2>
          <div className="timeline-list">
            {experience.map((item) => (
              <article key={item.title} className="timeline-card">
                <h3>{item.title}</h3>
                <span>{item.period}</span>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-block contact-block">
          <h2>Contact</h2>
          <p>Email: musyokafaith41@gmail.com</p>
          <p>Location: Nairobi, Kenya</p>
        </section>
      </main>
    </div>
  )
}

export default App
