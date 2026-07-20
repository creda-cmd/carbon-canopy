const templates = [
  {
    id: 'minimal',
    title: 'Minimal Professional',
    description: 'Clean, ATS-friendly layout with elegant spacing.',
  },
  {
    id: 'modern',
    title: 'Modern Green',
    description: 'Forest green header and strong hierarchy for modern recruiters.',
  },
  {
    id: 'graduate',
    title: 'Graduate Focus',
    description: 'Highlights education, projects, certifications, and internships.',
  },
]

function TemplateSelector({ selectedTemplate, onSelect }) {
  return (
    <div className="template-grid">
      {templates.map((template) => (
        <button
          key={template.id}
          type="button"
          className={`template-card ${selectedTemplate === template.id ? 'active' : ''}`}
          onClick={() => onSelect(template.id)}
        >
          <h3>{template.title}</h3>
          <p>{template.description}</p>
        </button>
      ))}
    </div>
  )
}

export default TemplateSelector
