import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'settings',
  title: 'Налаштування',
  type: 'document',

  fields: [
    defineField({
      name: 'logo',
      title: 'Логотип',
      type: 'image',
    }),
  ],
})
