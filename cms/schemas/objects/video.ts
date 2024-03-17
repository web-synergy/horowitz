import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Відео',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'link',
      title: 'Посилання на відео',
      type: 'url',
    }),
    defineField({
      name: 'img',
      title: 'Додати постер',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title[0].value',
    },
    prepare: ({title}) => ({
      title: title,
    }),
  },
})
