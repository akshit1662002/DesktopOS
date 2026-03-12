import { useMemo } from "react";

export default function CalendarWidget() {
  const today = new Date();
  const month = today.toLocaleString("en-US", { month: "long" }).toUpperCase();
//   const year = today.getFullYear();
  const currentDate = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const days = ["S", "M", "T", "W", "T", "F", "S"];

  const cells = useMemo(() => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const result = [];
    for (let i = 0; i < firstDay; i++) result.push(null);
    for (let i = 1; i <= daysInMonth; i++) result.push(i);
    return result;
  }, [currentMonth, currentYear]);

  return (
    <div
      style={{
        width: 220,
        background: "rgba(40,40,44,0.88)",
        backdropFilter: "blur(20px)",
        borderRadius: 24,
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        padding: "14px 16px",
      }}
    >
      {/* Month */}
      <p
        className="font-bold mb-2"
        style={{ color: "#e8574a", fontSize: 13, letterSpacing: 1 }}
      >
        {month}
      </p>

      {/* Day headers */}
      <div className="grid grid-cols-7 mb-1">
        {days.map((d, i) => (
          <div
            key={i}
            className="text-center font-semibold"
            style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Date cells */}
      <div className="grid grid-cols-7 gap-y-0.5">
        {cells.map((day, i) => (
          <div key={i} className="flex items-center justify-center" style={{ height: 26 }}>
            {day && (
              <div
                className="flex items-center justify-center w-6 h-6 rounded-full"
                style={{
                  fontSize: 12,
                  fontWeight: day === currentDate ? 700 : 400,
                  background: day === currentDate ? "#e8574a" : "transparent",
                  color:
                    day === currentDate
                      ? "#fff"
                      : "rgba(255,255,255,0.85)",
                }}
              >
                {day}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
