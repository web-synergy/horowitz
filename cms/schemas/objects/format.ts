import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'format',
  title: 'Формат картинки',
  type: 'object',
  fields: [
    defineField({
      name: 'width',
      title: 'Ширина',
      type: 'number',
    }),
    defineField({
      name: 'height',
      title: 'Висота',
      type: 'number',
    }),
  ],
  options: {columns: 2},
})
