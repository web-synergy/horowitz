import {defineType, defineField} from 'sanity'
import {YouTubePreview} from '../../components/YouTubePreview'

export const youtube = defineType({
  name: 'youtube',
  type: 'object',
  title: 'YouTube',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'Вставте посилання на відео',
    }),
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
  components: {
    // @ts-ignore
    preview: YouTubePreview,
  },
})
