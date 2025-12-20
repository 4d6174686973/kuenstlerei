// src/lib/sanity.queries.ts

export const KURSE_LIST_QUERY = `
  *[_type == "kursprogramm" && defined(slug.current)] | order(name asc) {
    _id,
    name,
    altersempfehlung,
    wochentag,
    kursleitung,
    preis,
    "slug": slug.current,
    "image": image.asset->url,
    "sessions": sessions[] | order(datum asc),
    "firstDate": (sessions[] | order(datum asc))[0].datum,
    "lastDate": (sessions[] | order(datum asc))[-1].datum,
    "isFinished": (sessions[] | order(datum asc))[-1].datum < now(),
  }
`;

export const KURS_DETAIL_QUERY = `
  *[_type == "kursprogramm" && slug.current == $slug] {
    _id,
    name,
    "image": image.asset->url,
    altersempfehlung,
    wochentag,
    kursleitung,
    preis,
    beschreibung,
    "sessions": sessions[] | order(datum asc) {
      datum,
      startUhrzeit,
      endUhrzeit
    },
    "firstDate": (sessions[] | order(datum asc))[0].datum,
    "lastDate": (sessions[] | order(datum asc))[-1].datum,
    "isFinished": (sessions[] | order(datum asc))[-1].datum < now(),
    "verknuepfteNews": *[_type == "neu" && verlinkung._ref == ^._id] | order(publishDate desc) {
      _id,
      titel,
      "slug": slug.current,
      publishDate,
      kategorien,
      "imageUrl": image.asset->url
    }
  }[0]
`;

export const PROJEKTE_LIST_QUERY = `
  *[_type == "projekte"] | order(name asc) {
    _id,
    name,
    untertitel,
    "slug": slug.current,
    "image": image.asset->url
  }
`;

export const PROJEKT_DETAIL_QUERY = `
  *[_type == "projekte" && slug.current == $slug][0] {
    _id,
    name,
    untertitel,
    beschreibung,
    image,
    projektpartner[] {
      partnerName,
      partnerLink,
      "logoUrl": partnerLogo.asset->url
    },
    "verknuepfteNews": *[_type == "neu" && verlinkung._ref == ^._id] | order(publishDate desc) {
      _id,
      titel,
      "slug": slug.current,
      publishDate,
      kategorien
    }
  }
`;

export const TEAM_QUERY = `
  *[_type == "team"] | order(_createdAt asc) {
    _id,
    name,
    title1,
    title2,
    handynummer,
    email,
    "fotoUrl": foto.asset->url
  }
`;

export const NEU_LIST_QUERY = `
  *[_type == "neu"] | order(publishDate desc) {
    _id,
    titel,
    "slug": slug.current,
    publishDate,
    eventDate,
    beschreibung,
    kategorien,
    "image": image.asset->url,
    "verbindungName": verlinkung->name,
    "verbindungTyp": verlinkung->_type
  }
`;

export const NEU_DETAIL_QUERY = `
  *[_type == "neu" && slug.current == $slug][0] {
    titel,
    publishDate,
    eventDate,
    kategorien,
    beschreibung,
    "galerie": fotogalerie[].asset->url,
    "referenz": verlinkung-> {
      name,
      "slug": slug.current,
      _type
    }
  }
`;