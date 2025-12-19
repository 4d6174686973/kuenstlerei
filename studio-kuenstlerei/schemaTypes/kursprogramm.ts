import { defineType, defineField } from "sanity";

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
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: "altersempfehlung", title: "Altersempfehlung", type: "string" }),
    defineField({ name: "startDatum", title: "Start Datum", type: "date", validation: (Rule) => Rule.required() }),
    defineField({ name: "preis", title: "Preis (€)", type: "number" }),
    defineField({ name: "beschreibung", title: "Beschreibung", type: "text" }),
    defineField({
      name: "sessions",
      title: "Sessions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "datum",
              title: "Datum",
              type: "date",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "startUhrzeit",
              title: "Startzeit",
              type: "string",
              description: "HH:MM Format, z.B. 14:00",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "endUhrzeit",
              title: "Endzeit",
              type: "string",
              description: "HH:MM Format, z.B. 16:00",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "kuenstlerin",
              title: "Künstlerin",
              type: "string",
            },
          ],
        },
      ],
    }),
  ]
});
