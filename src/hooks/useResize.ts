import { useState, useCallback } from "react";

export function useResize(initialWidth = 700, initialHeight = 600) {
  const [size, setSize] = useState({
    width: initialWidth,
    height: initialHeight,
  });

  const onResizeMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const startX = e.clientX;
      const startY = e.clientY;
      const startW = size.width;
      const startH = size.height;

      const onMouseMove = (ev: MouseEvent) => {
        setSize({
          width: Math.max(320, startW + (ev.clientX - startX)),
          height: Math.max(240, startH + (ev.clientY - startY)),
        });
      };
      const onMouseUp = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    },
    [size],
  );

  return { size, onResizeMouseDown };
}
