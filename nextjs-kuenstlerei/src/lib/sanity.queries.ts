// src/lib/sanity.queries.ts

export const KURSE_LIST_QUERY = `
  *[_type == "kurs" && defined(slug.current)] | order(startDatum asc) {
    _id,
    name,
    altersempfehlung,
    startDatum,
    preis,
    "slug": slug.current
  }
`;

export const KURS_DETAIL_QUERY = `
  *[_type == "kurs" && slug.current == $slug] {
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
    kontakt {
      handynummer,
      email,
      adresse {
        strasse,
        plz,
        stadt
      }
    }
  }[0]
`;