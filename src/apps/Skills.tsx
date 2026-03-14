export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "MySQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Redux Toolkit", "React Router", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Prisma ORM", "VS Code"]
    }
  ];

  return (
    <>
      <style>{`
        .skills-container {
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

        .skills-header {
            margin-bottom: 40px;
        }

        .skills-kicker {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: var(--text-tertiary);
            font-weight: 600;
            margin-bottom: 8px;
        }

        .skills-title {
            font-size: 32px;
            font-weight: 600;
            letter-spacing: -0.02em;
            line-height: 1.1;
            background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px;
        }

        .skill-group-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            padding: 28px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
        }

        .skill-group-card:hover {
            transform: translateY(-2px);
            background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
            border-color: rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 30px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05);
        }

        .skill-group-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 20px;
            letter-spacing: -0.01em;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .skill-group-title::before {
            content: '';
            display: block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--accent-color);
            box-shadow: 0 0 10px rgba(10, 132, 255, 0.6);
        }

        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .skill-tag {
            font-size: 13px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.9);
            padding: 6px 14px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            letter-spacing: 0.01em;
            transition: all 0.2s ease;
            cursor: default;
        }

        .skill-tag:hover {
            background: rgba(10, 132, 255, 0.15);
            border-color: rgba(10, 132, 255, 0.3);
            color: #ffffff;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(10, 132, 255, 0.1);
        }
      `}</style>
      <div className="skills-container">
        
        <div className="skills-header">
            <h4 className="skills-kicker">Expertise</h4>
            <h1 className="skills-title">Technical Skills</h1>
        </div>

        <div className="skills-grid">
            {skillCategories.map((group, index) => (
                <div key={index} className="skill-group-card">
                    <h3 className="skill-group-title">{group.title}</h3>
                    <div className="skill-tags">
                        {group.skills.map((skill, i) => (
                            <span key={i} className="skill-tag">
                                {skill}
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
