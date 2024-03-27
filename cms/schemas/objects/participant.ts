import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'participant',
  title: 'Учасник',
  type: 'object',
  fields: [
    defineField({
      name: 'avatar',
      title: 'Фото',
      type: 'picture',
    }),
    defineField({
      name: 'name',
      title: "Прізвище та ім'я",
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'country',
      title: 'Країна',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'birthday',
      title: 'Дата народження',
      type: 'date',
    }),

    defineField({
      name: 'biography',
      title: 'Біографія',
      type: 'internationalizedArrayArticle',
    }),
    defineField({
      name: 'program',
      title: 'Програма',
      type: 'internationalizedArrayArticle',
    }),
  ],
})
