import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'conditions',
  title: 'Умови участі',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Опис умов участі',
      type: 'internationalizedArrayArticle',
    }),
  ],
})
