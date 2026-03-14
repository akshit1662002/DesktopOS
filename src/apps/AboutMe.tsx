export default function AboutMe() {
  return (
    <>
      <style>{`
        .aboutme-container {
            --text-primary: #ffffff;
            --text-secondary: rgba(235, 235, 245, 0.6);
            --text-tertiary: rgba(235, 235, 245, 0.3);
            color: var(--text-primary);
            display: flex;
            flex: 1;
            height: 100%;
            width: 100%;
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            position: relative;
        }

        .aboutme-left-pane {
            width: 45%;
            padding: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        .aboutme-image-frame {
            width: 100%;
            height: 100%;
            border-radius: 16px;
            padding: 8px;
            background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.2) 100%);
            box-shadow: 
                inset 0 2px 10px rgba(0,0,0,0.3),
                inset 0 0 0 1px rgba(255,255,255,0.03),
                0 10px 20px rgba(0,0,0,0.2);
            position: relative;
            overflow: hidden;
        }

        .aboutme-portrait-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
            filter: contrast(1.05) brightness(0.9);
        }

        .aboutme-image-overlay {
            position: absolute;
            bottom: 8px;
            left: 8px;
            right: 8px;
            height: 50%;
            background: linear-gradient(to top, rgba(18, 18, 20, 0.9) 0%, transparent 100%);
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            pointer-events: none;
        }

        .aboutme-right-pane {
            width: 55%;
            padding: 60px 80px 60px 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .aboutme-kicker {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: var(--text-tertiary);
            font-weight: 600;
            margin-bottom: 12px;
        }

        .aboutme-name {
            font-size: 42px;
            font-weight: 600;
            letter-spacing: -0.02em;
            line-height: 1.1;
            margin-bottom: 8px;
            background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .aboutme-role {
            font-size: 20px;
            font-weight: 400;
            color: var(--text-secondary);
            margin-bottom: 32px;
            letter-spacing: -0.01em;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .aboutme-role::after {
            content: '';
            height: 1px;
            width: 40px;
            background: rgba(255,255,255,0.1);
            display: block;
        }

        .aboutme-bio {
            font-size: 15px;
            line-height: 1.6;
            color: var(--text-secondary);
            margin-bottom: 48px;
            font-weight: 400;
            max-width: 420px;
        }

        .aboutme-bio span {
            color: var(--text-primary);
            font-weight: 500;
        }

        .aboutme-social-links {
            display: flex;
            gap: 16px;
            margin-top: auto;
        }

        .aboutme-social-icon {
            width: 40px;
            height: 40px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-secondary);
            transition: all 0.2s ease;
            text-decoration: none;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .aboutme-social-icon:hover {
            background: rgba(255, 255, 255, 0.08);
            color: var(--text-primary);
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(0,0,0,0.2);
            border-color: rgba(255, 255, 255, 0.15);
        }

        .aboutme-social-icon svg {
            width: 18px;
            height: 18px;
            fill: currentColor;
        }

        .aboutme-system-label {
            position: absolute;
            bottom: 24px;
            right: 24px;
            font-size: 10px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            color: rgba(255,255,255,0.2);
            letter-spacing: 0.05em;
        }
      `}</style>
      <div className="aboutme-container">
        <section className="aboutme-left-pane">
            <div className="aboutme-image-frame">
                {/* <img src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" alt="Akshit Tyagi Portrait Workspace" className="aboutme-portrait-img" /> */}
                <img src="/akshit-tyagi-image.jpg" alt="Akshit Tyagi" className="aboutme-portrait-img" />

                <div className="aboutme-image-overlay"></div>
            </div>
        </section>

        <section className="aboutme-right-pane">
            <h4 className="aboutme-kicker">About Me</h4>
            <h1 className="aboutme-name">Akshit Tyagi</h1>
            <h2 className="aboutme-role">Software Engineer</h2>
            
            <p className="aboutme-bio">
                Software Engineer with 1.5+ years of experience building scalable web applications. Specializing in <span>React.js</span>, <span>TypeScript</span>, and <span>Node.js</span>. Experienced in developing reusable UI components, centralized state management with Redux, and RESTful APIs, striving for pixel-perfect modern UI development.
            </p>

            <div className="aboutme-social-links">
                <a href="https://github.com/" className="aboutme-social-icon" aria-label="GitHub">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                </a>
                <a href="https://linkedin.com/" className="aboutme-social-icon" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                </a>
                <a href="#" className="aboutme-social-icon" aria-label="Twitter">
                    <svg viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                </a>
                <a href="mailto:tyagiakshit100@gmail.com" className="aboutme-social-icon" aria-label="Email">
                    <svg viewBox="0 0 24 24">
                         <path d="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm0 2.574l-12-8.725v12.438h24v-12.438l-12 8.725z"></path>
                    </svg>
                </a>
            </div>
        </section>

      
      </div>
    </>
  );
}
