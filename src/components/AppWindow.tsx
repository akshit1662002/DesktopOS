import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { useResize } from "../hooks/useResize";
import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  icon: string;
  children: ReactNode;
  position: { x: number; y: number };
  zIndex: number;
  minimized: boolean;
};

export default function AppWindow({
  id,
  title,
  icon,
  children,
  position,
  zIndex,
  minimized,
}: Props) {
  const { closeWindow, focusWindow, minimizeWindow } = useApp();
  const { size, onResizeMouseDown } = useResize(700, 600);

  if (minimized) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      onMouseDown={() => focusWindow(id)}
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        zIndex,
        width: size.width,
        backdropFilter: "blur(20px)",
      }}
      className="rounded-xl overflow-hidden shadow-2xl border border-white/10"
    >
      {/* Title Bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 h-10 cursor-move select-none  pl-4"
        style={{
          background: "rgba(40,40,50,0.95)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          paddingLeft: "12px",
        }}
      >
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => closeWindow(id)}
          className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
        />
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => minimizeWindow(id)}
          className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors"
        />
        <button
          onPointerDown={(e) => e.stopPropagation()}
          className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors"
        />
        <span className="ml-3 text-sm font-medium text-white/70 flex items-center gap-1.5">
          <span>{icon}</span> {title}
        </span>
      </div>

      {/* Content */}
      <motion.div
        onPointerDown={(e) => e.stopPropagation()}
        className="overflow-auto"
        style={{ height: size.height, background: "rgba(18,18,24,0.97)" }}
      >
        {children}
      </motion.div>

      {/* Resize Handle */}
      <div
        onMouseDown={onResizeMouseDown}
        onPointerDown={(e) => e.stopPropagation()}
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize opacity-40 hover:opacity-80"
        style={{
          background: "linear-gradient(135deg, transparent 50%, #aaa 50%)",
          borderBottomRightRadius: "0.75rem",
        }}
      />
    </motion.div>
  );
}
