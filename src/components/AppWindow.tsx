// src/components/AppWindow.tsx
import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";
import { useResize } from "../hooks/useResize";

type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
  position: { x: number; y: number };
  zIndex: number;
  minimized: boolean;
};

export default function AppWindow({
  id,
  title,
  children,
  position,
  zIndex,
  minimized,
}: Props) {
  const { closeWindow, focusWindow, minimizeWindow } = useApp();
  const { size, onResizeMouseDown } = useResize(480, 320);

  if (minimized) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      style={{ x: position.x, y: position.y, zIndex, width: size.width }}
      onMouseDown={() => focusWindow(id)}
      className="absolute bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
    >
      {/* Title Bar — this drives the drag */}
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 border-b border-gray-200 cursor-move select-none">
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => closeWindow(id)}
          className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors"
        />
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => minimizeWindow(id)}
          className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors"
        />
        <button
          onPointerDown={(e) => e.stopPropagation()}
          className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors"
        />
        <span className="ml-2 text-sm font-medium text-gray-600">{title}</span>
      </div>

      {/* Content — stop drag from firing inside here */}
      <motion.div
        onPointerDown={(e) => e.stopPropagation()}
        className="overflow-auto p-4"
        style={{ height: size.height }}
      >
        {children}
      </motion.div>

      {/* Resize Handle */}
      <div
        onMouseDown={onResizeMouseDown}
        onPointerDown={(e) => e.stopPropagation()}
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
        style={{
          background: "linear-gradient(135deg, transparent 50%, #aaa 50%)",
          borderBottomRightRadius: "0.75rem",
        }}
      />
    </motion.div>
  );
}
