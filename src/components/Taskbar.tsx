import { useApp } from "../context/AppContext";

export default function Taskbar() {
  const { windows, focusWindow, minimizeWindow } = useApp();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-11 flex items-center px-4 gap-2 z-[9999]"
      style={{ background: "rgba(20,20,28,0.85)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      {windows.length === 0 && (
        <span className="text-white/20 text-xs">No open windows</span>
      )}
      {windows.map((win) => (
        <button
          key={win.id}
          onClick={() => {
            if (win.minimized) minimizeWindow(win.id);
            focusWindow(win.id);
          }}
          className={`px-3 py-1 rounded-md text-xs font-medium transition-all
            ${win.minimized ? "bg-white/5 text-white/30" : "bg-white/10 text-white/70"}
            hover:bg-white/20 hover:text-white`}
        >
          {win.title}
        </button>
      ))}
    </div>
  );
}
