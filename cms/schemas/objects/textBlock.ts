import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textBlock',
  title: 'Текстовий блок',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'text',
      title: 'Основний текст',
      type: 'internationalizedArrayArticle',
    }),
    defineField({
      name: 'image',
      title: 'Картинка',
      type: 'picture',
    }),
  ],
  preview: {
    select: {
      title: 'title[0].value',
      media: 'image.image',
    },
  },
})
