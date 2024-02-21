import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'administration',
  title: 'Адміністрація конкурсу',
  type: 'document',

  fields: [
    defineField({
      name: 'mainBanner',
      title: 'Головний банер',
      type: 'banner',
    }),
    defineField({
      name: 'members',
      title: 'Учасники',
      type: 'array',
      of: [{type: 'membersAdministration'}],
    }),
  ],
})
