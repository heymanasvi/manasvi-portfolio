const projects = [
  {
    idx: '01 — Featured',
    name: 'Smart Bed — IoT Sleep Intelligence System',
    desc: 'Multi-sensor Raspberry Pi system with ML-based sleep-stage classification and real-time snore detection. Includes a live healthcare dashboard for continuous non-invasive health monitoring from edge hardware. Patent currently under review.',
    chips: ['Patent Under Review', 'ML Sleep Classification', 'Python', 'Raspberry Pi', 'React', 'IoT Sensors'],
    highlight: ['Patent Under Review', 'ML Sleep Classification'],
    github: 'https://github.com/heymanasvi',
    featured: true,
  },
  {
    idx: '02',
    name: 'Sustainable Mobility Carbon Platform',
    desc: 'Hackathon platform for lifecycle carbon emission analysis comparing EV vs ICE vehicles, with a recommendation engine backed by EPA dataset analysis. Showcased at Technex IIT BHU.',
    chips: ['IIT BHU · Technex', 'React', 'FastAPI', 'Python'],
    highlight: ['IIT BHU · Technex'],
    github: 'https://github.com/heymanasvi',
    demo: '#',
  },
  {
    idx: '03',
    name: 'Railway Throughput Optimizer',
    desc: 'ML pipeline using XGBoost for railway congestion prediction and dynamic scheduling optimization. Processes historical traffic patterns to reduce throughput bottlenecks.',
    chips: ['Python', 'XGBoost', 'ML Pipeline'],
    highlight: [],
    github: 'https://github.com/heymanasvi',
  },
  {
    idx: '04',
    name: 'Apache Fineract — GSoC Contribution',
    desc: 'GSoC-track contributions to Apache Fineract and Mifos X Web App. Fixed OpenAPI inconsistencies, improved React and TypeScript integration, and resolved key issues with maintainers.',
    chips: ['Open Source', 'React', 'TypeScript', 'Java'],
    highlight: ['Open Source'],
    github: 'https://github.com/heymanasvi',
  },
]

const chipStyle = (hi) => ({
  fontFamily: "'DM Mono', monospace",
  fontSize: '0.67rem',
  padding: '0.22rem 0.6rem',
  borderRadius: 3,
  border: hi ? '1px solid rgba(124,90,245,0.35)' : '1px solid #28283a',
  color: hi ? 'var(--accent-light)' : '#44445a',
  background: hi ? 'var(--accent-dim)' : 'var(--bg4)',
})

const btnStyle = {
  fontFamily: "'DM Mono', monospace",
  fontSize: '0.72rem',
  color: '#8888a8',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.35rem',
  padding: '0.35rem 0.7rem',
  border: '1px solid #1e1e2a',
  borderRadius: 4,
  background: 'var(--bg4)',
  transition: 'all 0.2s',
  textDecoration: 'none',
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '7rem 0', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 2.5rem' }}>
        <div className="section-eyebrow">Selected Work</div>
        <h2 className="section-title">Things I've built.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {projects.map(p => (
            <div key={p.idx}
              style={{
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.3s, transform 0.3s',
                gridColumn: p.featured ? '1 / -1' : undefined,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#28283a'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}
            >
              <div style={{ height: 2, background: 'var(--accent)' }} />
              <div style={{ padding: '1.75rem', flex: 1 }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: '#44445a', marginBottom: '0.9rem', letterSpacing: '0.1em' }}>{p.idx}</div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.3rem', color: '#f0f0f8', marginBottom: '0.65rem', lineHeight: 1.2, fontWeight: 400 }}>{p.name}</div>
                <p style={{ fontSize: '0.86rem', color: '#8888a8', lineHeight: 1.8, marginBottom: '1.25rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {p.chips.map(c => (
                    <span key={c} style={chipStyle(p.highlight.includes(c))}>{c}</span>
                  ))}
                </div>
              </div>
              <div style={{ padding: '1.1rem 1.75rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '0.75rem' }}>
                <a href={p.github} target="_blank" rel="noreferrer"
                  style={btnStyle}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-light)'; e.currentTarget.style.borderColor = 'rgba(124,90,245,0.4)'; e.currentTarget.style.background = 'var(--accent-dim)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#8888a8'; e.currentTarget.style.borderColor = '#1e1e2a'; e.currentTarget.style.background = 'var(--bg4)' }}
                >
                  <i className="fa-brands fa-github" /> GitHub
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer"
                    style={btnStyle}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-light)'; e.currentTarget.style.borderColor = 'rgba(124,90,245,0.4)'; e.currentTarget.style.background = 'var(--accent-dim)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#8888a8'; e.currentTarget.style.borderColor = '#1e1e2a'; e.currentTarget.style.background = 'var(--bg4)' }}
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square" /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
