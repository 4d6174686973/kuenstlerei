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
    "isFinished": (sessions[] | order(datum asc))[-1].datum < now()
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