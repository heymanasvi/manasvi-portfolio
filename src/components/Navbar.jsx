import { useEffect, useState } from 'react'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = document.querySelectorAll('section[id]')
      let cur = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 110) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const linkStyle = (href) => ({
    fontFamily: "'DM Mono', monospace",
    fontSize: '0.75rem',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: active === href.slice(1) ? '#f0f0f8' : '#8888a8',
    transition: 'color 0.2s',
    textDecoration: 'none',
  })

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled || menuOpen ? 'rgba(9,9,13,0.92)' : 'transparent',
      backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
      borderBottom: scrolled || menuOpen ? '1px solid #1e1e2a' : '1px solid transparent',
      height: 60, display: 'flex', alignItems: 'center',
      padding: isMobile ? '0 1rem' : '0 3rem',
      justifyContent: 'space-between',
      transition: 'all 0.3s',
    }}>
      <a href="#" style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.2rem', color: '#f0f0f8' }}>
        Manasvi<span style={{ color: 'var(--accent-light)' }}>.</span>
      </a>

      {!isMobile && (
        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
          {links.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                style={linkStyle(l.href)}
                onMouseEnter={e => e.target.style.color = '#f0f0f8'}
                onMouseLeave={e => e.target.style.color = active === l.href.slice(1) ? '#f0f0f8' : '#8888a8'}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {!isMobile && (
          <a
            href="#contact"
            style={{
              fontFamily: "'DM Mono', monospace", fontSize: '0.75rem',
              letterSpacing: '0.08em', color: 'var(--accent-light)',
              border: '1px solid rgba(124,90,245,0.4)',
              padding: '0.45rem 1.1rem', borderRadius: '4px', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.background = 'var(--accent-dim)'; e.target.style.color = '#fff' }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-light)' }}
          >
            Hire Me
          </a>
        )}

        {isMobile && (
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
            style={{
              width: 40, height: 40, borderRadius: 6,
              border: '1px solid #28283a', background: 'transparent',
              color: '#f0f0f8', fontSize: '1.1rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
          </button>
        )}
      </div>

      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: 60, left: 0, right: 0, bottom: 0,
          background: 'rgba(9,9,13,0.97)', backdropFilter: 'blur(20px)',
          padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem',
        }}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              style={{
                ...linkStyle(l.href),
                fontSize: '0.85rem',
                padding: '0.85rem 0.5rem',
                borderBottom: '1px solid #1e1e2a',
              }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: '0.75rem',
              fontFamily: "'DM Mono', monospace", fontSize: '0.8rem',
              letterSpacing: '0.08em', color: 'var(--accent-light)',
              border: '1px solid rgba(124,90,245,0.4)',
              padding: '0.75rem 1rem', borderRadius: '4px', textAlign: 'center',
            }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
