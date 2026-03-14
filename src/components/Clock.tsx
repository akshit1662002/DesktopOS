// src/components/Clock.tsx
import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours() % 12 || 12;
  const minutes = time.getMinutes().toString().padStart(2, "0");

  // Generate 60 tick marks around the border
  const ticks = Array.from({ length: 60 }, (_, i) => {
    const angle = (i * 360) / 60;
    const isMajor = i % 5 === 0;
    return { angle, isMajor };
  });

  return (
    <div className="fixed top-12 right-4 z-[9998] select-none">
      <div
        className="relative flex items-center justify-center"
        style={{
          width: 140,
          height: 140,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px)",
          borderRadius: 32,
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        }}
      >
        {/* Tick marks */}
        {ticks.map((tick, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: "100%",
              height: "100%",
              transform: `rotate(${tick.angle}deg)`,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: tick.isMajor ? 6 : 8,
                left: "50%",
                transform: "translateX(-50%)",
                width: tick.isMajor ? 2.5 : 1.5,
                height: tick.isMajor ? 10 : 7,
                borderRadius: 999,
                background: tick.isMajor
                  ? "rgba(0,0,0,0.5)"
                  : "rgba(0,0,0,0.25)",
              }}
            />
          </div>
        ))}

        {/* Time */}
        <div
          className="font-bold text-black z-10 tracking-tight"
          style={{ fontSize: 42, lineHeight: 1 }}
        >
          {hours}:{minutes}
        </div>
      </div>
    </div>
  );
}
