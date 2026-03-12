import { portfolio } from "../data/portfolio";

export default function Projects() {
  return (
    <div className="p-6 space-y-4 text-white/80">
      {portfolio.projects.map((proj, i) => (
        <div key={i} className="rounded-xl p-4 border border-white/8 hover:border-orange-500/40 transition-all"
          style={{ background: "rgba(255,255,255,0.03)" }}>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-white">{proj.name}</h3>
            <div className="flex gap-2">
              {proj.github && (
                <a href={proj.github} target="_blank"
                  className="text-xs px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 transition">
                  GitHub
                </a>
              )}
              {proj.live && (
                <a href={proj.live} target="_blank"
                  className="text-xs px-2 py-0.5 rounded bg-orange-500/30 hover:bg-orange-500/50 transition">
                  Live
                </a>
              )}
            </div>
          </div>
          <p className="text-sm text-white/55 mt-1 leading-relaxed">{proj.desc}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {proj.tech.map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
