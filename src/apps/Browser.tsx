import { useState, useEffect, useRef } from "react";

const HOME_URL = "https://www.google.com/webhp?igu=1";
const HOME_DISPLAY_URL = "https://www.google.com";

export default function Browser() {
  const [url, setUrl] = useState(HOME_URL);
  const [inputUrl, setInputUrl] = useState(HOME_DISPLAY_URL);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Restore last visited URL from localStorage
  useEffect(() => {
    const lastUrl = localStorage.getItem("chrome-url");
    const lastDisplay = localStorage.getItem("chrome-display-url");
    if (lastUrl) {
      setUrl(lastUrl);
      setInputUrl(lastDisplay || lastUrl);
    }
  }, []);

  const storeUrl = (url: string, display: string) => {
    localStorage.setItem("chrome-url", url);
    localStorage.setItem("chrome-display-url", display);
  };

  const refresh = () => {
    if (iframeRef.current) iframeRef.current.src += "";
  };

  const goHome = () => {
    setUrl(HOME_URL);
    setInputUrl(HOME_DISPLAY_URL);
    storeUrl(HOME_URL, HOME_DISPLAY_URL);
  };

  const navigate = (raw: string) => {
    let trimmed = raw.trim();
    if (!trimmed) return;

    if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) {
      trimmed = "https://" + trimmed;
    }

    let finalUrl = encodeURI(trimmed);
    let displayUrl = finalUrl;

    if (finalUrl.includes("google.com")) {
      finalUrl = HOME_URL;
      displayUrl = HOME_DISPLAY_URL;
    }

    setUrl(finalUrl);
    setInputUrl(displayUrl);
    storeUrl(finalUrl, displayUrl);
  };

  return (
    <div className="flex flex-col gap-2 h-full p-2">
      {/* URL Bar */}
      <div className="flex items-center gap-2">
        {/* Refresh */}
        <button
          onClick={refresh}
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          title="Refresh"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582M20 20v-5h-.581M5.635 19A9 9 0 1 0 4.582 9H4"
            />
          </svg>
        </button>

        {/* Home */}
        <button
          onClick={goHome}
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          title="Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m4-8v8m-6 0h8"
            />
          </svg>
        </button>

        {/* Input */}
        <input
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && navigate(inputUrl)}
          className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Enter URL..."
          type="url"
          spellCheck={false}
          autoComplete="off"
        />

        {/* Go */}
        <button
          onClick={() => navigate(inputUrl)}
          className="px-3 py-1.5 text-sm bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors"
        >
          Go
        </button>
      </div>

      {/* iframe */}
      <iframe
        ref={iframeRef}
        src={url}
        className="w-full flex-1 rounded-lg border border-gray-200"
        title="Browser"
      />
    </div>
  );
}
