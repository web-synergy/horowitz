import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'competitionDocument',
  type: 'document',
  title: 'Конкурс дані',

  fields: [
    defineField({
      name: 'ruls',
      title: 'Правила',
      type: 'text',
    }),
    defineField({
      name: 'facebook',
      title: 'Фото',
      type: 'image',
    }),
    defineField({
      name: 'youTube',
      title: 'YouTube',
      type: 'text',
    }),
  ],
})
