import {defineField, defineType} from 'sanity'
import {CiText} from 'react-icons/ci'

export default defineType({
  name: 'textBlock',
  title: 'Текстовий блок',
  type: 'object',
  icon: CiText,
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
