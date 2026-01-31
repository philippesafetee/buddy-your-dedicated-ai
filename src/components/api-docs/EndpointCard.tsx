import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { CodeBlock } from "./CodeBlock";
import { LanguageSelector, type Language } from "./LanguageSelector";
import { cn } from "@/lib/utils";

interface EndpointCardProps {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  path: string;
  description: string;
  examples: Record<Language, string>;
  response: string;
  queryParams?: { name: string; type: string; description: string; required?: boolean }[];
  bodyParams?: { name: string; type: string; description: string; required?: boolean }[];
}

const methodColors = {
  GET: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  POST: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  PATCH: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  DELETE: "bg-red-500/20 text-red-400 border-red-500/30",
};

export function EndpointCard({
  method,
  path,
  description,
  examples,
  response,
  queryParams,
  bodyParams,
}: EndpointCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("curl");

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors text-left"
      >
        <span
          className={cn(
            "px-2.5 py-1 text-xs font-bold rounded border",
            methodColors[method]
          )}
        >
          {method}
        </span>
        <code className="text-sm font-mono text-foreground flex-1">{path}</code>
        <span className="text-sm text-muted-foreground hidden md:block max-w-md truncate">
          {description}
        </span>
        {isOpen ? (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        )}
      </button>

      {isOpen && (
        <div className="border-t border-border">
          <div className="p-4 space-y-6">
            <p className="text-muted-foreground">{description}</p>

            {queryParams && queryParams.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Paramètres de requête
                </h4>
                <div className="space-y-2">
                  {queryParams.map((param) => (
                    <div
                      key={param.name}
                      className="flex items-start gap-3 text-sm"
                    >
                      <code className="px-2 py-0.5 bg-secondary rounded text-primary font-mono">
                        {param.name}
                      </code>
                      <span className="text-muted-foreground">{param.type}</span>
                      {param.required && (
                        <span className="text-xs px-1.5 py-0.5 bg-red-500/20 text-red-400 rounded">
                          requis
                        </span>
                      )}
                      <span className="text-muted-foreground flex-1">
                        {param.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {bodyParams && bodyParams.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Corps de la requête
                </h4>
                <div className="space-y-2">
                  {bodyParams.map((param) => (
                    <div
                      key={param.name}
                      className="flex items-start gap-3 text-sm"
                    >
                      <code className="px-2 py-0.5 bg-secondary rounded text-primary font-mono">
                        {param.name}
                      </code>
                      <span className="text-muted-foreground">{param.type}</span>
                      {param.required && (
                        <span className="text-xs px-1.5 py-0.5 bg-red-500/20 text-red-400 rounded">
                          requis
                        </span>
                      )}
                      <span className="text-muted-foreground flex-1">
                        {param.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-foreground">Requête</h4>
                <LanguageSelector selected={language} onChange={setLanguage} />
              </div>
              <CodeBlock code={examples[language]} language={language} />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Réponse
              </h4>
              <CodeBlock code={response} language="json" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
