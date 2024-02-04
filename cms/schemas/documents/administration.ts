import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'administration',
  title: 'Адміністрація конкурсу',
  type: 'document',

  fields: [
    defineField({
      name: 'membersddd',
      title: 'Учасники',
      type: 'array',
      of: [{type: 'membersAdministration'}],
    }),
  ],
})
