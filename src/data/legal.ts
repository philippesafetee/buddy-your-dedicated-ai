/**
 * Legal and company information (publisher and host).
 */

export interface Publisher {
  name: string;
  legalForm: string;
  capital?: string;
  rcs: string;
  siret: string;
  vatNumber?: string;
  registeredOffice: string;
}

export interface Host {
  name: string;
  address: string;
}

export interface PublicationDirector {
  name: string;
}

export const publisher: Publisher = {
  name: "Safetee",
  legalForm: "société par actions simplifiée",
  capital: "100 000 euros",
  rcs: "941301871, Paris",
  siret: "94130187100013",
  vatNumber: "FR12941301871",
  registeredOffice:
    "144 Avenue Charles De Gaulles, 92200 Neuilly-Sur-Seine, France",
};

export const host: Host = {
  name: publisher.name,
  address: publisher.registeredOffice,
};

export const publicationDirector: PublicationDirector = {
  name: "Philippe Bridant",
};

export const siteName = "Buddy";
export const siteUrl = "https://buddy.example";
