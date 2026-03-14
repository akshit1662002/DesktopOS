import { portfolio } from "../data/portfolio";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <style>{`
        .contact-container {
            --text-primary: #ffffff;
            --text-secondary: rgba(235, 235, 245, 0.6);
            --text-tertiary: rgba(235, 235, 245, 0.3);
            color: var(--text-primary);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;
            height: 100%;
            width: 100%;
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            position: relative;
            padding: 40px;
        }

        .contact-header {
            text-align: center;
            margin-bottom: 48px;
        }

        .contact-kicker {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: var(--text-tertiary);
            font-weight: 600;
            margin-bottom: 12px;
        }

        .contact-title {
            font-size: 42px;
            font-weight: 600;
            letter-spacing: -0.02em;
            line-height: 1.1;
            margin-bottom: 16px;
            background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .contact-subtitle {
            font-size: 16px;
            line-height: 1.6;
            color: var(--text-secondary);
            font-weight: 400;
            max-width: 420px;
            margin: 0 auto;
        }

        .contact-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 16px;
            width: 100%;
            max-width: 500px;
        }

        .contact-card {
            border-radius: 16px;
            background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
            border: 1px solid rgba(255, 255, 255, 0.05);
            padding: 24px;
            display: flex;
            align-items: center;
            gap: 20px;
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            position: relative;
            overflow: hidden;
            cursor: pointer;
        }

        .contact-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .contact-card:hover {
            transform: translateY(-4px);
            border-color: rgba(255, 255, 255, 0.15);
            box-shadow: 0 12px 30px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
            background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
        }

        .contact-card:hover::before {
            opacity: 1;
        }

        .contact-icon-wrapper {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-primary);
            flex-shrink: 0;
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
        }

        .contact-card:hover .contact-icon-wrapper {
            background: rgba(255, 255, 255, 0.1);
        }

        .contact-icon-wrapper svg {
            width: 24px;
            height: 24px;
            fill: currentColor;
        }

        .contact-info {
            flex: 1;
            z-index: 1;
        }

        .contact-label {
            font-size: 13px;
            color: var(--text-secondary);
            margin-bottom: 4px;
            font-weight: 500;
        }

        .contact-value {
            font-size: 15px;
            color: var(--text-primary);
            font-weight: 600;
            letter-spacing: -0.01em;
        }

        .contact-action {
            font-size: 12px;
            color: var(--text-tertiary);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            transition: color 0.2s ease;
            z-index: 1;
        }

        .contact-card:hover .contact-action {
            color: rgba(255, 255, 255, 0.8);
        }

        .contact-action.success {
            color: #34C759;
        }
      `}</style>
      <div className="contact-container">
        
        <div className="contact-header">
            <h4 className="contact-kicker">Get in Touch</h4>
            <h1 className="contact-title">Let's Connect</h1>
            <p className="contact-subtitle">
                I'm currently exploring new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
        </div>

        <div className="contact-grid">
            
            <div className="contact-card" onClick={copyEmail}>
                <div className="contact-icon-wrapper">
                    <svg viewBox="0 0 24 24">
                         <path d="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm0 2.574l-12-8.725v12.438h24v-12.438l-12 8.725z"></path>
                    </svg>
                </div>
                <div className="contact-info">
                    <div className="contact-label">Email</div>
                    <div className="contact-value">{portfolio.email}</div>
                </div>
                <div className={`contact-action ${copied ? 'success' : ''}`}>
                    {copied ? "COPIED!" : "COPY"}
                </div>
            </div>

            <a href={portfolio.github} target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon-wrapper">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                </div>
                <div className="contact-info">
                    <div className="contact-label">GitHub</div>
                    <div className="contact-value">akshit1662002</div>
                </div>
                <div className="contact-action">VISIT</div>
            </a>

            <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon-wrapper">
                    <svg viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                </div>
                <div className="contact-info">
                    <div className="contact-label">LinkedIn</div>
                    <div className="contact-value">akshittyagi16</div>
                </div>
                <div className="contact-action">VISIT</div>
            </a>

        </div>
      </div>
    </>
  );
}
