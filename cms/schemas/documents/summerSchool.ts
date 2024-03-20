import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'summerSchool',
  title: 'Літня академія',
  type: 'document',
  fields: [
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
