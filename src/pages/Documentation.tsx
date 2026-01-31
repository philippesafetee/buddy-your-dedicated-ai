import { Layout } from "@/components/layout/Layout";
import { EndpointCard } from "@/components/api-docs/EndpointCard";
import { apiSections } from "@/data/api-endpoints";
import { Button } from "@/components/ui/button";
import { WaitlistModal } from "@/components/WaitlistModal";
import { ArrowRight, Book, Code, Key, Shield } from "lucide-react";

export default function Documentation() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <Code className="h-3 w-3" />
              API Reference
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Documentation API
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              API REST pour gérer vos instances OpenClaw, vos spécifications OpenAPI, 
              et l'authentification. Base URL: <code className="px-2 py-0.5 bg-secondary rounded text-primary">https://api.buddy.example/v1</code>
            </p>
            <div className="flex flex-wrap gap-4">
              <WaitlistModal>
                <Button size="lg" className="glow-primary">
                  Obtenir une clé API
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </WaitlistModal>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Info */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground mb-6">Authentification</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Key className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">API Key (M2M)</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Pour les intégrations machine-to-machine. Utilisez le header Authorization.
              </p>
              <code className="block p-3 bg-[#0d1117] rounded text-sm text-[#c9d1d9] font-mono">
                Authorization: Bearer YOUR_API_KEY
              </code>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">JWT Keycloak</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Pour le dashboard et les applications frontend via OIDC.
              </p>
              <code className="block p-3 bg-[#0d1117] rounded text-sm text-[#c9d1d9] font-mono">
                Authorization: Bearer ACCESS_TOKEN
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="py-12">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Book className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Endpoints</h2>
          </div>

          <div className="space-y-12">
            {apiSections.map((section) => (
              <div key={section.title} id={section.title.toLowerCase().replace(/\s+/g, "-")}>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground">{section.description}</p>
                </div>
                <div className="space-y-3">
                  {section.endpoints.map((endpoint) => (
                    <EndpointCard key={endpoint.id} {...endpoint} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Error Codes */}
      <section className="py-12 border-t border-border">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground mb-6">Codes d'erreur</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Code</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-4"><code className="text-primary">400</code></td>
                  <td className="py-3 px-4 text-muted-foreground">Bad Request – Erreur de validation</td>
                </tr>
                <tr>
                  <td className="py-3 px-4"><code className="text-primary">401</code></td>
                  <td className="py-3 px-4 text-muted-foreground">Unauthorized – Clé API invalide ou JWT expiré</td>
                </tr>
                <tr>
                  <td className="py-3 px-4"><code className="text-primary">403</code></td>
                  <td className="py-3 px-4 text-muted-foreground">Forbidden – Compte désactivé ou quota dépassé</td>
                </tr>
                <tr>
                  <td className="py-3 px-4"><code className="text-primary">404</code></td>
                  <td className="py-3 px-4 text-muted-foreground">Not Found – Ressource introuvable</td>
                </tr>
                <tr>
                  <td className="py-3 px-4"><code className="text-primary">409</code></td>
                  <td className="py-3 px-4 text-muted-foreground">Conflict – Ressource déjà existante ou état invalide</td>
                </tr>
                <tr>
                  <td className="py-3 px-4"><code className="text-primary">422</code></td>
                  <td className="py-3 px-4 text-muted-foreground">Unprocessable Entity – Règle métier non respectée</td>
                </tr>
                <tr>
                  <td className="py-3 px-4"><code className="text-primary">500</code></td>
                  <td className="py-3 px-4 text-muted-foreground">Internal Server Error – Erreur serveur</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Prêt à intégrer Buddy ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Inscrivez-vous sur la liste d'attente pour obtenir vos clés API et commencer à déployer des instances OpenClaw.
          </p>
          <WaitlistModal>
            <Button size="lg" className="glow-primary">
              S'inscrire sur la liste d'attente
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </WaitlistModal>
        </div>
      </section>
    </Layout>
  );
}
