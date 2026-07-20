import { useState } from 'react'

function SectionTitle({ title }) {
  return <h3 className="section-title">{title}</h3>
}

function CVForm({ data, onChange, onAdd, onRemove, onToggleReference }) {
  const [skillInput, setSkillInput] = useState('')

  const updateField = (section, key, value) => {
    onChange(section, key, value)
  }

  const addSkill = () => {
    if (!skillInput.trim()) return
    onChange('skills', 'items', [...(data.skills?.items || []), skillInput.trim()])
    setSkillInput('')
  }

  const removeSkill = (skill) => {
    onChange('skills', 'items', (data.skills?.items || []).filter((item) => item !== skill))
  }

  return (
    <div className="builder-form">
      <div className="form-section">
        <SectionTitle title="Personal Information" />
        <div className="field-grid">
          <label>Full Name<input value={data.personal.fullName} onChange={(event) => updateField('personal', 'fullName', event.target.value)} /></label>
          <label>Professional Title<input value={data.personal.title} onChange={(event) => updateField('personal', 'title', event.target.value)} /></label>
          <label>Phone Number<input value={data.personal.phone} onChange={(event) => updateField('personal', 'phone', event.target.value)} /></label>
          <label>Email Address<input value={data.personal.email} onChange={(event) => updateField('personal', 'email', event.target.value)} /></label>
          <label>Location<input value={data.personal.location} onChange={(event) => updateField('personal', 'location', event.target.value)} /></label>
          <label>LinkedIn URL<input value={data.personal.linkedin} onChange={(event) => updateField('personal', 'linkedin', event.target.value)} /></label>
          <label>Portfolio / Website<input value={data.personal.website} onChange={(event) => updateField('personal', 'website', event.target.value)} /></label>
        </div>
        <label>Professional Summary<textarea value={data.personal.summary} onChange={(event) => updateField('personal', 'summary', event.target.value)} rows="4" /></label>
      </div>

      <div className="form-section">
        <SectionTitle title="Education" />
        {(data.education || []).map((item, index) => (
          <div key={index} className="entry-card">
            <div className="entry-actions"><strong>Entry {index + 1}</strong><button type="button" className="text-btn" onClick={() => onRemove('education', index)}>Delete</button></div>
            <label>Institution Name<input value={item.institution} onChange={(event) => onChange('education', index, { ...item, institution: event.target.value })} /></label>
            <label>Course / Qualification<input value={item.course} onChange={(event) => onChange('education', index, { ...item, course: event.target.value })} /></label>
            <div className="field-grid">
              <label>Start Date<input value={item.startDate} onChange={(event) => onChange('education', index, { ...item, startDate: event.target.value })} /></label>
              <label>End Date<input value={item.endDate} onChange={(event) => onChange('education', index, { ...item, endDate: event.target.value })} /></label>
            </div>
            <label>Grade / Achievement<input value={item.grade} onChange={(event) => onChange('education', index, { ...item, grade: event.target.value })} /></label>
            <label>Description<textarea value={item.description} onChange={(event) => onChange('education', index, { ...item, description: event.target.value })} rows="3" /></label>
          </div>
        ))}
        <button type="button" className="btn btn-secondary full" onClick={() => onAdd('education')}>Add Education</button>
      </div>

      <div className="form-section">
        <SectionTitle title="Work Experience" />
        {(data.experience || []).map((item, index) => (
          <div key={index} className="entry-card">
            <div className="entry-actions"><strong>Entry {index + 1}</strong><button type="button" className="text-btn" onClick={() => onRemove('experience', index)}>Delete</button></div>
            <label>Job Title<input value={item.jobTitle} onChange={(event) => onChange('experience', index, { ...item, jobTitle: event.target.value })} /></label>
            <label>Company Name<input value={item.company} onChange={(event) => onChange('experience', index, { ...item, company: event.target.value })} /></label>
            <label>Location<input value={item.location} onChange={(event) => onChange('experience', index, { ...item, location: event.target.value })} /></label>
            <div className="field-grid">
              <label>Start Date<input value={item.startDate} onChange={(event) => onChange('experience', index, { ...item, startDate: event.target.value })} /></label>
              <label>End Date<input value={item.endDate} onChange={(event) => onChange('experience', index, { ...item, endDate: event.target.value })} /></label>
            </div>
            <label className="checkbox-row"><input type="checkbox" checked={item.currentlyWorking} onChange={(event) => onChange('experience', index, { ...item, currentlyWorking: event.target.checked })} /> Currently Working Here</label>
            <label>Responsibilities / Achievements<textarea value={item.description} onChange={(event) => onChange('experience', index, { ...item, description: event.target.value })} rows="3" /></label>
          </div>
        ))}
        <button type="button" className="btn btn-secondary full" onClick={() => onAdd('experience')}>Add Experience</button>
      </div>

      <div className="form-section">
        <SectionTitle title="Skills" />
        <div className="skill-input-row">
          <input value={skillInput} onChange={(event) => setSkillInput(event.target.value)} placeholder="Add a skill" />
          <button type="button" className="btn btn-secondary" onClick={addSkill}>Add</button>
        </div>
        <div className="chip-list">
          {(data.skills?.items || []).map((skill) => (
            <button key={skill} type="button" className="chip" onClick={() => removeSkill(skill)}>{skill} ×</button>
          ))}
        </div>
      </div>

      <div className="form-section">
        <SectionTitle title="Projects" />
        {(data.projects || []).map((item, index) => (
          <div key={index} className="entry-card">
            <div className="entry-actions"><strong>Entry {index + 1}</strong><button type="button" className="text-btn" onClick={() => onRemove('projects', index)}>Delete</button></div>
            <label>Project Name<input value={item.name} onChange={(event) => onChange('projects', index, { ...item, name: event.target.value })} /></label>
            <label>Description<textarea value={item.description} onChange={(event) => onChange('projects', index, { ...item, description: event.target.value })} rows="3" /></label>
            <label>Technologies Used<input value={item.technologies} onChange={(event) => onChange('projects', index, { ...item, technologies: event.target.value })} /></label>
            <label>Project Link<input value={item.link} onChange={(event) => onChange('projects', index, { ...item, link: event.target.value })} /></label>
          </div>
        ))}
        <button type="button" className="btn btn-secondary full" onClick={() => onAdd('projects')}>Add Project</button>
      </div>

      <div className="form-section">
        <SectionTitle title="Certifications" />
        {(data.certifications || []).map((item, index) => (
          <div key={index} className="entry-card">
            <div className="entry-actions"><strong>Entry {index + 1}</strong><button type="button" className="text-btn" onClick={() => onRemove('certifications', index)}>Delete</button></div>
            <label>Certification Name<input value={item.name} onChange={(event) => onChange('certifications', index, { ...item, name: event.target.value })} /></label>
            <label>Issuing Organization<input value={item.organization} onChange={(event) => onChange('certifications', index, { ...item, organization: event.target.value })} /></label>
            <label>Date Received<input value={item.date} onChange={(event) => onChange('certifications', index, { ...item, date: event.target.value })} /></label>
          </div>
        ))}
        <button type="button" className="btn btn-secondary full" onClick={() => onAdd('certifications')}>Add Certification</button>
      </div>

      <div className="form-section">
        <SectionTitle title="Languages" />
        {(data.languages || []).map((item, index) => (
          <div key={index} className="entry-card">
            <div className="entry-actions"><strong>Entry {index + 1}</strong><button type="button" className="text-btn" onClick={() => onRemove('languages', index)}>Delete</button></div>
            <label>Language<input value={item.language} onChange={(event) => onChange('languages', index, { ...item, language: event.target.value })} /></label>
            <label>Proficiency<input value={item.proficiency} onChange={(event) => onChange('languages', index, { ...item, proficiency: event.target.value })} /></label>
          </div>
        ))}
        <button type="button" className="btn btn-secondary full" onClick={() => onAdd('languages')}>Add Language</button>
      </div>

      <div className="form-section">
        <SectionTitle title="References" />
        <label className="checkbox-row"><input type="checkbox" checked={data.references.showRequest} onChange={(event) => onToggleReference(event.target.checked)} /> Show references available upon request</label>
        {!data.references.showRequest && (data.references.items || []).map((item, index) => (
          <div key={index} className="entry-card">
            <div className="entry-actions"><strong>Entry {index + 1}</strong><button type="button" className="text-btn" onClick={() => onRemove('references', index)}>Delete</button></div>
            <label>Referee Name<input value={item.name} onChange={(event) => onChange('references', index, { ...item, name: event.target.value })} /></label>
            <label>Job Title<input value={item.jobTitle} onChange={(event) => onChange('references', index, { ...item, jobTitle: event.target.value })} /></label>
            <label>Organization<input value={item.organization} onChange={(event) => onChange('references', index, { ...item, organization: event.target.value })} /></label>
            <label>Phone Number<input value={item.phone} onChange={(event) => onChange('references', index, { ...item, phone: event.target.value })} /></label>
            <label>Email Address<input value={item.email} onChange={(event) => onChange('references', index, { ...item, email: event.target.value })} /></label>
          </div>
        )))}
        {!data.references.showRequest && <button type="button" className="btn btn-secondary full" onClick={() => onAdd('references')}>Add Reference</button>}
      </div>
    </div>
  )
}

export default CVForm
