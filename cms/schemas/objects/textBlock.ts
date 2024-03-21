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

    defineField({
      name: 'placeForPicture',
      title: 'Розміщення картинки',
      type: 'string',
      initialValue: 'in',
      options: {
        list: [
          {title: 'В тексті', value: 'in'},
          {title: 'Під текстом', value: 'bottom'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
  ],
})
