import { Bot, ArrowLeftRight, Building2, FileText, CheckCircle2 } from "lucide-react";

export function BuddyHubSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
            <ArrowLeftRight className="h-3 w-3" />
            Collaboration inter-assistants
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Buddy Hub : Des assistants qui collaborent
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vos assistants peuvent se connecter de façon sécurisée à d'autres assistants 
            pour automatiser leurs interactions. Un écosystème d'IA qui communique pour vous.
          </p>
        </div>

        {/* Collaboration diagram */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
          
          <div className="relative rounded-2xl bg-gradient-card border border-border p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Client A */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 mx-auto">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Entreprise A</h3>
                  <p className="text-sm text-muted-foreground">Fournisseur</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Bot className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-foreground">Assistant de A</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <FileText className="h-3 w-3 mt-0.5 shrink-0" />
                    <span>Crée une vente #V-2024</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3 w-3 mt-0.5 text-green-500 shrink-0" />
                    <span>Pousse vers l'ERP de A</span>
                  </div>
                </div>
              </div>

              {/* Connection */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="hidden md:flex items-center gap-4">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <ArrowLeftRight className="h-5 w-5 text-primary" />
                  </div>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
                </div>
                <div className="md:hidden flex items-center gap-2">
                  <div className="w-px h-8 bg-gradient-to-b from-transparent to-primary/50" />
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <ArrowLeftRight className="h-4 w-4 text-primary rotate-90" />
                  </div>
                  <div className="w-px h-8 bg-gradient-to-t from-transparent to-primary/50" />
                </div>
                <div className="bg-secondary rounded-lg px-4 py-2 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Échange sécurisé</p>
                  <p className="text-sm font-medium text-primary">Buddy Hub</p>
                </div>
              </div>

              {/* Client B */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 mx-auto">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Entreprise B</h3>
                  <p className="text-sm text-muted-foreground">Client</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Bot className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-foreground">Assistant de B</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <FileText className="h-3 w-3 mt-0.5 shrink-0" />
                    <span>Reçoit l'achat #A-2024</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3 w-3 mt-0.5 text-green-500 shrink-0" />
                    <span>Pousse vers l'ERP de B</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                <span className="text-foreground font-medium">Exemple :</span> L'assistant de l'Entreprise A 
                crée une vente et l'envoie automatiquement à l'assistant de l'Entreprise B via le Buddy Hub. 
                Ce dernier génère l'achat correspondant et l'intègre directement dans l'ERP de son client. 
                <span className="text-primary"> Zéro ressaisie, zéro erreur.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
