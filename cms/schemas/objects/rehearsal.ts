import {defineField, defineType} from 'sanity'
import {IoTime} from 'react-icons/io5'

export default defineType({
  name: 'rehearsal',
  title: 'Репетиція',
  type: 'object',
  fields: [
    defineField({
      name: 'start',
      title: 'Час початку',
      type: 'timeInput',
    }),
    defineField({
      name: 'end',
      title: 'Час кінця',
      type: 'timeInput',
    }),

    defineField({
      name: 'event',
      title: 'Опис репетиції',
      type: 'internationalizedArrayArticle',
    }),
  ],
  preview: {
    select: {start: 'start', end: 'end'},
    prepare: ({start, end}) => {
      const startTime = start || ''
      const endTime = end ? `- ${end}` : ''
      return {title: `${startTime} ${endTime}`, media: IoTime}
    },
  },
})
