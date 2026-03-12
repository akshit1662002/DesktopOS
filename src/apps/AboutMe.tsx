import { portfolio } from "../data/portfolio";

export default function AboutMe() {
  return (
    <div className="p-6 text-white/80 space-y-5">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-white">
          AT
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">{portfolio.name}</h1>
          <p className="text-sm text-white/50">{portfolio.role}</p>
          <p className="text-xs text-white/40 mt-0.5">📍 {portfolio.location}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-white/70 border-l-2 border-purple-500 pl-3">
        {portfolio.bio}
      </p>
      <div className="grid grid-cols-2 gap-3">
        <a href={`mailto:${portfolio.email}`}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-sm">
          ✉️ <span className="truncate">{portfolio.email}</span>
        </a>
        <a href={portfolio.github} target="_blank"
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-sm">
          🐙 GitHub
        </a>
        <a href={portfolio.linkedin} target="_blank"
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition text-sm">
          💼 LinkedIn
        </a>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-sm">
          📍 {portfolio.location}
        </div>
      </div>
    </div>
  );
}
