import { useState, useCallback } from "react";

export function useResize(initialWidth = 480, initialHeight = 320) {
  const [size, setSize] = useState({ width: initialWidth, height: initialHeight });

  const onResizeMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const startX = e.clientX;
      const startY = e.clientY;
      const startW = size.width;
      const startH = size.height;

      const onMouseMove = (moveEvent: MouseEvent) => {
        const newWidth = Math.max(280, startW + (moveEvent.clientX - startX));
        const newHeight = Math.max(200, startH + (moveEvent.clientY - startY));
        setSize({ width: newWidth, height: newHeight });
      };

      const onMouseUp = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    },
    [size]
  );

  return { size, onResizeMouseDown };
}
