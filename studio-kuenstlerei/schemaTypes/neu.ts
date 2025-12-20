import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "neu",
  title: "Neu",
  type: "document",
  fields: [
    defineField({ name: "titel", title: "Titel", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "titel", maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: "publishDate", title: "Datum", type: "datetime", initialValue: () => new Date().toISOString(), validation: (Rule) => Rule.required() }),
    defineField({ name: "image", title: "Thumbnail", type: "image", options: { hotspot: true } }),
    defineField({ name: "eventDate", title: "Eventdatum", type: "date", description: "Optional" }),
    defineField({ 
      name: "kategorien", title: "Kategorien", type: "array", 
      of: [defineArrayMember({ type: "string" })], 
      options: { layout: "tags" } 
    }),
    defineField({ 
      name: "verlinkung", title: "Link", type: "reference", 
      to: [{ type: "kursprogramm" }, { type: "projekte" }],
      description: "Bezug zu Kurs oder Projekt"
    }),
    defineField({ name: "beschreibung", title: "Beschreibung", type: "text" }),
    defineField({
      name: "fotogalerie", title: "Fotogalerie", type: "array",
      of: [
        defineArrayMember({
          type: "image", options: { hotspot: true },
          fields: [{ name: "caption", type: "string", title: "Bildunterschrift" }]
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "titel", subtitle: "publishDate", media: "image" },
  },
});