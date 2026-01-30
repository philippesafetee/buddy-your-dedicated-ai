import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              À propos d'OpenClaw
            </h1>
          </div>
        </div>
      </section>

      {/* OpenClaw Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                OpenClaw est un assistant IA personnel open source ("The AI that
                actually does things"). Il s'exécute sur une machine — Mac,
                Windows, Linux — et dialogue avec l'utilisateur via WhatsApp,
                Telegram, Discord, Slack, Signal, iMessage.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Il dispose d'une mémoire persistante, peut contrôler le
                navigateur, exécuter des commandes, et s'étendre via des skills.
                Il fonctionne avec des modèles comme Claude (Anthropic) ou GPT
                (OpenAI).
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                OpenClaw doit tourner sur une machine dédiée ou une VM ; Buddy
                le déploie dans le cloud pour vous, préconfiguré avec le skill
                Buddy pour connecter l'IA à vos API.
              </p>

              <a
                href="https://openclaw.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                En savoir plus sur OpenClaw
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Buddy Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Et Buddy ?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Buddy est la plateforme qui provisionne les VMs et y déploie
              OpenClaw à la demande. Vous fournissez la config (clé IA, canal de
              communication, auth client) ; nous gérons le déploiement.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Vous gardez le contrôle : pause et destruction d'instances à tout
              moment.
            </p>
            <Link to="/signup">
              <Button size="lg" className="glow-primary">
                Créer un compte
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
