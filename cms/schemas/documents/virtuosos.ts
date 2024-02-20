import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'virtuosos',
  title: 'Віртуози планет',
  type: 'document',
  fields: [
    defineField({
      name: 'banner',
      // title: 'Баннер',
      type: 'banner',
    }),
    defineField({
      name: 'description',
      title: 'Опис новини',
      type: 'internationalizedArrayContent',
    }),
    defineField({
      name: 'gallery',
      title: 'Галерея',
      type: 'gallery',
    }),
  ],
})
