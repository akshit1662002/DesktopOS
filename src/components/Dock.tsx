import { useApp } from "../context/AppContext";
import Spotify from "../apps/Spotify";
import VsCode from "../apps/VsCode";
import Browser from "../apps/Browser";
import { useState } from "react";

const dockApps = [
  {
    title: "Spotify",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    component: <Spotify />,
    width: 800,
    height: 600,
  },
  {
    title: "VS Code",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    component: <VsCode />,
    width: 900,
    height: 600,
  },
  {
    title: "Chrome",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg",
    component: <Browser />,
    width: 1000,
    height: 700,
  },
];

export default function Dock() {
  const { openWindow } = useApp();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleLaunch = (app: (typeof dockApps)[0]) => {
    openWindow({
      title: app.title,
      icon: "", // Assuming the top bar shouldn't show huge icon or we can use the samex
      component: app.component,
      position: {
        x: window.innerWidth / 2 - app.width / 2,
        y: window.innerHeight / 2 - app.height / 2,
      },
    });
  };

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2  flex items-center justify-center gap-6  rounded-2xl border border-white"
      style={{
        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(25px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        padding: "5px",
      }}
      onMouseLeave={() => setHoverIndex(null)}
    >
      {dockApps.map((app, i) => {
        let scale = 1;
        let yOffset = 0;

        if (hoverIndex !== null) {
          const distance = Math.abs(hoverIndex - i);
          if (distance === 0) {
            scale = 1.6;
            yOffset = -15;
          } else if (distance === 1) {
            scale = 1.3;
            yOffset = -8;
          } else if (distance === 2) {
            scale = 1.1;
            yOffset = -3;
          }
        }

        return (
          <div
            key={app.title}
            onClick={() => handleLaunch(app)}
            onMouseEnter={() => setHoverIndex(i)}
            className="relative flex flex-col items-center cursor-pointer will-change-transform"
            style={{
              width: "52px", // slightly bigger icon area
              height: "52px",
              transform: `scale(${scale}) translateY(${yOffset}px)`,
              transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
              transformOrigin: "bottom",
            }}
          >
            {/* Tooltip */}
            <div
              className={`absolute -top-12 px-3 py-1 bg-[rgba(20,20,28,0.85)] text-white text-xs rounded-md shadow-lg pointer-events-none transition-opacity duration-200 border border-white/10 ${
                hoverIndex === i ? "opacity-100" : "opacity-0"
              }`}
              style={{ backdropFilter: "blur(10px)" }}
            >
              {app.title}
              <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[rgba(20,20,28,0.85)]" />
            </div>

            <img
              src={app.icon}
              alt={app.title}
              className="w-full h-full object-contain filter drop-shadow-md hover:drop-shadow-xl"
            />
            {/* Active dot indicator */}
            {/* <div className="absolute -bottom-2 w-1 h-1 rounded-full bg-white/50" /> */}
          </div>
        );
      })}
    </div>
  );
}
