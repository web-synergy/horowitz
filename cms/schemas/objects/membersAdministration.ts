import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'membersAdministration',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Імʼя',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'position',
      title: 'Посада',
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
      title: 'title[0].value',
      position: 'position[0].value',
      img: 'img',
    },
    prepare: ({title, position, img}) => {
      return {
        title: `${title ? title : 'Імʼя'}`,
        subtitle: `${position ? position : 'посада'}`,
        media: img,
      }
    },
  },
})
