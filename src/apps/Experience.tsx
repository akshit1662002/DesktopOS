import { portfolio } from "../data/portfolio";

export default function Experience() {
  return (
    <div className="p-6 space-y-6 text-white/80">
      {portfolio.experience.map((exp, i) => (
        <div key={i} className="relative pl-4 border-l-2 border-blue-500/50">
          <div className="absolute -left-1.5 top-1 w-2.5 h-2.5 rounded-full bg-blue-500" />
          <p className="text-xs text-blue-400 font-medium">{exp.period}</p>
          <h3 className="text-white font-semibold mt-0.5">{exp.role}</h3>
          <p className="text-sm text-white/50 mb-2">{exp.company}</p>
          <ul className="space-y-1">
            {exp.points.map((pt, j) => (
              <li key={j} className="text-xs text-white/60 flex gap-2">
                <span className="text-blue-400 mt-0.5">›</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
