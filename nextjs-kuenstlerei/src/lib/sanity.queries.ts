// src/lib/sanity.queries.ts

export const KURSE_LIST_QUERY = `
  *[_type == "kursprogramm" && defined(slug.current)] | order(startDatum asc) {
    _id,
    name,
    altersempfehlung,
    startDatum,
    preis,
    "slug": slug.current
  }
`;

export const KURS_DETAIL_QUERY = `
  *[_type == "kursprogramm" && slug.current == $slug] {
    _id,
    name,
    altersempfehlung,
    startDatum,
    preis,
    beschreibung,
    sessions[] {
      datum,
      startUhrzeit,
      endUhrzeit,
      kuenstlerin
    },
  }[0]
`;