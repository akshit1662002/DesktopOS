import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type AppWindow = {
  id: string;
  title: string;
  component: ReactNode;
  position: { x: number; y: number };
  zIndex: number;
  minimized: boolean;
};

type AppContextType = {
  windows: AppWindow[];
  openWindow: (win: Omit<AppWindow, "id" | "zIndex" | "minimized">) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [windows, setWindows] = useState<AppWindow[]>([]);

  const openWindow = (win: Omit<AppWindow, "id" | "zIndex" | "minimized">) =>
    setWindows((prev) => [
      ...prev,
      { ...win, id: crypto.randomUUID(), zIndex: prev.length + 1, minimized: false },
    ]);

  const closeWindow = (id: string) =>
    setWindows((prev) => prev.filter((w) => w.id !== id));

  const focusWindow = (id: string) =>
    setWindows((prev) => {
      const max = Math.max(0, ...prev.map((w) => w.zIndex));
      return prev.map((w) => (w.id === id ? { ...w, zIndex: max + 1 } : w));
    });

  const minimizeWindow = (id: string) =>
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: !w.minimized } : w))
    );

  return (
    <AppContext.Provider value={{ windows, openWindow, closeWindow, focusWindow, minimizeWindow }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext)!;
