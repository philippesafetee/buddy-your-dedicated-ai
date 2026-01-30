import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Politique de confidentialité
            </h1>
            <div className="prose prose-invert max-w-none text-muted-foreground">
              <p>
                La politique de confidentialité sera ajoutée prochainement.
                Cette page est un espace réservé pour les informations relatives
                au traitement des données personnelles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
