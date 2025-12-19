import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "neu",
  title: "Neu",
  type: "document",
  fields: [
    defineField({
      name: "titel",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "titel", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishDate",
      title: "Veröffentlichungsdatum",
      type: "datetime",
      initialValue: () => new Date().toISOString(), // Setzt automatisch das aktuelle Datum
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "eventDate",
      title: "Eventdatum (Optional)",
      description: "Falls die News ein bestimmtes Event betrifft",
      type: "date",
    }),
    defineField({
      name: "kategorien",
      title: "Kategorien",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: {
        layout: "tags", // Zeigt die Kategorien im Studio als kompakte Tags an
      },
    }),
    defineField({
      name: "verlinkung",
      title: "Link zu Projekt oder Kurs",
      description: "Wähle einen bestehenden Kurs oder ein Projekt aus",
      type: "reference",
      to: [{ type: "kursprogramm" }, { type: "projekte" }],
    }),
    defineField({
      name: "beschreibung",
      title: "Beschreibung",
      type: "text",
    }),
    defineField({
      name: "fotogalerie",
      title: "Fotogalerie",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Bildunterschrift",
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "titel",
      subtitle: "publishDate",
      media: "fotogalerie.0", // Zeigt das erste Bild der Galerie als Thumbnail im Studio
    },
  },
});