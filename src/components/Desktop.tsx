import { useApp } from "../context/AppContext";
import AboutMe from "../apps/AboutMe";
import Experience from "../apps/Experience";
import Projects from "../apps/Projects";
import Skills from "../apps/Skills";
import Contact from "../apps/Contact";
import Terminal from "../apps/Terminal";

const desktopApps = [
  { title: "About Me",    icon: "👤", color: "from-purple-500 to-pink-500",   component: <AboutMe /> },
  { title: "Experience",  icon: "💼", color: "from-blue-500 to-cyan-500",     component: <Experience /> },
  { title: "Projects",    icon: "📁", color: "from-orange-500 to-yellow-500", component: <Projects /> },
  { title: "Skills",      icon: "⚡", color: "from-green-500 to-emerald-500", component: <Skills /> },
  { title: "Contact",     icon: "📬", color: "from-pink-500 to-rose-500",     component: <Contact /> },
  { title: "Terminal",    icon: "🖥️", color: "from-gray-600 to-gray-800",     component: <Terminal /> },
];

export default function Desktop() {
  const { openWindow } = useApp();

  return (
    <div className="flex flex-col gap-6 p-6 pt-8">
      {desktopApps.map((app, i) => (
        <div
          key={app.title}
          onClick={() =>
            openWindow({
              title: app.title,
              icon: app.icon,
              component: app.component,
              position: { x: 80 + i * 18, y: 60 + i * 18 },
            })
          }
          className="flex flex-col items-center gap-1.5 cursor-pointer select-none group w-16"
        >
          {/* Folder Icon */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-150`}>
            {app.icon}
          </div>
          <span className="text-xs text-white/80 text-center leading-tight drop-shadow">
            {app.title}
          </span>
        </div>
      ))}
    </div>
  );
}
