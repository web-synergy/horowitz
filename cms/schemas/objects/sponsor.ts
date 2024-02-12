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
      name: 'size',
      title: 'Висота',
      type: 'number',
    }),
    defineField({
      name: 'img',
      title: 'Додати зображення',
      type: 'internationalizedArrayImage',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'img',
    },
    prepare: ({title, image}) => ({
      title: title,
      media: image[0].value,
    }),
  },
})
