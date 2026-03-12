import { useApp } from "../context/AppContext";
import AboutMe from "../apps/AboutMe";
import Experience from "../apps/Experience";
import Projects from "../apps/Projects";
import Skills from "../apps/Skills";
import Contact from "../apps/Contact";
import Terminal from "../apps/Terminal";

const desktopApps = [
  { title: "About Me",   icon: "👤", component: <AboutMe /> },
  { title: "Experience", icon: "💼", component: <Experience /> },
  { title: "Projects",   icon: "📁", component: <Projects /> },
  { title: "Skills",     icon: "⚡", component: <Skills /> },
  { title: "Contact",    icon: "📬", component: <Contact /> },
  { title: "Terminal",   icon: "🖥️", component: <Terminal /> },
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
          {/* macOS Folder Icon */}
          <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-150">
            <img
              src="/folder.png"
              alt="folder"
              className="w-full h-full object-contain drop-shadow-lg"
            />
            {/* Emoji badge bottom-right */}
            <span className="absolute -bottom-1 -right-1 text-lg leading-none">
              {app.icon}
            </span>
          </div>

          {/* Label */}
          <span className="text-xs text-white/80 text-center leading-tight drop-shadow">
            {app.title}
          </span>
        </div>
      ))}
    </div>
  );
}
