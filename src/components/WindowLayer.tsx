import { AnimatePresence } from "framer-motion";
import { useApp } from "../context/AppContext";
import AppWindow from "./AppWindow";

export default function WindowLayer() {
  const { windows } = useApp();

  return (
    <AnimatePresence>
      {windows.map((win) => (
        <AppWindow key={win.id} {...win}>
          {win.component}
        </AppWindow>
      ))}
    </AnimatePresence>
  );
}
