import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'winners',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Імʼя',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'champion',
      title: 'Отриманий титул',
      type: 'internationalizedArrayString',
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
      title: 'name[0].value',
      img: 'img',
    },
    prepare: ({title, img}) => ({
      title: title,
      media: img,
    }),
  },
})
