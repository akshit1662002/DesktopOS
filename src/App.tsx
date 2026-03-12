import { AppProvider } from "./context/AppContext";
import Desktop from "./components/Desktop";
import WindowLayer from "./components/WindowLayer";
import Taskbar from "./components/Taskbar";
import Clock from "./components/Clock";
import CalendarWidget from "./components/CalendarWidget";

export default function App() {
  return (
    <AppProvider>
      <div className="relative w-screen h-screen overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
         <source src="/bg-web.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.45)", zIndex: 1 }} />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            zIndex: 2,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Widgets — top right */}
        <div
          className="fixed flex items-start gap-3"
          style={{ top: 16, right: 190, zIndex: 9998 }}
        >
          <CalendarWidget />
          <Clock />
        </div>

        {/* All UI */}
        <div className="relative" style={{ zIndex: 3 }}>
          <Desktop />
          <WindowLayer />
          <Taskbar />
        </div>

      </div>
    </AppProvider>
  );
}
