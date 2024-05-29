import {defineType} from 'sanity'

export default defineType({
  name: 'administration',
  title: 'Адміністрація конкурсу',
  type: 'document',

  fields: [
    {
      name: 'mainBanner',
      title: 'Головний банер',
      type: 'banner',
    },
    {
      name: 'members',
      title: 'Учасники',
      type: 'array',
      of: [{type: 'membersAdministration'}],
    },
  ],
})
