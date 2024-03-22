import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'schedule',
  title: 'Розклад',
  type: 'object',
  fields: [
    defineField({
      name: 'lecture',
      title: 'Лектор',
      type: 'reference',
      to: [{type: 'professor'}],
      options: {
        filter: ({document}) => {
          const year = document.year
          console.log('year', year)
          return {
            filter: '*[_type]',
          }
        },
      },
    }),
  ],
})
