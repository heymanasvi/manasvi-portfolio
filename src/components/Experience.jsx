import { useEffect, useState } from 'react'

const items = [
  {
    when: '2023 — Present',
    where: 'Google Developer Groups on Campus',
    role: 'Technical Head',
    points: [
      'Led technical workshops on web development, ML, and cloud technologies',
      'Organized developer events and hackathons for the campus engineering community',
      'Mentored juniors in React, Python, and AI/ML fundamentals',
    ],
  },
  {
    when: '2023 — 2024',
    where: 'Electronics Department, Bharati Vidyapeeth',
    role: 'Publicity Head',
    points: [
      'Managed promotional campaigns for departmental events and technical fests',
      'Coordinated cross-team outreach and department-level communications',
    ],
  },
  {
    when: 'Summer 2025',
    where: 'NIT Allahabad',
    role: 'Summer Research Intern',
    points: [
      'Worked on technical research and collaborative engineering development',
      'Gained experience with institutional R&D workflows and applied research methodologies',
    ],
  },
  {
    when: 'Summer 2026',
    where: 'Apache Fineract / Mifos X — Open Source',
    role: 'Open Source Contributor',
    points: [
      'GSoC-track contributions to Apache Fineract and Mifos X Web App in React and TypeScript',
      'Resolved OpenAPI inconsistencies and improved integration quality across services',
      'Engaged with global maintainers through structured issue resolution and PR reviews',
    ],
  },
]

export default function Experience() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="experience" style={{ padding: isMobile ? '4rem 0' : '7rem 0' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: isMobile ? '0 1rem' : '0 2.5rem', width: '100%' }}>
        <div className="section-eyebrow">Experience</div>
        <h2 className="section-title">Where I've contributed.</h2>

        <div style={{ paddingLeft: isMobile ? '1rem' : '1.5rem', borderLeft: '1px solid #28283a' }}>
          {items.map((item, i) => (
            <div key={i} style={{ position: 'relative', paddingBottom: i < items.length - 1 ? (isMobile ? '2rem' : '2.75rem') : 0, paddingLeft: isMobile ? '1.25rem' : '1.75rem' }}>
              <div style={{
                position: 'absolute', left: -5, top: 4,
                width: 9, height: 9, borderRadius: '50%',
                background: 'var(--bg)', border: '1.5px solid var(--accent)',
                transition: 'background 0.25s',
              }} />
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.68rem', color: 'var(--accent-light)', marginBottom: '0.2rem', letterSpacing: '0.06em' }}>{item.when}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', color: '#44445a', marginBottom: '0.5rem' }}>{item.where}</div>
              <div style={{ fontSize: '1rem', color: '#f0f0f8', fontWeight: 600, marginBottom: '0.6rem' }}>{item.role}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {item.points.map((pt, j) => (
                  <li key={j} style={{ fontSize: '0.86rem', color: '#8888a8', paddingLeft: '1.2rem', position: 'relative', lineHeight: 1.65 }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-light)', fontSize: '0.8rem' }}>·</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
