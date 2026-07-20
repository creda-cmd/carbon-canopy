const tipCards = [
  'Keep your CV to one or two pages.',
  'Use strong action words such as Managed, Created, Improved, Assisted, and Coordinated.',
  'Tailor your CV to each job application.',
  'Include measurable achievements where possible.',
  'Use a professional email address.',
  'Check spelling and grammar before submitting.',
  'Keep the layout simple for Applicant Tracking Systems.',
  'Write a cover letter that is specific to the job and company.',
]

function Tips() {
  return (
    <section id="tips" className="tips-section">
      <div className="section-heading">
        <p className="eyebrow">Career advice</p>
        <h2>CV Tips That Make a Difference</h2>
      </div>
      <div className="tips-grid">
        {tipCards.map((tip) => (
          <div key={tip} className="tip-card">
            <h3>{tip.split('.')[0]}</h3>
            <p>{tip}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tips
