export default {
  name: 'projekte',
  title: 'Projekte',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Projektname',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'beschreibung',
      title: 'Beschreibung',
      type: 'text',
    },
    {
      name: 'projektpartner',
      title: 'Projektpartner',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'partner',
          title: 'Partner',
          fields: [
            {
              name: 'partnerName',
              title: 'Name des Partners',
              type: 'string',
            },
            {
              name: 'partnerLink',
              title: 'Website Link',
              type: 'url',
            },
            {
              name: 'partnerLogo',
              title: 'Logo',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
};