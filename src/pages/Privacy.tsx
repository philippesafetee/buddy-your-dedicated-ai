import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { publisher, siteName } from "@/data/legal";

export default function Privacy() {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Politique de confidentialité
            </h1>
            <div className="prose prose-invert max-w-none text-muted-foreground space-y-8">
              <p className="lead">
                La présente politique de confidentialité a pour objet de vous
                informer sur la manière dont {publisher.name} collecte et
                traite vos données personnelles dans le cadre de l'utilisation du
                site {siteName} et des services associés, conformément au
                Règlement (UE) 2016/679 (RGPD) et à la loi « Informatique et
                Libertés » du 6 janvier 1978 modifiée.
              </p>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  1. Responsable du traitement
                </h2>
                <p>
                  Le responsable du traitement des données personnelles est la
                  société {publisher.name}, {publisher.legalForm} au capital de{" "}
                  {publisher.capital}, dont le siège social est situé au{" "}
                  {publisher.registeredOffice}.
                </p>
                <p className="mt-4">
                  RCS : {publisher.rcs} — SIRET : {publisher.siret}
                  {publisher.vatNumber && (
                    <> — N° TVA : {publisher.vatNumber}</>
                  )}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  2. Données collectées
                </h2>
                <p>
                  Dans le cadre de l'utilisation du site {siteName}, peuvent
                  être collectées les données suivantes :
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Données d'identification (nom, prénom, adresse e-mail)</li>
                  <li>Données de connexion et de navigation (adresse IP, logs, cookies)</li>
                  <li>Données relatives à votre utilisation des services</li>
                </ul>
                <p className="mt-4">
                  Ces données sont collectées lorsque vous naviguez sur le site,
                  vous inscrivez à un service (par exemple une liste d'attente)
                  ou nous contactez.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  3. Finalités et bases légales
                </h2>
                <p>
                  Vos données personnelles sont traitées pour les finalités
                  suivantes, sur les bases légales indiquées :
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>
                    Gestion de l'accès aux services et de la relation
                    utilisateur (exécution contractuelle ou intérêt légitime)
                  </li>
                  <li>
                    Réponse à vos demandes et prise en charge de la liste
                    d'attente (exécution contractuelle)
                  </li>
                  <li>
                    Amélioration du site et des services (intérêt légitime)
                  </li>
                  <li>
                    Respect des obligations légales et réglementaires
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  4. Durée de conservation
                </h2>
                <p>
                  Les données personnelles sont conservées pour la durée
                  nécessaire à la réalisation des finalités pour lesquelles
                  elles ont été collectées, puis pour la durée des obligations
                  légales de conservation. Au-delà, elles sont supprimées ou
                  anonymisées.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  5. Destinataires et transferts
                </h2>
                <p>
                  Les données peuvent être communiquées aux prestataires
                  techniques intervenant pour le compte de {publisher.name}
                  (hébergement, outils d'analyse, publicité, etc.), dans le cadre
                  strict de leurs missions et sous contrat garantissant la
                  confidentialité et la sécurité des données. Nous recourons
                  notamment à <strong>Google (Google Ireland Limited / Google
                  LLC)</strong> pour les services Google Analytics 4 et Google
                  Ads (mesure d'audience, campagnes publicitaires, remarketing,
                  suivi des conversions). Les traitements effectués par Google
                  sont régis par leurs conditions d'utilisation et leur politique
                  de confidentialité.
                </p>
                <p className="mt-4">
                  Aucun transfert de données en dehors de l'Union européenne
                  n'est effectué sans garanties appropriées (décision
                  d'adéquation, clauses contractuelles types, etc.).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  6. Cookies et outils de mesure / publicité
                </h2>
                <p>
                  Le site {siteName} peut utiliser des cookies ou technologies
                  similaires pour le bon fonctionnement des services, la mesure
                  d'audience et l'amélioration de l'expérience utilisateur. Vous
                  pouvez configurer votre navigateur pour refuser les cookies ou
                  être informé de leur dépôt ; certaines fonctionnalités du site
                  peuvent en être affectées.
                </p>
                <p className="mt-4">
                  Nous utilisons notamment les services suivants, qui peuvent déposer
                  des cookies ou des identifiants similaires :
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>
                    <strong>Google Analytics 4 (GA4)</strong> : mesure d'audience,
                    analyse du comportement des visiteurs et des conversions (ex.
                    inscription à la liste d'attente). Les données sont traitées
                    conformément à la politique de confidentialité de Google.
                  </li>
                  <li>
                    <strong>Google Ads</strong> : diffusion de publicités ciblées
                    (recherche, display), remarketing et mesure des conversions
                    liées à nos campagnes. Les données peuvent être partagées avec
                    Google pour l'optimisation des annonces et la mesure de
                    performance.
                  </li>
                </ul>
                <p className="mt-4">
                  Ces cookies ou identifiants sont utilisés pour la mesure
                  d'audience, l'optimisation de nos campagnes publicitaires et le
                  suivi des conversions (ex. inscription à la waitlist). Conformément
                  au RGPD et à la loi « Informatique et Libertés », vous pouvez
                  refuser ou gérer ces cookies via les paramètres de votre
                  navigateur ou via un bandeau de consentement lorsque celui-ci
                  est proposé sur le site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  7. Vos droits
                </h2>
                <p>
                  Conformément au RGPD et à la loi « Informatique et Libertés »,
                  vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification des données inexactes ou incomplètes</li>
                  <li>Droit à l'effacement (« droit à l'oubli ») dans les limites prévues par la loi</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité de vos données</li>
                  <li>Droit d'opposition au traitement</li>
                  <li>Droit de retirer votre consentement à tout moment</li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse
                  indiquée dans les{" "}
                  <Link
                    to="/mentions-legales"
                    className="text-primary hover:underline"
                  >
                    mentions légales
                  </Link>
                  . Vous disposez également du droit d'introduire une réclamation
                  auprès de la CNIL (www.cnil.fr).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  8. Sécurité
                </h2>
                <p>
                  {publisher.name} met en œuvre les mesures techniques et
                  organisationnelles appropriées pour protéger vos données
                  personnelles contre tout accès non autorisé, modification,
                  divulgation ou destruction.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  9. Modifications
                </h2>
                <p>
                  Cette politique de confidentialité peut être modifiée à tout
                  moment. Toute modification sera publiée sur cette page avec une
                  date de mise à jour. Nous vous invitons à la consulter
                  régulièrement.
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
