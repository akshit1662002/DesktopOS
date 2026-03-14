export default function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "MetaSquare Technologies",
      period: "Jul 2025 – Present",
      points: [
          "Developing a large-scale HR Management System using React, TypeScript, Node.js, and PostgreSQL.",
          "Built the frontend architecture from scratch using Atomic Design with reusable components.",
          "Implemented Redux Toolkit with async thunks for centralized state management.",
          "Developed complex forms using Formik and Yup validation.",
          "Implemented attendance and leave modules using react-big-calendar.",
          "Built backend APIs using Node.js + Prisma ORM with RBAC authentication.",
      ]
    },
    {
      role: "Associate Software Developer",
      company: "MetaSquare Technologies",
      period: "Sep 2024 – Jul 2025",
      points: [
          "Developed frontend features for a data analytics platform using React.js.",
          "Built dashboards for SEO, performance, and accessibility metrics.",
          "Created reusable UI components to improve scalability and maintainability.",
          "Collaborated with backend and QA teams to deliver stable production releases.",
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "Buzzpenny",
      period: "Aug 2023 – Oct 2023",
      points: [
          "Developed responsive UI components using React.js, HTML, CSS, and JavaScript.",
          "Improved UI responsiveness and cross-device compatibility.",
      ]
    }
  ];

  return (
    <>
      <style>{`
        .experience-container {
            --text-primary: #ffffff;
            --text-secondary: rgba(235, 235, 245, 0.6);
            --text-tertiary: rgba(235, 235, 245, 0.3);
            --accent-color: #0A84FF;
            color: var(--text-primary);
            padding: 40px;
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            position: relative;
            max-width: 800px;
            margin: 0 auto;
        }

        .experience-header {
            margin-bottom: 40px;
        }

        .experience-kicker {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: var(--text-tertiary);
            font-weight: 600;
            margin-bottom: 8px;
        }

        .experience-title {
            font-size: 32px;
            font-weight: 600;
            letter-spacing: -0.02em;
            line-height: 1.1;
            background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .timeline {
            position: relative;
            padding-left: 24px;
        }

        .timeline::before {
            content: '';
            position: absolute;
            left: 0;
            top: 6px;
            bottom: 6px;
            width: 1px;
            background: linear-gradient(to bottom, 
                var(--accent-color) 0%, 
                rgba(10, 132, 255, 0.2) 50%, 
                transparent 100%);
        }

        .timeline-item {
            position: relative;
            margin-bottom: 40px;
        }

        .timeline-item:last-child {
            margin-bottom: 0;
        }

        .timeline-dot {
            position: absolute;
            left: -28.5px;
            top: 6px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #121218;
            border: 2px solid var(--accent-color);
            box-shadow: 0 0 10px rgba(10, 132, 255, 0.4);
            z-index: 1;
        }

        .timeline-card {
            background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
        }

        .timeline-card:hover {
            transform: translateY(-2px);
            background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
            border-color: rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 30px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1);
        }

        .timeline-period {
            font-size: 13px;
            color: var(--accent-color);
            font-weight: 500;
            margin-bottom: 4px;
            letter-spacing: 0.02em;
        }

        .timeline-role {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 4px;
            letter-spacing: -0.01em;
        }

        .timeline-company {
            font-size: 14px;
            color: var(--text-secondary);
            margin-bottom: 16px;
            font-weight: 400;
        }

        .timeline-points {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .timeline-point {
            font-size: 14px;
            line-height: 1.5;
            color: var(--text-secondary);
            display: flex;
            align-items: flex-start;
            gap: 12px;
        }

        .timeline-point::before {
            content: '›';
            color: var(--accent-color);
            font-weight: 600;
            font-size: 16px;
            line-height: 1.4;
        }

        .timeline-point span {
            flex: 1;
        }
      `}</style>
      <div className="experience-container">
        
        <div className="experience-header">
            <h4 className="experience-kicker">Career Path</h4>
            <h1 className="experience-title">Experience</h1>
        </div>

        <div className="timeline">
            {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-card">
                        <div className="timeline-period">{exp.period}</div>
                        <h3 className="timeline-role">{exp.role}</h3>
                        <div className="timeline-company">{exp.company}</div>
                        <ul className="timeline-points">
                            {exp.points.map((pt, i) => (
                                <li key={i} className="timeline-point">
                                    <span>{pt}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </>
  );
}
