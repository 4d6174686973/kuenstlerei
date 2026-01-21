import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "kursprogramm",
  title: "Kursprogramm",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "Eindeutiger Bezeichner für die URL, z.B. 'malen-fuer-kinder'",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({name: 'image', title: 'Kursbild (Thumbnail)', type: 'image', options: {hotspot: true}}),
    defineField({ name: "altersempfehlung", title: "Altersempfehlung", type: "string", placeholder: "z.B. 7-9 Jahre" }),
    defineField({ name: "preis", title: "Preis (€)", type: "number" }),
    defineField({ 
      name: "wochentag", 
      title: "Wochentag", 
      type: "string",
      options: {
        list: [
          { title: "Montag", value: "Montag" },
          { title: "Dienstag", value: "Dienstag" },
          { title: "Mittwoch", value: "Mittwoch" },
          { title: "Donnerstag", value: "Donnerstag" },
          { title: "Freitag", value: "Freitag" },
          { title: "Samstag", value: "Samstag" },
          { title: "Sonntag", value: "Sonntag" },
        ],
      }
    }),
    defineField({ name: "kursleitung", title: "Kursleitung", type: "string"}),
    defineField({ name: "beschreibung", title: "Beschreibung", type: "text" }),
    defineField({
      name: "sessions",
      title: "Sessions",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "session",
          fields: [
            { name: "datum", title: "Datum", type: "date", placeholder: "z.B. 2025-12-19", validation: (Rule) => Rule.required() },
            { name: "startUhrzeit", title: "Startzeit", type: "string", placeholder: "z.B. 14:00", validation: (Rule) => Rule.required() },
            { name: "endUhrzeit", title: "Endzeit", type: "string", placeholder: "z.B. 16:00", validation: (Rule) => Rule.required() }
          ],
          preview: {
            select: { title: "datum", subtitle: "startUhrzeit" }
          }
        }),
      ],
    }),
  ]
});