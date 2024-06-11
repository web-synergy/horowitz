import {defineField, defineType} from 'sanity'
import {IoTime} from 'react-icons/io5'

export default defineType({
  name: 'rehearsal',
  title: 'Репетиція',
  type: 'object',
  fields: [
    defineField({
      name: 'time',
      title: 'Час',
      type: 'string',
    }),

    defineField({
      name: 'event',
      title: 'Опис репетиції',
      type: 'internationalizedArrayText',
    }),
  ],
  preview: {
    select: {time: 'time'},
    prepare: ({time}) => {
      const startTime = time || ''
      return {title: startTime, media: IoTime}
    },
  },
})
