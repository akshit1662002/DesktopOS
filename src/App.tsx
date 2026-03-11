import { AppProvider } from "./context/AppContext";
import Desktop from "./components/Desktop";
import WindowLayer from "./components/WindowLayer";
import Taskbar from "./components/Taskbar";

export default function App() {
  return (
    <AppProvider>
      <div className="relative w-screen h-screen bg-gradient-to-br from-orange-400 to-pink-500 overflow-hidden">
        <Desktop />
        <WindowLayer />
        <Taskbar />
      </div>
    </AppProvider>
  );
}
