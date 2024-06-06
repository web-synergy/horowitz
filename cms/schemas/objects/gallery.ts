import {defineType} from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    },
    {
      name: 'option',
      type: 'boolean',
      title: 'Grid Gallery',
    },
    {
      name: 'quantity',
      type: 'number',
      hidden: ({parent}) => !parent?.option,
      title: 'Кількість фото',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Фото',
      of: [
        {
          name: 'image',
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt',
            },
            {
              name: 'photoLayout',
              type: 'object',
              title: 'Налаштування галереї',
              options: {
                collapsed: true,
              },
              fields: [
                {
                  name: 'cols',
                  type: 'number',
                  title: 'Кількість колонок',
                  initialValue: 3,
                  options: {
                    list: [1, 2, 3, 4, 5, 6],
                    layout: 'radio',
                    direction: 'horizontal',
                  },
                },
                {
                  name: 'rows',
                  type: 'number',
                  title: 'Кількість рядків',
                  initialValue: 3,
                  options: {
                    list: [1, 2, 3, 4, 5, 6],
                    layout: 'radio',
                    direction: 'horizontal',
                  },
                },
              ],
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      img: 'images[0].asset',
    },
    prepare: ({title, img}) => {
      const str = title || 'Фото'
      return {
        title: str,
        media: img,
      }
    },
  },
})
