import {defineType} from 'sanity'

export default defineType({
  name: 'reward',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Картинка нагороди',
      type: 'image',
    },

    {
      name: 'title',
      title: 'Назва премії',
      type: 'internationalizedArrayString',
    },
    {
      name: 'description',
      title: 'Опис премії',
      type: 'internationalizedArrayString',
    },
  ],
  preview: {
    select: {
      title: 'title[0].value',
      media: 'image',
    },
  },
})
