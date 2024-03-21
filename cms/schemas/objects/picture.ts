import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'picture',
  title: 'Картинка',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Фото',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt',
      title: 'Підпис',
      type: 'string',
    }),
    defineField({
      name: 'aspectRatio',
      title: 'Формат',
      type: 'string',
      initialValue: '3/4',
      options: {
        list: [
          {title: '16/9', value: '16/9'},
          {title: '1/1', value: '1/1'},
          {title: '3/4', value: '3/4'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
  ],
})
