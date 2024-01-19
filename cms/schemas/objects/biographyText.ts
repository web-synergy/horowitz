import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'biographyText',
  title: 'Текст биографии',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Текст',
      type: 'internationalizedArrayText',
    }),
    // Добавьте другие поля, если необходимо
  ],

  preview: {
    select: {
      title: 'text[0].value',
    },
    prepare: ({title}) => ({
      title: title,
    }),
  },
})
