import { useState, useRef, useEffect } from "react";
import { portfolio } from "../data/portfolio";

const commands: Record<string, string> = {
  help: "Available commands: help, whoami, skills, projects, experience, contact, clear",
  whoami: `${portfolio.name} — ${portfolio.role} based in ${portfolio.location}`,
  skills: Object.entries(portfolio.skills).map(([k, v]) => `${k}: ${v.join(", ")}`).join("\n"),
  projects: portfolio.projects.map((p) => `• ${p.name} — ${p.tech.join(", ")}`).join("\n"),
  experience: portfolio.experience.map((e) => `• ${e.role} @ ${e.company} (${e.period})`).join("\n"),
  contact: `Email: ${portfolio.email}\nGitHub: ${portfolio.github}\nLinkedIn: ${portfolio.linkedin}`,
};

type Line = { type: "input" | "output" | "error"; text: string };

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: `Welcome to Akshit's Terminal 👋` },
    { type: "output", text: `Type "help" to see available commands.` },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter") return;
    const cmd = input.trim().toLowerCase();
    const newLines: Line[] = [...lines, { type: "input", text: `$ ${input}` }];

    if (cmd === "clear") {
      setLines([]);
    } else if (commands[cmd]) {
      setLines([...newLines, { type: "output", text: commands[cmd] }]);
    } else {
      setLines([...newLines, { type: "error", text: `Command not found: ${cmd}. Type "help".` }]);
    }
    setInput("");
  };

  return (
    <div className="p-4 font-mono text-sm h-full flex flex-col">
      <div className="flex-1 overflow-auto space-y-1 mb-3">
        {lines.map((line, i) => (
          <div
            key={i}
            className={
              line.type === "input" ? "text-green-400" :
              line.type === "error" ? "text-red-400" :
              "text-white/70"
            }
            style={{ whiteSpace: "pre-wrap" }}
          >
            {line.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="flex items-center gap-2 border-t border-white/10 pt-3">
        <span className="text-green-400">$</span>
        <input
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="flex-1 bg-transparent outline-none text-white caret-green-400"
          placeholder="type a command..."
        />
      </div>
    </div>
  );
}
