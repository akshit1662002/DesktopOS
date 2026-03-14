import { useState, useEffect } from "react";

export default function MenuBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeStr = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const dateStr = time.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 flex items-center justify-between select-none "
      style={{
        height: 28,
        background: "transparent",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        zIndex: 99999,
        borderBottom: "none",
        paddingLeft: "5px",
        paddingRight: "5px",
      }}
    >
      {/* Left — Apple logo + menu items */}
      <div className="flex items-center gap-4">
        {/* Apple logo */}
        <img src="/apple-logo.png" alt="logo" className="h-6 w-6 " />

        {/* Menu items */}
        {["Finder", "File", "Edit", "View", "Go", "Window", "Help"].map(
          (item) => (
            <span
              key={item}
              className="text-white font-medium cursor-default hover:bg-white/20 px-2 py-0.5 rounded transition-colors"
              style={{ fontSize: 13 }}
            >
              {item}
            </span>
          ),
        )}
      </div>

      {/* Right — date & time */}
      <div className="flex items-center gap-3 ">
        <span className="text-white" style={{ fontSize: 13 }}>
          {dateStr}
        </span>
        <span className="text-white font-medium" style={{ fontSize: 13 }}>
          {timeStr}
        </span>
      </div>
    </div>
  );
}
