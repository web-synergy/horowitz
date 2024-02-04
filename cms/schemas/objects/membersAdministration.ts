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
      name: 'role',
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
      role: 'role[0].value',
      img: 'img',
    },
    prepare: ({title, role, img}) => {
      return {
        title: `${title ? title : 'Імʼя'}`,
        subtitle: `${role ? role : 'посада'}`,
        media: img,
      }
    },
  },
})
