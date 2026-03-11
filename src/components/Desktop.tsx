// src/components/Desktop.tsx
import { useApp } from "../context/AppContext";
import Notes from "../apps/Notes";
import Browser from "../apps/Browser";

const desktopApps = [
  { title: "Notes", icon: "📝", component: <Notes /> },
  { title: "Browser", icon: "🌐", component: <Browser /> },
];

export default function Desktop() {
  const { openWindow } = useApp();

  return (
    <div className="flex gap-6 p-6">
      {desktopApps.map((app) => (
        <div
          key={app.title}
          onDoubleClick={() =>          
            openWindow({
              title: app.title,
              component: app.component,
              position: { x: 190, y: 100 },
            })
          }
          className="flex flex-col items-center gap-1 cursor-pointer select-none hover:opacity-80 transition-opacity"
        >
          <span className="text-4xl">{app.icon}</span>
          <span className="text-xs text-white drop-shadow">{app.title}</span>
        </div>
      ))}
    </div>
  );
}
