import { useState, useEffect } from 'react'

export default function Contact() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [form, setForm] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState(null)

  const handle = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

  const submit = async (e) => {
    e.preventDefault()

    setStatus('sending')

    try {

      const emailjs = await import('@emailjs/browser')

      await emailjs.send(
        'service_1p8xm3l',
        'template_ijbw1ys',
        form,
        {
          publicKey: 'X22l3lbS8uzKU11RT'
        }
      )

      setStatus('success')

      setForm({
        from_name: '',
        reply_to: '',
        subject: '',
        message: ''
      })

    } catch {

      setStatus('error')

    }

    setTimeout(() => setStatus(null), 4500)
  }

  const inputStyle = {
    background: 'var(--bg3)',

    border: '1px solid var(--border)',

    borderRadius: 6,

    padding: isMobile
      ? '0.75rem 0.9rem'
      : '0.8rem 1rem',

    fontSize: isMobile ? '0.82rem' : '0.87rem',

    color: '#f0f0f8',

    fontFamily: "'Syne', sans-serif",

    outline: 'none',

    width: '100%',

    transition: 'border-color 0.22s',
  }

  return (
    <section
      id="contact"
      style={{
        padding: isMobile ? '4rem 0' : '7rem 0',

        background: 'var(--bg2)',

        width: '100%',

        overflow: 'hidden',
      }}
    >

      <div
        style={{
          maxWidth: 1080,

          margin: '0 auto',

          padding: isMobile
            ? '0 1rem'
            : '0 2.5rem',

          width: '100%',
        }}
      >

        <div className="section-eyebrow">
          Get In Touch
        </div>

        <h2 className="section-title">
          Let's build something together.
        </h2>

        <div
          style={{
            display: 'grid',

            gridTemplateColumns:
              isMobile ? '1fr' : '1fr 1.5fr',

            gap: isMobile ? '2.5rem' : '5rem',

            alignItems: 'start',
          }}
        >

          {/* LEFT */}

          <div>

            <p
              style={{
                fontSize: isMobile
                  ? '0.85rem'
                  : '0.92rem',

                color: '#8888a8',

                lineHeight: 1.9,

                marginBottom: '1.75rem',
              }}
            >
              I'm actively looking for{' '}
              <strong
                style={{
                  color: '#f0f0f8'
                }}
              >
                internship opportunities
              </strong>{' '}
              in software engineering,
              full-stack development,
              and AI/ML.

              If you're looking for someone
              who ships real things and learns
              fast, I'd love to connect.
            </p>

            <p
              style={{
                fontSize: isMobile
                  ? '0.85rem'
                  : '0.92rem',

                color: '#8888a8',

                lineHeight: 1.9,

                marginBottom: '1.75rem',
              }}
            >
              Open to research collaborations,
              open source projects,
              and good technical conversations too.
            </p>

            {[
              {
                href: 'https://github.com/heymanasvi',
                icon: 'fa-brands fa-github',
                label: 'github.com/heymanasvi'
              },
              {
                href: 'https://www.linkedin.com/in/manasvi-gupta-5b8569217/',
                icon: 'fa-brands fa-linkedin-in',
                label: 'manasvi-gupta-5b8569217'
              },
              {
                href: 'mailto:gmanasvi02@gmail.com',
                icon: 'fa-solid fa-envelope',
                label: 'gmanasvi02@gmail.com'
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

                style={{
                  display: 'flex',

                  alignItems: 'center',

                  gap: '0.85rem',

                  padding: isMobile
                    ? '0.75rem 0.9rem'
                    : '0.85rem 1rem',

                  border: '1px solid var(--border)',

                  borderRadius: 7,

                  fontSize: isMobile
                    ? '0.78rem'
                    : '0.85rem',

                  color: '#8888a8',

                  background: 'var(--bg3)',

                  transition: 'all 0.22s',

                  marginBottom: '0.65rem',

                  textDecoration: 'none',

                  overflowWrap: 'break-word',
                }}

                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    'rgba(124,90,245,0.4)';

                  e.currentTarget.style.color =
                    '#f0f0f8';

                  e.currentTarget.style.background =
                    'var(--accent-dim)';
                }}

                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    'var(--border)';

                  e.currentTarget.style.color =
                    '#8888a8';

                  e.currentTarget.style.background =
                    'var(--bg3)';
                }}
              >

                <i
                  className={s.icon}
                  style={{
                    color: 'var(--accent-light)',

                    width: 16,

                    textAlign: 'center',

                    flexShrink: 0,
                  }}
                />

                {s.label}

              </a>

            ))}

          </div>

          {/* FORM */}

          <form
            onSubmit={submit}

            style={{
              display: 'flex',

              flexDirection: 'column',

              gap: '1.15rem',

              width: '100%',
            }}
          >

            <div
              style={{
                display: 'grid',

                gridTemplateColumns:
                  isMobile ? '1fr' : '1fr 1fr',

                gap: '1.15rem',
              }}
            >

              {[
                {
                  label: 'Name',
                  name: 'from_name',
                  type: 'text',
                  ph: 'Your name'
                },

                {
                  label: 'Email',
                  name: 'reply_to',
                  type: 'email',
                  ph: 'your@email.com'
                }

              ].map((f) => (

                <div key={f.name}>

                  <label
                    style={{
                      fontFamily:
                        "'DM Mono', monospace",

                      fontSize: '0.65rem',

                      letterSpacing: '0.14em',

                      textTransform: 'uppercase',

                      color: '#44445a',

                      display: 'block',

                      marginBottom: '0.45rem',
                    }}
                  >
                    {f.label}
                  </label>

                  <input
                    type={f.type}

                    name={f.name}

                    placeholder={f.ph}

                    value={form[f.name]}

                    onChange={handle}

                    required

                    style={inputStyle}

                    onFocus={(e) =>
                      e.target.style.borderColor =
                        'rgba(124,90,245,0.5)'
                    }

                    onBlur={(e) =>
                      e.target.style.borderColor =
                        'var(--border)'
                    }
                  />

                </div>

              ))}

            </div>

            <div>

              <label
                style={{
                  fontFamily:
                    "'DM Mono', monospace",

                  fontSize: '0.65rem',

                  letterSpacing: '0.14em',

                  textTransform: 'uppercase',

                  color: '#44445a',

                  display: 'block',

                  marginBottom: '0.45rem',
                }}
              >
                Subject
              </label>

              <input
                type="text"

                name="subject"

                placeholder="Internship opportunity / collaboration ..."

                value={form.subject}

                onChange={handle}

                style={inputStyle}

                onFocus={(e) =>
                  e.target.style.borderColor =
                    'rgba(124,90,245,0.5)'
                }

                onBlur={(e) =>
                  e.target.style.borderColor =
                    'var(--border)'
                }
              />

            </div>

            <div>

              <label
                style={{
                  fontFamily:
                    "'DM Mono', monospace",

                  fontSize: '0.65rem',

                  letterSpacing: '0.14em',

                  textTransform: 'uppercase',

                  color: '#44445a',

                  display: 'block',

                  marginBottom: '0.45rem',
                }}
              >
                Message
              </label>

              <textarea
                name="message"

                placeholder="Tell me what you'd like to discuss..."

                rows={6}

                value={form.message}

                onChange={handle}

                style={{
                  ...inputStyle,

                  resize: 'vertical',
                }}

                onFocus={(e) =>
                  e.target.style.borderColor =
                    'rgba(124,90,245,0.5)'
                }

                onBlur={(e) =>
                  e.target.style.borderColor =
                    'var(--border)'
                }
              />

            </div>

            <button
              type="submit"

              disabled={status === 'sending'}

              style={{
                display: 'inline-flex',

                alignItems: 'center',

                justifyContent: 'center',

                gap: '0.6rem',

                background: 'var(--accent)',

                color: '#fff',

                border: 'none',

                padding: isMobile
                  ? '0.8rem 1.4rem'
                  : '0.85rem 1.85rem',

                borderRadius: 6,

                fontSize: isMobile
                  ? '0.8rem'
                  : '0.85rem',

                fontFamily: "'Syne', sans-serif",

                fontWeight: 600,

                letterSpacing: '0.04em',

                cursor:
                  status === 'sending'
                    ? 'not-allowed'
                    : 'pointer',

                transition: 'all 0.22s',

                alignSelf: isMobile
                  ? 'stretch'
                  : 'flex-start',

                opacity:
                  status === 'sending'
                    ? 0.6
                    : 1,
              }}

              onMouseEnter={(e) => {
                if (status !== 'sending') {

                  e.currentTarget.style.background =
                    '#6a4ae0';

                  e.currentTarget.style.transform =
                    'translateY(-1px)';
                }
              }}

              onMouseLeave={(e) => {

                e.currentTarget.style.background =
                  'var(--accent)';

                e.currentTarget.style.transform =
                  'none';
              }}
            >

              {status === 'sending'
                ? 'Sending...'
                : 'Send Message'}

              <i className="fa-solid fa-paper-plane" />

            </button>

            {status === 'success' && (

              <p
                style={{
                  fontSize: '0.85rem',

                  color: '#4ade80',
                }}
              >
                Message sent! I'll get back to you soon.
              </p>

            )}

            {status === 'error' && (

              <p
                style={{
                  fontSize: '0.85rem',

                  color: '#f87171',
                }}
              >
                Something went wrong.
                Email me at gmanasvi02@gmail.com
              </p>

            )}

          </form>

        </div>

      </div>

    </section>
  )
}