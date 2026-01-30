import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Conditions Générales d'Utilisation
            </h1>
            <div className="prose prose-invert max-w-none text-muted-foreground">
              <p>
                Les conditions générales d'utilisation seront ajoutées
                prochainement. Cette page est un espace réservé pour les CGU du
                service Buddy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
