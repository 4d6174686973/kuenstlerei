import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "angebote",
  title: "Angebote",
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
      description: "Eindeutiger Bezeichner für die URL",
      options: { source: "titel", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Vorschaubild (Thumbnail)",
      type: "image",
      description: "Dieses Bild wird in der Übersicht angezeigt.",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
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
              name: "alt",
              type: "string",
              title: "Alternativtext",
              description: "Wichtig für Barrierefreiheit und SEO.",
            },
          ],
        }),
      ],
      options: {
        layout: "grid",
      },
    }),
  ],
});