import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'projekte',
  title: 'Projekte',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Projektname', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'name', maxLength: 96}, validation: (Rule) => Rule.required()}),
    defineField({name: 'image', title: 'Kursbild (Thumbnail)', type: 'image', options: {hotspot: true}}),
    defineField({name: 'untertitel', title: 'Untertitel', type: 'text'}),
    defineField({name: 'beschreibung', title: 'Beschreibung', type: 'text'}),
    defineField({name: 'projektpartner', title: 'Projektpartner', type: 'array',
      of: [
        defineArrayMember({type: 'object', name: 'partner', title: 'Partner',
          fields: [
            defineField({name: 'partnerName', title: 'Name des Partners', type: 'string'}),
            defineField({name: 'partnerLink', title: 'Website Link', type: 'url'}),
            defineField({name: 'partnerLogo', title: 'Logo', type: 'image', options: {hotspot: true}}),
          ],
        }),
      ],
    }),
  ],
});