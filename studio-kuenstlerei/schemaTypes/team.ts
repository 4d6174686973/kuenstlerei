import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true }
    }),

    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'title1',
      title: 'Titel 1',
      type: 'string'
    }),

    defineField({
      name: 'title2',
      title: 'Titel 2',
      type: 'string'
    }),

    defineField({
      name: 'handynummer',
      title: 'Handynummer',
      type: 'string'
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string'
    })
  ]
})
