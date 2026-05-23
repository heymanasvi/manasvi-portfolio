const schools = [
  {
    degree: 'B.Tech — Electronics & Communication Engineering',
    school: 'Bharati Vidyapeeth Deemed University, Pune',
    meta: 'Expected 2027 · Pimpri-Chinchwad, Pune',
    bottomLabel: 'Current CGPA',
    bottomVal: '8.6 / 10',
    bottomIsLarge: true,
  },
  {
    degree: 'CBSE Class XII — Science (PCM)',
    school: 'Shri Vinayak Academy, Orai',
    meta: 'Uttar Pradesh · CBSE Board',
    bottomLabel: 'Stream',
    bottomVal: 'Physics · Chemistry · Mathematics',
    bottomIsLarge: false,
  },
]

export default function Education() {
  return (
    <section id="education" style={{ padding: '7rem 0', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 2.5rem' }}>
        <div className="section-eyebrow">Education</div>
        <h2 className="section-title">Academic background.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {schools.map(s => (
            <div key={s.school}
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden', transition: 'border-color 0.25s, transform 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#28283a'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}
            >
              <div style={{ padding: '1.75rem', paddingBottom: '1.25rem' }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.1rem', color: '#f0f0f8', marginBottom: '0.45rem', lineHeight: 1.3, fontWeight: 400 }}>{s.degree}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.82rem', color: 'var(--accent-light)', marginBottom: '0.5rem' }}>{s.school}</div>
                <div style={{ fontSize: '0.78rem', color: '#44445a' }}>{s.meta}</div>
              </div>
              <div style={{ padding: '1.1rem 1.75rem', background: 'var(--bg4)', borderTop: '1px solid var(--border)' }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.62rem', color: '#44445a', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.25rem' }}>{s.bottomLabel}</div>
                {s.bottomIsLarge
                  ? <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.35rem', color: '#f0f0f8', fontWeight: 400 }}>{s.bottomVal}</div>
                  : <div style={{ fontSize: '0.88rem', color: '#8888a8', paddingTop: '0.2rem' }}>{s.bottomVal}</div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
