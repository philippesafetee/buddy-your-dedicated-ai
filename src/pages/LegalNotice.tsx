import { Layout } from "@/components/layout/Layout";

export default function LegalNotice() {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Mentions légales
            </h1>
            <div className="prose prose-invert max-w-none text-muted-foreground">
              <p>
                Les mentions légales seront ajoutées prochainement. Cette page
                est un espace réservé pour les informations légales obligatoires
                concernant l'éditeur du site, l'hébergeur, et les conditions
                d'utilisation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
