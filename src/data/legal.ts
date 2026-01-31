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
  name: "Buddy",
  legalForm: "société par actions simplifiée",
  capital: "",
  rcs: "",
  siret: "",
  vatNumber: "",
  registeredOffice: "",
};

export const host: Host = {
  name: publisher.name,
  address: publisher.registeredOffice,
};

export const publicationDirector: PublicationDirector = {
  name: "",
};

export const siteName = "Buddy";
export const siteUrl = "https://buddy.example";
