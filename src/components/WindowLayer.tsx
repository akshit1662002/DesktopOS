import { AnimatePresence } from "framer-motion";
import { useApp } from "../context/AppContext";
import AppWindow from "./AppWindow";

export default function WindowLayer() {
  const { windows } = useApp();
  return (
    <AnimatePresence>
      {windows.map((win: any) => (
        <AppWindow key={win.id} {...win} zIndex={1000}>
          {win.component}
        </AppWindow>
      ))}
    </AnimatePresence>
  );
}
