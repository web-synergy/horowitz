import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'competitionDocument',
  type: 'document',
  title: 'Конкурс дані',

  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title[1].value'},
    }),
    defineField({
      name: 'rule',
      title: 'Правила',
      type: 'internationalizedArrayContent',
    }),
    defineField({
      name: 'img',
      title: 'Фото',
      type: 'image',
    }),
    defineField({
      name: 'about',
      title: 'Опис',
      type: 'internationalizedArrayContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      img: 'img',
    },
    prepare: ({title, img}) => ({title: title[0].value, media: img}),
  },
})
