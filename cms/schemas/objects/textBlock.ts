import {defineType} from 'sanity'
import {CiText} from 'react-icons/ci'

export default defineType({
  name: 'textBlock',
  title: 'Текстовий блок',
  type: 'object',
  icon: CiText,
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'internationalizedArrayString',
    },
    {
      name: 'text',
      title: 'Основний текст',
      type: 'internationalizedArrayText',
    },
    {
      name: 'image',
      title: 'Картинка',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title[0].value',
      media: 'image',
    },
  },
})
