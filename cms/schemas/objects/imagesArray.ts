import {defineField, defineType} from 'sanity'

export const imageGalleryType = defineType({
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'internationalizedArrayString',
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
            {
              name: 'alt',
              type: 'string',
              title: 'Опис фото',
            },
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
      title: 'title[0].value',
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
