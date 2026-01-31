/**
 * Legal and company information (same publisher/host as safetee.io).
 * Update these values to match the legal notices on www.safetee.io.
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
  legalForm: "SAS",
  capital: "À compléter depuis safetee.io",
  rcs: "À compléter depuis safetee.io",
  siret: "À compléter depuis safetee.io",
  vatNumber: "À compléter depuis safetee.io",
  registeredOffice: "À compléter depuis safetee.io",
};

export const host: Host = {
  name: "Même hébergeur que safetee.io",
  address: "À compléter depuis safetee.io",
};

export const publicationDirector: PublicationDirector = {
  name: "À compléter depuis safetee.io",
};

export const siteName = "Buddy";
export const siteUrl = "https://buddy.example";
