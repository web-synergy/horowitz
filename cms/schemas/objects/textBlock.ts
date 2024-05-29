import {defineField, defineType} from 'sanity'
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
      type: 'internationalizedArrayArticle',
    },
    {
      name: 'image',
      title: 'Картинка',
      type: 'picture',
    },
    {
      name: 'authorRight',
      title: 'Підпис до фото',
      type: 'internationalizedArrayString',
    },
  ],
  preview: {
    select: {
      title: 'title[0].value',
      media: 'image.image',
    },
  },
})
