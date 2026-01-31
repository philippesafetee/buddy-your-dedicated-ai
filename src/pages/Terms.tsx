import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { publisher, siteName } from "@/data/legal";

export default function Terms() {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Conditions Générales d'Utilisation
            </h1>
            <div className="prose prose-invert max-w-none text-muted-foreground space-y-8">
              <p className="lead">
                Les présentes Conditions Générales d'Utilisation (CGU) ont pour
                objet de définir les modalités et conditions d'utilisation des
                services proposés par {publisher.name} sur le site {siteName},
                ainsi que les droits et obligations des parties.
              </p>
              <p>
                L'accès et l'utilisation du site et des services sont subordonnés
                à l'acceptation et au respect des présentes CGU. En accédant au
                site {siteName}, l'utilisateur accepte sans réserve les
                présentes conditions.
              </p>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  1. Objet et éditeur
                </h2>
                <p>
                  Le site {siteName} est édité par la société {publisher.name},{" "}
                  {publisher.legalForm} au capital de {publisher.capital}, dont
                  le siège social est situé au {publisher.registeredOffice}, RCS{" "}
                  {publisher.rcs}, SIRET {publisher.siret}.
                </p>
                <p className="mt-4">
                  Pour toute question relative aux présentes CGU, vous pouvez
                  consulter les{" "}
                  <Link
                    to="/mentions-legales"
                    className="text-primary hover:underline"
                  >
                    mentions légales
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  2. Définitions
                </h2>
                <p>
                  <strong>« Site »</strong> désigne le site {siteName} et
                  l'ensemble des pages et contenus accessibles.
                </p>
                <p className="mt-4">
                  <strong>« Service »</strong> désigne l'ensemble des services et
                  fonctionnalités proposés par {publisher.name} via le site{" "}
                  {siteName}.
                </p>
                <p className="mt-4">
                  <strong>« Utilisateur »</strong> désigne toute personne
                  physique ou morale accédant au site ou utilisant les services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  3. Accès aux services
                </h2>
                <p>
                  L'accès au site {siteName} est libre. L'utilisation de certains
                  services peut être conditionnée à une inscription ou à
                  l'acceptation de conditions particulières.
                </p>
                <p className="mt-4">
                  {publisher.name} s'efforce d'assurer la disponibilité du site
                  et des services 24h/24 et 7j/7, sans pouvoir toutefois en
                  garantir la continuité. L'accès peut être interrompu pour des
                  opérations de maintenance ou pour tout autre motif.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  4. Obligations de l'utilisateur
                </h2>
                <p>
                  L'utilisateur s'engage à utiliser le site et les services dans
                  le respect des lois en vigueur et des présentes CGU. Il
                  s'engage notamment à ne pas utiliser le site à des fins
                  illicites ou de manière susceptible de porter atteinte aux
                  droits de tiers ou au bon fonctionnement du service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  5. Propriété intellectuelle
                </h2>
                <p>
                  L'ensemble des éléments du site {siteName} (textes, graphismes,
                  logiciels, marques, bases de données, etc.) sont protégés par
                  les dispositions du Code de propriété intellectuelle et
                  appartiennent à {publisher.name} ou font l'objet d'une
                  autorisation d'utilisation. Toute reproduction ou exploitation
                  non autorisée peut constituer une contrefaçon.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  6. Données personnelles
                </h2>
                <p>
                  Les données personnelles collectées dans le cadre de
                  l'utilisation du site sont traitées conformément au RGPD et à
                  la loi « Informatique et Libertés ». Pour plus d'informations,
                  consultez notre{" "}
                  <Link
                    to="/confidentialite"
                    className="text-primary hover:underline"
                  >
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  7. Limitation de responsabilité
                </h2>
                <p>
                  {publisher.name} s'efforce d'assurer l'exactitude des
                  informations diffusées sur le site mais ne peut en garantir
                  l'exhaustivité. {publisher.name} ne pourra être tenue
                  responsable des dommages directs ou indirects résultant de
                  l'accès ou de l'utilisation du site et des services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  8. Modifications
                </h2>
                <p>
                  {publisher.name} se réserve le droit de modifier les présentes
                  CGU à tout moment. Les modifications prendront effet dès leur
                  publication sur le site. La poursuite de l'utilisation du site
                  après publication vaut acceptation des nouvelles conditions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  9. Droit applicable et juridiction
                </h2>
                <p>
                  Les présentes CGU sont régies par le droit français. En cas
                  de litige, les tribunaux français seront seuls compétents.
                </p>
              </section>

              <p className="text-sm mt-12 pt-8 border-t border-border">
                Dernière mise à jour : janvier 2026.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
