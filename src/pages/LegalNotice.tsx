import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  publisher,
  host,
  publicationDirector,
  siteName,
} from "@/data/legal";

export default function LegalNotice() {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Mentions légales
            </h1>
            <div className="prose prose-invert max-w-none text-muted-foreground space-y-8">
              <p className="lead">
                Conformément aux dispositions des articles 6-III et 19 de la loi
                n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie
                numérique, dite L.C.E.N., les présentes mentions légales
                s'appliquent au site {siteName} et à l'ensemble des services
                proposés par l'éditeur.
              </p>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  1. Éditeur du site
                </h2>
                <p>
                  Le site {siteName} est édité par la société {publisher.name},{" "}
                  {publisher.legalForm}
                  {publisher.capital ? `, au capital de ${publisher.capital}` : ""}.
                </p>
                <ul className="list-none space-y-1 mt-4">
                  <li>RCS : {publisher.rcs}</li>
                  <li>SIRET : {publisher.siret}</li>
                  {publisher.vatNumber && (
                    <li>Numéro de TVA : {publisher.vatNumber}</li>
                  )}
                  <li>Siège social : {publisher.registeredOffice}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  2. Hébergeur
                </h2>
                <p>
                  Le site {siteName} est hébergé par :
                </p>
                <p className="mt-2">
                  <strong>{host.name}</strong>
                  <br />
                  {host.address}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  3. Directeur de la publication
                </h2>
                <p>
                  Le directeur de la publication du site est :{" "}
                  {publicationDirector.name}.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  4. Propriété intellectuelle
                </h2>
                <p>
                  L'ensemble du contenu du site {siteName} (textes, graphismes,
                  logiciels, photographies, images, sons, plans, noms, logos,
                  marques, créations et œuvres protégeables, bases de données,
                  etc.), ainsi que le site lui-même, sont soumis au droit français
                  et international relatif à la propriété intellectuelle et
                  appartiennent à {publisher.name} ou font l'objet d'une
                  autorisation d'utilisation.
                </p>
                <p className="mt-4">
                  Toute reproduction, représentation, modification, publication,
                  adaptation de tout ou partie des éléments du site, quel que
                  soit le moyen ou le procédé utilisé, est interdite sans
                  l'autorisation écrite préalable de {publisher.name}.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  5. Données personnelles
                </h2>
                <p>
                  Les données personnelles collectées sur le site {siteName} sont
                  traitées conformément au Règlement (UE) 2016/679 (RGPD) et à la
                  loi « Informatique et Libertés » du 6 janvier 1978 modifiée.
                </p>
                <p className="mt-4">
                  Pour plus d'informations sur le traitement de vos données et
                  vos droits, consultez notre{" "}
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
                  6. Cookies
                </h2>
                <p>
                  Le site {siteName} peut être amené à utiliser des cookies ou
                  technologies similaires pour le bon fonctionnement des services
                  et l'amélioration de l'expérience utilisateur. Les modalités
                  d'utilisation des cookies sont détaillées dans la politique de
                  confidentialité.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  7. Limitation de responsabilité
                </h2>
                <p>
                  {publisher.name} s'efforce d'assurer l'exactitude et la mise à
                  jour des informations diffusées sur le site {siteName}.
                  Toutefois, {publisher.name} ne peut garantir l'exactitude,
                  la précision ou l'exhaustivité des informations mises à
                  disposition.
                </p>
                <p className="mt-4">
                  Le site peut contenir des liens vers des sites tiers.
                  {publisher.name} n'exerce aucun contrôle sur ces sites et
                  décline toute responsabilité quant à leur contenu.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
                  8. Droit applicable et juridiction compétente
                </h2>
                <p>
                  Les présentes mentions légales sont régies par le droit
                  français. En cas de litige, les tribunaux français seront seuls
                  compétents.
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
