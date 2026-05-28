import { useEffect, useState } from "react";

const groups = [
  {
    icon: 'fa-solid fa-code',
    title: 'Frontend & Web Development',
    skills: [
      { icon: 'fa-brands fa-react', name: 'React.js' },
      { icon: 'fa-brands fa-js', name: 'JavaScript' },
      { icon: 'fa-brands fa-html5', name: 'HTML5' },
      { icon: 'fa-brands fa-css3-alt', name: 'CSS3' },
      { icon: 'fa-solid fa-wind', name: 'Tailwind CSS' },
      { icon: 'fa-solid fa-bolt', name: 'Vite' },
      { icon: 'fa-solid fa-server', name: 'FastAPI' },
      { icon: 'fa-solid fa-plug', name: 'REST APIs' },
      { icon: 'fa-brands fa-node-js', name: 'Node.js' },
    ],
  },
  {
    icon: 'fa-solid fa-brain',
    title: 'AI / ML & Generative AI',
    skills: [
      { icon: 'fa-solid fa-fire', name: 'PyTorch' },
      { icon: 'fa-solid fa-chart-line', name: 'Scikit-learn' },
      { icon: 'fa-solid fa-tree', name: 'XGBoost' },
      { icon: 'fa-solid fa-table', name: 'NumPy & Pandas' },
      { icon: 'fa-solid fa-link', name: 'LangChain' },
      { icon: 'fa-solid fa-diagram-project', name: 'LangGraph' },
      { icon: 'fa-solid fa-database', name: 'RAG Pipelines' },
      { icon: 'fa-solid fa-comment-dots', name: 'Prompt Engineering' },
      { icon: 'fa-solid fa-robot', name: 'Agentic AI' },
      { icon: 'fa-solid fa-wand-magic-sparkles', name: 'OpenAI API' },
      { icon: 'fa-solid fa-gem', name: 'Gemini API' },
      { icon: 'fa-solid fa-face-smile', name: 'HuggingFace' },
      { icon: 'fa-solid fa-circle-nodes', name: 'Ollama' },
      { icon: 'fa-solid fa-server', name: 'MCP Servers' },
    ],
  },
  {
    icon: 'fa-solid fa-terminal',
    title: 'Programming Languages',
    skills: [
      { icon: 'fa-brands fa-python', name: 'Python' },
      { icon: 'fa-brands fa-java', name: 'Java' },
      { icon: 'fa-brands fa-js', name: 'JavaScript' },
      { icon: 'fa-solid fa-microchip', name: 'Embedded C' },
      { icon: 'fa-solid fa-database', name: 'SQL' },
    ],
  },
  {
    icon: 'fa-solid fa-database',
    title: 'Databases & Storage',
    skills: [
      { icon: 'fa-solid fa-database', name: 'PostgreSQL' },
      { icon: 'fa-solid fa-database', name: 'MySQL' },
      { icon: 'fa-solid fa-layer-group', name: 'Vector Databases' },
    ],
  },
  {
    icon: 'fa-solid fa-wrench',
    title: 'Developer Tools & Core CS',
    skills: [
      { icon: 'fa-brands fa-git-alt', name: 'Git' },
      { icon: 'fa-brands fa-github', name: 'GitHub' },
      { icon: 'fa-brands fa-docker', name: 'Docker' },
      { icon: 'fa-solid fa-code', name: 'VS Code' },
      { icon: 'fa-solid fa-sitemap', name: 'DSA' },
      { icon: 'fa-solid fa-cubes', name: 'OOP' },
      { icon: 'fa-solid fa-table-cells', name: 'DBMS' },
    ],
  },
  {
    icon: 'fa-solid fa-microchip',
    title: 'Hardware & Embedded Systems',
    skills: [
      { icon: 'fa-brands fa-raspberry-pi', name: 'Raspberry Pi' },
      { icon: 'fa-solid fa-microchip', name: 'Arduino' },
      { icon: 'fa-solid fa-wifi', name: 'ESP32' },
      { icon: 'fa-solid fa-draw-polygon', name: 'PCB Design' },
      { icon: 'fa-solid fa-wave-square', name: 'Signal Processing' },
      { icon: 'fa-solid fa-memory', name: 'VLSI Fundamentals' },
    ],
  },
]

export default function Skills() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="skills"
      style={{
        padding: isMobile ? '4rem 0' : '7rem 0',
        width: '100%',
        overflow: 'hidden',
      }}
    >

      <div
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          padding: isMobile ? '0 1rem' : '0 2.5rem',
          width: '100%',
        }}
      >

        <div className="section-eyebrow">
          Technical Skills
        </div>

        <h2 className="section-title">
          What I work with.
        </h2>

        {groups.map((g) => (

          <div
            key={g.title}
            style={{
              marginBottom: isMobile ? '2rem' : '2.75rem',
            }}
          >

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                marginBottom: '1.25rem',
                flexWrap: 'wrap',
              }}
            >

              <div
                style={{
                  width: isMobile ? 28 : 32,
                  height: isMobile ? 28 : 32,

                  borderRadius: 7,

                  background: 'var(--accent-dim)',

                  border:
                    '1px solid rgba(124,90,245,0.2)',

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  color: 'var(--accent-light)',

                  fontSize: isMobile ? '0.75rem' : '0.85rem',

                  flexShrink: 0,
                }}
              >
                <i className={g.icon} />
              </div>

              <span
                style={{
                  fontFamily: "'DM Mono', monospace",

                  fontSize: isMobile
                    ? '0.68rem'
                    : '0.78rem',

                  color: '#8888a8',

                  letterSpacing: '0.1em',

                  textTransform: 'uppercase',

                  lineHeight: 1.5,
                }}
              >
                {g.title}
              </span>

            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: isMobile ? '0.5rem' : '0.65rem',
              }}
            >

              {g.skills.map((s) => (

                <span
                  key={s.name}
                  className="pill"
                  style={{
                    fontSize: isMobile ? '0.72rem' : undefined,
                    padding: isMobile
                      ? '0.42rem 0.75rem'
                      : undefined,
                  }}
                >
                  <i className={s.icon} />
                  {s.name}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}