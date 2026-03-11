import { useApp } from "../context/AppContext";

export default function Taskbar() {
  const { windows, focusWindow, minimizeWindow } = useApp();

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-black/30 backdrop-blur-md border-t border-white/10 flex items-center px-4 gap-2 z-[9999]">
      {windows.length === 0 && (
        <span className="text-white/40 text-xs">No open windows</span>
      )}
      {windows.map((win) => (
        <button
          key={win.id}
          onClick={() => {
            if (win.minimized) minimizeWindow(win.id);
            focusWindow(win.id);
          }}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all
            ${win.minimized ? "bg-white/10 text-white/50" : "bg-white/20 text-white"}
            hover:bg-white/30`}
        >
          <span>{win.title}</span>
          {win.minimized && (
            <span className="text-xs opacity-50">(minimized)</span>
          )}
        </button>
      ))}
    </div>
  );
}
