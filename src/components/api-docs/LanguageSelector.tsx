import { cn } from "@/lib/utils";

export type Language = "curl" | "javascript" | "python" | "go" | "php" | "ruby";

interface LanguageSelectorProps {
  selected: Language;
  onChange: (lang: Language) => void;
}

const languages: { id: Language; label: string }[] = [
  { id: "curl", label: "cURL" },
  { id: "javascript", label: "JavaScript" },
  { id: "python", label: "Python" },
  { id: "go", label: "Go" },
  { id: "php", label: "PHP" },
  { id: "ruby", label: "Ruby" },
];

export function LanguageSelector({ selected, onChange }: LanguageSelectorProps) {
  return (
    <div className="flex gap-1 bg-[#161b22] rounded-lg p-1 overflow-x-auto">
      {languages.map((lang) => (
        <button
          key={lang.id}
          onClick={() => onChange(lang.id)}
          className={cn(
            "px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap",
            selected === lang.id
              ? "bg-[#21262d] text-[#f0f6fc]"
              : "text-[#8b949e] hover:text-[#c9d1d9]"
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
