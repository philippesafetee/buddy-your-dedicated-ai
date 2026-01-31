import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Check, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const included = [
  "VM dédiée",
  "Déploiement OpenClaw (OpenClaw)",
  "Skill Buddy (connexion à vos API avec auth client)",
  "Canaux Telegram, Slack, WhatsApp",
];

const faqs = [
  {
    question: "Qui paie la consommation IA ?",
    answer:
      "Vous ou vos clients. La clé API IA (OpenAI, Anthropic, etc.) est fournie par vous ou par votre client ; Buddy ne facture que l'infrastructure.",
  },
  {
    question: "Puis-je avoir plusieurs instances ?",
    answer:
      "Oui. Chaque instance est facturée selon la grille en vigueur (ex. 10 €/mois par instance).",
  },
  {
    question: "Quels modèles IA sont supportés ?",
    answer:
      "OpenClaw supporte Claude (Anthropic), GPT (OpenAI) et d'autres modèles. Vous fournissez la clé API du modèle de votre choix.",
  },
  {
    question: "Comment fonctionne la facturation ?",
    answer:
      "Facturation mensuelle par instance active. Vous pouvez mettre en pause ou détruire une instance à tout moment pour stopper la facturation.",
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tarification
            </h1>
            <p className="text-lg text-muted-foreground">
              Simple et prévisible.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-lg mx-auto">
            <div className="relative rounded-2xl bg-gradient-card border border-border p-8 md:p-10">
              <div className="absolute inset-0 rounded-2xl bg-primary/5" />
              <div className="relative">
                <div className="text-center mb-8">
                  <p className="text-sm text-primary font-medium mb-2">
                    Instance OpenClaw
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl md:text-6xl font-bold text-foreground">
                      10 €
                    </span>
                    <span className="text-muted-foreground">/mois</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    par instance
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {included.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <Link to="/signup" className="block">
                  <Button size="lg" className="w-full glow-primary">
                    Créer un compte
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Questions fréquentes
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
}
