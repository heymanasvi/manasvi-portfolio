import { useEffect, useState } from 'react'

export default function Footer() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: isMobile ? '1.75rem 0' : '2.25rem 0' }}>
      <div style={{
        maxWidth: 1080, margin: '0 auto',
        padding: isMobile ? '0 1rem' : '0 2.5rem',
        display: 'flex',
        alignItems: isMobile ? 'flex-start' : 'center',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        gap: isMobile ? '1.25rem' : '1rem',
        width: '100%',
      }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', color: '#44445a' }}>
          © 2025 Manasvi Gupta · Designed and built from Pune
        </span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { href: 'https://github.com/heymanasvi', label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/manasvi-gupta-5b8569217/', label: 'LinkedIn' },
            { href: '#hero', label: '↑ Top' },
          ].map(l => (
            <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', color: '#44445a', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent-light)'}
              onMouseLeave={e => e.target.style.color = '#44445a'}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
