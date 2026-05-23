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

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(9,9,13,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid #1e1e2a' : '1px solid transparent',
      height: 60, display: 'flex', alignItems: 'center',
      padding: '0 3rem', justifyContent: 'space-between',
      transition: 'all 0.3s',
    }}>
      <a href="#" style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.2rem', color: '#f0f0f8' }}>
        Manasvi<span style={{ color: 'var(--accent-light)' }}>.</span>
      </a>

      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {links.map(l => (
          <li key={l.label}>
            <a
              href={l.href}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.75rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: active === l.href.slice(1) ? '#f0f0f8' : '#8888a8',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#f0f0f8'}
              onMouseLeave={e => e.target.style.color = active === l.href.slice(1) ? '#f0f0f8' : '#8888a8'}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

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
    </nav>
  )
}
