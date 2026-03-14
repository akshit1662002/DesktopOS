import { useApp } from "../context/AppContext";
import AboutMe from "../apps/AboutMe";
import Experience from "../apps/Experience";
import Projects from "../apps/Projects";
import Skills from "../apps/Skills";
import Contact from "../apps/Contact";
import Terminal from "../apps/Terminal";

// const desktopApps = [
//   { title: "About Me",   icon: "👤", folder: "/folder.png", component: <AboutMe /> },
//   { title: "Experience", icon: "💼", folder: "/folder.png",   component: <Experience /> },
//   { title: "Projects",   icon: "📁", folder: "/folder.png", component: <Projects /> },
//   { title: "Skills",     icon: "⚡", folder: "/folder.png",  component: <Skills /> },
//   { title: "Contact",    icon: "📬", folder: "/contact.png",   component: <Contact /> },
//   { title: "Terminal",   icon: "🖥️", folder: "/terminal.png",   component: <Terminal /> },
// ];

const desktopApps = [
  {
    title: "About Me",
    icon: "",
    folder: "/aboutme.png",
    component: <AboutMe />,
  },
  {
    title: "Experience",
    icon: "",
    folder: "/folder.png",
    component: <Experience />,
  },
  {
    title: "Projects",
    icon: "",
    folder: "/folder.png",
    component: <Projects />,
  },
  { title: "Skills", icon: "", folder: "/folder.png", component: <Skills /> },
  {
    title: "Contact",
    icon: "",
    folder: "/contact.png",
    component: <Contact />,
  },
  {
    title: "Terminal",
    icon: "",
    folder: "/terminal.png",
    component: <Terminal />,
  },
];

export default function Desktop() {
  const { openWindow } = useApp();

  return (
    <div
      className="flex flex-col gap-6"
      style={{ paddingTop: "40px", paddingLeft: "40px" }}
    >
      {desktopApps.map((app) => (
        <div
          key={app.title}
          onClick={() =>
            openWindow({
              title: app.title,
              icon: app.icon,
              component: app.component,
              position: {
                x: window.innerWidth / 2 - 280, // 280 = half of window width (560)
                y: window.innerHeight / 2 - 220, // 220 = half of window height (440)
              },
            })
          }
          className="flex flex-col items-center gap-1.5 cursor-pointer select-none group w-16"
        >
          <div className="relative w-14 h-14 group-hover:scale-110 transition-transform duration-150">
            <img
              src={app.folder}
              alt="folder"
              className="w-full h-full object-contain drop-shadow-lg"
            />
            <span className="absolute -bottom-1 -right-1 text-lg leading-none">
              {app.icon}
            </span>
          </div>
          <span className="text-xs  text-white font-medium text-center leading-tight drop-shadow">
            {app.title}
          </span>
        </div>
      ))}
    </div>
  );
}
