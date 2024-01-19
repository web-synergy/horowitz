import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'literatureItem',
  title: 'Елемент літератури',
  type: 'object',
  fields: [
    defineField({
      name: 'description',
      title: 'Опис',
      type: 'string',
    }),
    // Добавьте другие поля, если необходимо
  ],
})
