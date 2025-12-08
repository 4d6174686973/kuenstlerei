import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'kurs',
  title: 'Kurs',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'altersempfehlung',
      title: 'Altersempfehlung',
      type: 'string'
    }),

    defineField({
      name: 'startDatum',
      title: 'Start Datum',
      type: 'date',
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'preis',
      title: 'Preis (€)',
      type: 'number',
      validation: Rule => Rule.min(0)
    }),

    defineField({
      name: 'beschreibung',
      title: 'Beschreibung',
      type: 'text'
    }),

    defineField({
      name: 'sessions',
      title: 'Sessions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'datum', title: 'Datum', type: 'date' },
            { name: 'uhrzeit', title: 'Uhrzeit', type: 'string' },
            { name: 'kuenstlerin', title: 'Künstlerin', type: 'string' }
          ]
        }
      ]
    }),

    defineField({
      name: 'kontakt',
      title: 'Kontakt',
      type: 'object',
      fields: [
        { name: 'handynummer', title: 'Handynummer', type: 'string' },
        { name: 'email', title: 'Email', type: 'string' },
        {
          name: 'adresse',
          title: 'Adresse',
          type: 'object',
          fields: [
            { name: 'strasse', title: 'Straße', type: 'string' },
            { name: 'plz', title: 'PLZ', type: 'string' },
            { name: 'stadt', title: 'Stadt', type: 'string' }
          ]
        }
      ]
    })
  ]
})
