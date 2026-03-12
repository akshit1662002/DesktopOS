import { portfolio } from "../data/portfolio";

const categoryColors: Record<string, string> = {
  Frontend: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  Backend: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  Styling: "from-pink-500/20 to-rose-500/20 border-pink-500/30",
  "State Management": "from-yellow-500/20 to-orange-500/20 border-yellow-500/30",
  "Forms & Validation": "from-green-500/20 to-emerald-500/20 border-green-500/30",
  Databases: "from-red-500/20 to-orange-500/20 border-red-500/30",
  ORM: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30",
  Tools: "from-gray-500/20 to-slate-500/20 border-gray-500/30",
};

export default function Skills() {
  return (
    <div className="p-6 space-y-4 text-white/80">
      {Object.entries(portfolio.skills).map(([category, skills]) => (
        <div key={category}>
          <p className="text-xs text-white/40 uppercase tracking-widest mb-2">{category}</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className={`text-sm px-3 py-1 rounded-lg border bg-gradient-to-r ${categoryColors[category] ?? "from-white/5 to-white/5 border-white/10"} text-white/80`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
