import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'virtuosos',
  title: 'Віртуози планет',
  type: 'document',
  fields: [
    defineField({
      name: 'banner',
      type: 'banner',
    }),
    defineField({
      name: 'description',
      title: 'Опис новини',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'gallery',
      title: 'Галерея',
      type: 'gallery',
    }),
  ],
})
