import { useState } from "react";

export default function Browser() {
  const [url, setUrl] = useState("https://posthog.com");
  const [inputUrl, setInputUrl] = useState("https://posthog.com");

  const handleNavigate = () => setUrl(inputUrl);

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex gap-2">
        <input
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleNavigate()}
          className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Enter URL..."
        />
        <button
          onClick={handleNavigate}
          className="px-3 py-1.5 text-sm bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors"
        >
          Go
        </button>
      </div>
      <iframe
        src={url}
        className="w-full rounded-lg border border-gray-200"
        style={{ height: "100%" }}
        title="Browser"
      />
    </div>
  );
}
