import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'membersAdministration',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
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
      name: 'name[0].value',
      role: 'role[0].value',
      img: 'img',
    },
    prepare: ({name, role, img}) => {
      return {
        title: `${name ? name : 'Імʼя'}`,
        subtitle: `${role ? role : 'посада'}`,
        media: img,
      }
    },
  },
})
