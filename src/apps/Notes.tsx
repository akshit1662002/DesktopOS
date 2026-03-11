import { useState } from "react";

export default function Notes() {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col gap-2 h-full">
      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
        Notes
      </p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing your notes..."
        className="flex-1 w-full resize-none rounded-lg border border-gray-200 p-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
        rows={8}
      />
      <div className="text-right text-xs text-gray-300">{text.length} chars</div>
    </div>
  );
}
