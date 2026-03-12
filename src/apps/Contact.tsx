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
    <div className="p-6 space-y-4 text-white/80">
      <p className="text-sm text-white/50 leading-relaxed">
        I'm open to new opportunities and collaborations. Feel free to reach out!
      </p>

      <div className="space-y-3">
        <div
          onClick={copyEmail}
          className="flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer border border-white/8 hover:border-pink-500/40 transition-all"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <div className="flex items-center gap-3">
            <span>✉️</span>
            <div>
              <p className="text-xs text-white/40">Email</p>
              <p className="text-sm text-white">{portfolio.email}</p>
            </div>
          </div>
          <span className="text-xs text-white/30">{copied ? "✅ Copied!" : "Click to copy"}</span>
        </div>

        <a href={portfolio.github} target="_blank"
          className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/8 hover:border-white/20 transition-all"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <span>🐙</span>
          <div>
            <p className="text-xs text-white/40">GitHub</p>
            <p className="text-sm text-white">akshit1662002</p>
          </div>
        </a>

        <a href={portfolio.linkedin} target="_blank"
          className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/8 hover:border-blue-500/40 transition-all"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <span>💼</span>
          <div>
            <p className="text-xs text-white/40">LinkedIn</p>
            <p className="text-sm text-white">akshittyagi16</p>
          </div>
        </a>
      </div>
    </div>
  );
}
