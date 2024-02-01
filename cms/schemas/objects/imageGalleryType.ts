import {defineField, defineType} from 'sanity'

export const imageGalleryType = defineType({
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
    }),
    defineField({
      name: 'option',
      type: 'boolean',
      title: 'Grid Gallery',
    }),
    {
      name: 'images',
      type: 'array',
      title: 'Фото',
      of: [
        defineField({
          name: 'image',
          type: 'image',

          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt',
            }),
            defineField({
              name: 'photoLayout',
              type: 'object',
              title: 'Налаштування галереї',
              options: {
                collapsed: true,
              },
              fields: [
                defineField({
                  name: 'cols',
                  type: 'number',
                  title: 'Кількість колонок',
                  initialValue: 2,
                  options: {
                    list: [1, 2, 3, 4],
                    layout: 'radio',
                    direction: 'horizontal',
                  },
                }),
                defineField({
                  name: 'rows',
                  type: 'number',
                  title: 'Кількість рядків',
                  initialValue: 1,
                  options: {
                    list: [1, 2, 3, 4],
                    layout: 'radio',
                    direction: 'horizontal',
                  },
                }),
              ],
            }),
          ],
        }),
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
