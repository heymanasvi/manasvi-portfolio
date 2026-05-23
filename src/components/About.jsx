const cards = [
  {
    title: 'Research & IP',
    icon: 'fa-solid fa-file-shield',
    text: 'Patent under review for an AI-based Smart Bed healthcare monitoring system. Presented at SymResearch 2.0 at Symbiosis College, Pune.',
  },
  {
    title: 'Academic Excellence',
    icon: 'fa-solid fa-graduation-cap',
    text: '8.6 CGPA across rigorous ECE coursework while building projects, leading student communities, and upskilling in AI/ML.',
  },
  {
    title: 'Industry Exposure',
    icon: 'fa-solid fa-code-branch',
    text: 'Summer internship at NIT Allahabad. GSoC-track contributions to Apache Fineract and Mifos X in React and TypeScript. Active GitHub contributor.',
  },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '7rem 0', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 2.5rem' }}>
        <div className="section-eyebrow">About Me</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          <div>
            <h2 className="section-title">Building at the intersection of software and intelligence.</h2>
            {[
              <>I'm a third-year <strong style={{ color: '#f0f0f8' }}>Electronics &amp; Communication Engineering</strong> student at Bharati Vidyapeeth, Pune — drawn to problems where software creates real-world impact.</>,
              <>My work spans <strong style={{ color: '#f0f0f8' }}>full-stack web development, AI/ML pipelines, and IoT edge computing</strong>. I'm currently deep in Generative AI, RAG pipelines, LangChain, and agentic systems.</>,
              <>I lead as <strong style={{ color: '#f0f0f8' }}>Technical Head at Google Developer Groups (GDG)</strong>, organizing workshops and mentoring juniors. I believe good software is built collaboratively and that the best engineers stay curious.</>,
              <>Actively seeking internship opportunities in <strong style={{ color: '#f0f0f8' }}>software engineering and AI/ML</strong> where I can contribute fast and learn faster.</>,
            ].map((text, i) => (
              <p key={i} style={{ fontSize: '0.92rem', color: '#8888a8', lineHeight: 1.95, marginBottom: '1.4rem' }}>{text}</p>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {cards.map(c => (
              <div key={c.title} style={{
                padding: '1.5rem', background: 'var(--bg3)',
                border: '1px solid var(--border)', borderLeft: '2px solid var(--accent)',
                borderRadius: '0 8px 8px 0', transition: 'transform 0.25s, border-color 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.borderLeftColor = 'var(--accent-light)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderLeftColor = 'var(--accent)' }}
              >
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--accent-light)', marginBottom: '0.5rem' }}>
                  <i className={c.icon} style={{ marginRight: '0.4rem' }} />{c.title}
                </div>
                <p style={{ fontSize: '0.87rem', color: '#8888a8', lineHeight: 1.75 }}>{c.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
