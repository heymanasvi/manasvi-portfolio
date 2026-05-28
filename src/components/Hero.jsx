import { useEffect, useState } from "react";

const avatarSrc = 'YOUR_IMAGE_BASE64_HERE';

const stats = [
  { n: '8.6', l: 'CGPA' },
  { n: '4+', l: 'Projects' },
  { n: '1', l: 'Patent' },
  { n: '3rd', l: 'Year ECE' },
]

export default function Hero() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 60,
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
      }}
    >

      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: isMobile ? 250 : 500,
          height: isMobile ? 250 : 500,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(124,90,245,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          padding: isMobile ? '0 1.2rem' : '0 2.5rem',
          width: '100%',
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >

        {/* MAIN GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.15fr 0.85fr',
            gap: isMobile ? '3rem' : '5rem',
            alignItems: 'center',
          }}
        >

          {/* LEFT */}
          <div style={{ width: '100%' }}>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                marginBottom: '2rem',
                fontFamily: "'DM Mono', monospace",
                fontSize: isMobile ? '0.62rem' : '0.72rem',
                color: '#8888a8',
                letterSpacing: '0.06em',
                flexWrap: 'wrap',
              }}
            >
              <span className="status-dot" />
              Available for internships · Summer 2026
            </div>

            <h1
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: isMobile
                  ? '3rem'
                  : 'clamp(3.5rem, 7vw, 5.5rem)',
                lineHeight: 0.92,
                color: '#f0f0f8',
                marginBottom: '1rem',
                fontWeight: 400,
                wordBreak: 'break-word',
              }}
            >
              <span style={{ display: 'block' }}>Manasvi</span>
              <span
                style={{
                  display: 'block',
                  color: 'var(--accent-light)',
                }}
              >
                Gupta
              </span>
            </h1>

            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: isMobile ? '0.72rem' : '0.85rem',
                color: '#8888a8',
                marginBottom: '2rem',
                letterSpacing: '0.04em',
                lineHeight: 1.7,
              }}
            >
              <span style={{ color: '#f0f0f8' }}>
                Full Stack Developer
              </span>{' '}
              · AI/ML Enthusiast · GenAI Builder
            </p>

            <p
              style={{
                fontSize: isMobile ? '0.88rem' : '0.93rem',
                color: '#8888a8',
                lineHeight: 1.9,
                maxWidth: 500,
                marginBottom: '2.5rem',
              }}
            >
              Electronics & Communication Engineering student at Bharati
              Vidyapeeth, Pune — building at the intersection of web
              development, machine learning, and embedded systems.
              Seeking internship opportunities where I can contribute
              and grow fast.
            </p>

            {/* BUTTONS */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2.5rem',
              }}
            >

              <a
                href="#projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: isMobile
                    ? '0.75rem 1.4rem'
                    : '0.8rem 1.8rem',
                  borderRadius: 5,
                  fontSize: '0.83rem',
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  background: 'var(--accent)',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.22s',
                  textDecoration: 'none',
                }}
              >
                <i className="fa-solid fa-folder-open" />
                View Projects
              </a>

              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: isMobile
                    ? '0.75rem 1.4rem'
                    : '0.8rem 1.8rem',
                  borderRadius: 5,
                  fontSize: '0.83rem',
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  background: 'transparent',
                  color: '#8888a8',
                  border: '1px solid #28283a',
                  cursor: 'pointer',
                  transition: 'all 0.22s',
                  textDecoration: 'none',
                }}
              >
                <i className="fa-solid fa-paper-plane" />
                Contact Me
              </a>

            </div>

            {/* SOCIALS */}
            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                flexWrap: 'wrap',
              }}
            >
              {[
                {
                  href: 'https://github.com/heymanasvi',
                  icon: 'fa-brands fa-github',
                  label: 'GitHub',
                },
                {
                  href: 'https://www.linkedin.com/in/manasvi-gupta-5b8569217/',
                  icon: 'fa-brands fa-linkedin-in',
                  label: 'LinkedIn',
                },
                {
                  href: 'mailto:gmanasvi02@gmail.com',
                  icon: 'fa-solid fa-envelope',
                  label: 'Email',
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={
                    s.href.startsWith('http')
                      ? '_blank'
                      : undefined
                  }
                  rel="noreferrer"
                  title={s.label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 6,
                    border: '1px solid #28283a',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#8888a8',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                  }}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>

          </div>

          {/* RIGHT */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              width: '100%',
            }}
          >

            {/* IMAGE */}
            <div
              style={{
                position: 'relative',
                width: isMobile ? 220 : 260,
                height: isMobile ? 220 : 260,
                maxWidth: '100%',
              }}
            >

              <div
                style={{
                  position: 'absolute',
                  inset: -20,
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(124,90,245,0.12) 0%, transparent 70%)',
                  zIndex: -1,
                }}
              />

              <img
                src={avatarSrc}
                alt="Manasvi Gupta"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />

            </div>

            {/* STATS */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 1,
                background: '#1e1e2a',
                border: '1px solid #1e1e2a',
                borderRadius: 10,
                overflow: 'hidden',
                width: '100%',
                maxWidth: isMobile ? '100%' : 420,
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.l}
                  style={{
                    background: 'var(--bg3)',
                    padding: isMobile ? '1rem' : '1.25rem',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: isMobile ? '1.4rem' : '1.75rem',
                      color: '#f0f0f8',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {s.n}
                  </div>

                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: '0.65rem',
                      color: '#44445a',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {s.l}
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}