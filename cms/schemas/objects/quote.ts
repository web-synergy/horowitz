import {defineType, defineField} from 'sanity'

const quote = defineType({
  name: 'quote',
  type: 'object',

  fields: [
    defineField({
      name: 'quote',
      title: 'Цитата',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Автор',
      type: 'string',
    }),
  ],
})

export default quote
