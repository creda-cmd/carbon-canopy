function CVPreview({ data, template }) {
  const templateClass = template === 'modern' ? 'template-modern' : template === 'graduate' ? 'template-graduate' : 'template-minimal'

  return (
    <div className={`cv-preview ${templateClass}`} id="cv-preview-document">
      <header className="cv-header">
        <div>
          <h2>{data.personal.fullName || 'Your Name'}</h2>
          <p className="cv-title">{data.personal.title || 'Professional Title'}</p>
        </div>
        <div className="cv-contact">
          <span>{data.personal.phone || '+254 700 000 000'}</span>
          <span>{data.personal.email || 'you@example.com'}</span>
          <span>{data.personal.location || 'Nairobi, Kenya'}</span>
          <span>{data.personal.linkedin || 'linkedin.com/in/yourname'}</span>
          <span>{data.personal.website || 'yourwebsite.com'}</span>
        </div>
      </header>

      <section>
        <h3>Professional Summary</h3>
        <p>{data.personal.summary || 'Add a short professional summary that highlights your experience, strengths, and career goals.'}</p>
      </section>

      <section>
        <h3>Experience</h3>
        {(data.experience || []).map((item, index) => (
          <div key={index} className="cv-entry">
            <div className="cv-entry-header">
              <strong>{item.jobTitle || 'Job Title'}</strong>
              <span>{item.startDate || 'Start'} – {item.currentlyWorking ? 'Present' : item.endDate || 'End'}</span>
            </div>
            <div className="cv-entry-subheader">
              <span>{item.company || 'Company Name'} • {item.location || 'Location'}</span>
            </div>
            <p>{item.description || 'Describe your responsibilities and achievements.'}</p>
          </div>
        ))}
      </section>

      <section>
        <h3>Education</h3>
        {(data.education || []).map((item, index) => (
          <div key={index} className="cv-entry">
            <div className="cv-entry-header">
              <strong>{item.institution || 'Institution Name'}</strong>
              <span>{item.startDate || 'Start'} – {item.endDate || 'End'}</span>
            </div>
            <div className="cv-entry-subheader">
              <span>{item.course || 'Qualification'} • {item.grade || 'Achievement'}</span>
            </div>
            <p>{item.description || 'Add details about your studies.'}</p>
          </div>
        ))}
      </section>

      <section>
        <h3>Skills</h3>
        <div className="chip-list preview-chips">
          {(data.skills?.items || []).map((skill) => <span key={skill} className="chip">{skill}</span>)}
        </div>
      </section>

      <section>
        <h3>Projects</h3>
        {(data.projects || []).map((item, index) => (
          <div key={index} className="cv-entry">
            <div className="cv-entry-header">
              <strong>{item.name || 'Project Name'}</strong>
            </div>
            <p>{item.description || 'Describe the project and your contribution.'}</p>
            <p><strong>Tech:</strong> {item.technologies || 'HTML, CSS, JavaScript'}</p>
          </div>
        ))}
      </section>

      <section>
        <h3>Certifications</h3>
        {(data.certifications || []).map((item, index) => (
          <div key={index} className="cv-entry">
            <div className="cv-entry-header">
              <strong>{item.name || 'Certification Name'}</strong>
              <span>{item.date || 'Date'}</span>
            </div>
            <p>{item.organization || 'Issuing organization'}</p>
          </div>
        ))}
      </section>

      <section>
        <h3>Languages</h3>
        <ul>
          {(data.languages || []).map((item, index) => <li key={index}>{item.language || 'Language'} — {item.proficiency || 'Proficiency'}</li>)}
        </ul>
      </section>

      <section>
        <h3>References</h3>
        {data.references.showRequest ? (
          <p>References available upon request.</p>
        ) : (
          (data.references.items || []).map((item, index) => (
            <div key={index} className="cv-entry">
              <strong>{item.name || 'Referee Name'}</strong>
              <p>{item.jobTitle || 'Job Title'} • {item.organization || 'Organization'}</p>
            </div>
          ))
        )}
      </section>
    </div>
  )
}

export default CVPreview
