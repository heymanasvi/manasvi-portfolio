export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '2.25rem 0' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
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
