import {defineType} from 'sanity'

export default defineType({
  name: 'artist',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Фото до блоку',
      type: 'image',
    },
    {
      name: 'copyRight',
      title: 'Підпис до фото',
      type: 'internationalizedArrayString',
    },

    {
      name: 'title',
      title: 'Назва блоку',
      type: 'internationalizedArrayString',
    },
    {
      name: 'description',
      title: 'Опис блоку',
      type: 'internationalizedArrayArticle',
    },
  ],
  preview: {
    select: {
      title: 'title[0].value',
      media: 'image',
    },
  },
})
