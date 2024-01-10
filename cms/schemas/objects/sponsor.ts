import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sponsor',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Імʼя',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Посилання',
      type: 'url',
    }),
    defineField({
      name: 'img',
      title: 'Додати зображення',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      img: 'img',
    },
    prepare: ({title, img}) => ({
      title: title,
      media: img,
    }),
  },
})
