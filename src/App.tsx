import { AppProvider } from "./context/AppContext";
import Desktop from "./components/Desktop";
import WindowLayer from "./components/WindowLayer";
import Clock from "./components/Clock";
import CalendarWidget from "./components/CalendarWidget";
import MenuBar from "./components/MenuBar";

export default function App() {
  return (
    <AppProvider>
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src="/bg-image-black.jpg"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
        <MenuBar /> {/* 👈 add at top */}
        {/* Dark overlay */}
        {/* <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.3)", zIndex: 1 }} /> */}
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            zIndex: 2,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Widgets — top right */}
        <div
          className="fixed flex items-start gap-3 "
          style={{ top: 50, right: 190, zIndex: 2 }}
        >
          <CalendarWidget />
          <Clock />
        </div>
        {/* All UI */}
        <div className="relative" style={{ zIndex: 3 }}>
          <Desktop />
          <WindowLayer />
          {/* <Taskbar /> */}
        </div>
      </div>
    </AppProvider>
  );
}
