import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { FeatureCard } from "@/components/ui/feature-card";
import { Server, Shield, Key, ArrowRight, Zap, MessageSquare, Bot } from "lucide-react";
import { WaitlistModal } from "@/components/WaitlistModal";

const features = [
  {
    icon: Server,
    title: "Vous ne payez que l'infrastructure",
    description:
      "La consommation IA est assumée par vos clients ou par vous. Buddy facture uniquement la VM et la plateforme. Pas d'hébergement IA, pas de surprise sur la facture.",
  },
  {
    icon: Shield,
    title: "Un OpenClaw par client",
    description:
      "Chaque client a son IA dédiée sur une instance séparée. Vous isolez les périmètres et la sécurité : un client, une VM, une IA.",
  },
  {
    icon: Key,
    title: "Votre API, authentifiée avec les clés de votre client",
    description:
      "L'IA déployée appelle votre API métier avec les informations d'authentification du client préconfigurées. Une IA qui consomme votre API, mais authentifiée avec les clés de votre client.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
        </div>

        <div className="container relative py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
              <Bot className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Propulsé par OpenClaw
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Déployez une IA dédiée à chacun de vos clients,{" "}
              <span className="text-gradient">connectée à vos API.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Offrez à vos clients une IA dédiée, autonome et sécurisée, accessible directement depuis Telegram, Slack ou WhatsApp. En s'appuyant sur vos API, elle automatise les usages, facilite l'accès à votre service et augmente la valeur délivrée à vos clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <WaitlistModal>
                <Button size="lg" className="w-full sm:w-auto glow-primary text-base px-8">
                  S'inscrire sur la liste d'attente
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </WaitlistModal>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base px-8">
                <Link to="/documentation">Voir la doc API</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative grid */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
      </section>

      {/* Integration Preview */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
                <Zap className="h-3 w-3" />
                Intégration rapide
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Connectez vos canaux préférés
              </h2>
              <p className="text-muted-foreground mb-8">
                Telegram, Slack, WhatsApp — vos clients interagissent avec leur
                IA sur la plateforme de leur choix. L'IA est déjà configurée
                pour appeler votre API avec les bons identifiants.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Telegram", "Slack", "WhatsApp"].map((channel) => (
                  <div
                    key={channel}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border"
                  >
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {channel}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl bg-gradient-card border border-border p-6 md:p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-secondary/50 rounded-lg rounded-tl-none p-3">
                      <p className="text-sm text-foreground">
                        Bonjour ! Je suis votre assistant IA dédié. Comment
                        puis-je vous aider aujourd'hui ?
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-primary/10 rounded-lg rounded-tr-none p-3">
                      <p className="text-sm text-foreground">
                        Peux-tu vérifier le statut de ma dernière commande ?
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-secondary/50 rounded-lg rounded-tl-none p-3">
                      <p className="text-sm text-foreground">
                        Je vérifie cela pour vous... Votre commande #4521 a été
                        expédiée hier et arrivera demain. 📦
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pourquoi Buddy ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une solution simple pour déployer des assistants IA dédiés à chacun
              de vos clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Prêt à déployer ?
            </h2>
            <p className="text-muted-foreground mb-10">
              Inscrivez-vous sur la liste d'attente pour être parmi les premiers à accéder à Buddy.
            </p>
            <WaitlistModal>
              <Button size="lg" className="glow-primary text-base px-8">
                S'inscrire sur la liste d'attente
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </WaitlistModal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
