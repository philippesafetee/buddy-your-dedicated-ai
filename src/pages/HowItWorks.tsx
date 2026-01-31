import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { StepCard } from "@/components/ui/step-card";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Créez un compte Buddy",
    description: "Inscrivez-vous sur Buddy et accédez au dashboard de gestion.",
  },
  {
    number: 2,
    title: "Demandez la création d'une instance",
    description:
      "Via l'API ou le dashboard, envoyez la configuration : clé API IA (OpenAI, Anthropic, etc.), token du canal de communication (Telegram, Slack ou WhatsApp — fourni par votre client), et les informations d'authentification que l'IA utilisera pour appeler votre API (clés propres à ce client). Le skill Buddy est activé par défaut pour connecter l'IA à vos API.",
  },
  {
    number: 3,
    title: "Buddy provisionne la VM et déploie OpenClaw",
    description:
      "Nous déployons OpenClaw (OpenClaw) sur une machine virtuelle avec votre configuration. L'IA est prête à discuter avec votre client et à appeler votre API.",
  },
  {
    number: 4,
    title: "Votre client parle à son IA",
    description:
      "Votre client utilise Telegram, Slack ou WhatsApp pour discuter avec son IA. L'IA appelle votre API en étant authentifiée avec ses clés — une IA dédiée à ce client.",
  },
  {
    number: 5,
    title: "Gérez vos instances",
    description:
      "Vous pouvez mettre en pause ou détruire une instance — ou toutes — à tout moment depuis le dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comment ça marche
            </h1>
            <p className="text-lg text-muted-foreground">
              En quelques étapes, vous déployez une IA dédiée pour chacun de vos
              clients. L'IA tourne sur une VM, parle à vos clients via leur
              canal préféré, et appelle votre API avec leurs clés.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
              Les étapes
            </h2>
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <StepCard {...step} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Prêt à lancer votre première instance ?
            </h2>
            <p className="text-muted-foreground mb-10">
              Créez un compte et accédez au dashboard pour commencer.
            </p>
            <Link to="/signup">
              <Button size="lg" className="glow-primary text-base px-8">
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
