import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'rehearsal',
  title: 'Репетиція',
  type: 'object',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'datetime',
    }),

    defineField({
      name: 'events',
      title: 'Біографія',
      type: 'internationalizedArrayArticle',
    }),
  ],
})
