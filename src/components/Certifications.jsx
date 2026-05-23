const certs = [
  { icon: 'fa-solid fa-file-shield', title: 'Patent Under Review', desc: 'AI-based Smart Bed healthcare monitoring system using IoT edge computing and ML-based sleep classification.', tag: 'Under Review · 2024' },
  { icon: 'fa-solid fa-microphone-lines', title: 'SymResearch 2.0 — Symbiosis College, Pune', desc: 'Presented research on smart healthcare monitoring using embedded ML at the Symbiosis Research Symposium.' },
  { icon: 'fa-solid fa-certificate', title: 'NPTEL — Machine Learning', desc: 'IIT-certified course covering supervised and unsupervised learning, feature engineering, and applied ML.' },
  { icon: 'fa-solid fa-flask-vial', title: 'Summer Research Intern — NIT Allahabad', desc: 'Research internship at NIT Allahabad with collaborative R&D and applied engineering, Summer 2025.' },
]

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '7rem 0' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 2.5rem' }}>
        <div className="section-eyebrow">Recognition</div>
        <h2 className="section-title">Achievements & certifications.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          {certs.map(c => (
            <div key={c.title}
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 9, padding: '1.35rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', transition: 'border-color 0.25s, transform 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#28283a'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}
            >
              <div style={{ width: 38, height: 38, flexShrink: 0, borderRadius: 8, background: 'var(--accent-dim)', border: '1px solid rgba(124,90,245,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-light)', fontSize: '1rem' }}>
                <i className={c.icon} />
              </div>
              <div>
                <div style={{ fontSize: '0.87rem', color: '#f0f0f8', fontWeight: 600, marginBottom: '0.3rem', lineHeight: 1.3 }}>{c.title}</div>
                <div style={{ fontSize: '0.78rem', color: '#8888a8', lineHeight: 1.65 }}>{c.desc}</div>
                {c.tag && (
                  <span style={{ display: 'inline-block', marginTop: '0.5rem', fontFamily: "'DM Mono', monospace", fontSize: '0.62rem', color: 'var(--accent-light)', background: 'var(--accent-dim)', border: '1px solid rgba(124,90,245,0.25)', borderRadius: 3, padding: '0.18rem 0.5rem' }}>{c.tag}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
