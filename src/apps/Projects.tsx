export default function Projects() {
  const projects = [
    {
      name: "myCLI – React Project Scaffolding CLI",
      desc: "Built an npm CLI tool to generate a production-ready React + TypeScript architecture. Automatically configures Redux Toolkit, Vite, React Router, Axios, and project structure.",
      tech: [
        "Node.js",
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Vite",
        "Axios",
      ],
      github: "https://github.com/akshit1662002/myCLI",
      live: "https://www.npmjs.com/package/mycliakki100",
      icon: (
        <svg viewBox="0 0 24 24">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
    {
      name: "Food Ordering App",
      desc: "Developed a responsive food ordering app using live APIs. Implemented Redux Toolkit state management and optimized UI with shimmer loading.",
      tech: ["React", "Redux Toolkit", "REST APIs", "Tailwind CSS"],
      github: "",
      live: "",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
    },
    {
      name: "CarCraze – Car Showcase Platform",
      desc: "Built a dynamic car discovery platform featuring detailed car listings, search and filter functionality, and a modern responsive UI. Supports user authentication and real-time browsing experience.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "REST APIs"],
      github: "https://github.com/akshit1662002/CarCraze",
      live: "https://akshit-car-craze.vercel.app",
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="1" y="3" width="15" height="13" rx="2"></rect>
          <path d="M16 8h4l3 5v3h-7V8z"></path>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        .projects-container {
            --text-primary: #ffffff;
            --text-secondary: rgba(235, 235, 245, 0.6);
            --text-tertiary: rgba(235, 235, 245, 0.3);
            --accent-color: #0A84FF;
            color: var(--text-primary);
            padding: 40px;
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            position: relative;
            max-width: 900px;
            margin: 0 auto;
        }

        .projects-header {
            margin-bottom: 40px;
        }

        .projects-kicker {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: var(--text-tertiary);
            font-weight: 600;
            margin-bottom: 8px;
        }

        .projects-title {
            font-size: 32px;
            font-weight: 600;
            letter-spacing: -0.02em;
            line-height: 1.1;
            background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 24px;
        }

        .project-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            padding: 32px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
        }

        .project-card::after {
            content: '';
            position: absolute;
            top: 0; right: 0; left: 0; height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .project-card:hover {
            transform: translateY(-4px);
            background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
            border-color: rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 30px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05);
        }

        .project-card:hover::after {
            opacity: 1;
        }

        .project-header-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 16px;
            gap: 16px;
        }

        .project-icon-wrapper {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            background: rgba(10, 132, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent-color);
            flex-shrink: 0;
            border: 1px solid rgba(10, 132, 255, 0.2);
        }

        .project-icon-wrapper svg {
            width: 20px;
            height: 20px;
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        .project-links {
            display: flex;
            gap: 8px;
        }

        .project-link {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-secondary);
            transition: all 0.2s ease;
        }

        .project-link:hover {
            background: rgba(255,255,255,0.1);
            color: var(--text-primary);
            border-color: rgba(255,255,255,0.15);
            transform: translateY(-2px);
        }

        .project-link svg {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }

        .live-icon {
            fill: none !important;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        .project-title {
            font-size: 20px;
            font-weight: 600;
            letter-spacing: -0.01em;
            color: var(--text-primary);
            margin-bottom: 12px;
        }

        .project-desc {
            font-size: 14px;
            line-height: 1.6;
            color: var(--text-secondary);
            margin-bottom: 24px;
            flex-grow: 1;
            font-weight: 400;
        }

        .project-tech-list {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: auto;
        }

        .project-tech-item {
            font-size: 12px;
            font-weight: 500;
            color: rgba(10, 132, 255, 0.9);
            padding: 4px 10px;
            border-radius: 6px;
            background: rgba(10, 132, 255, 0.1);
            border: 1px solid rgba(10, 132, 255, 0.2);
            letter-spacing: 0.02em;
        }
      `}</style>

      <div className="projects-container">
        <div className="projects-header">
          <h4 className="projects-kicker">Showcase</h4>
          <h1 className="projects-title">Featured Projects</h1>
        </div>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div key={i} className="project-card">
              <div className="project-header-row">
                <div className="project-icon-wrapper">{proj.icon}</div>
                <div className="project-links">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub Repository"
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Live Demo"
                    >
                      <svg viewBox="0 0 24 24" className="live-icon">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-title">{proj.name}</h3>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-tech-list">
                {proj.tech.map((t) => (
                  <span key={t} className="project-tech-item">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
