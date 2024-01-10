import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Головна',
  type: 'document',

  groups: [
    {
      name: 'organizers',
      title: 'Організатори',
    },
    {
      name: 'sponsors',
      title: 'Спонсори',
    },
    {
      name: 'news',
      title: 'Новини',
    },
    {
      name: 'winner',
      title: 'Переможці',
    },
    {
      name: 'videos',
      title: 'Відео',
    },
  ],

  fields: [
    defineField({
      name: 'banner',
      title: 'Баннер',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Заголовок',
          type: 'internationalizedArrayString',
        }),
        defineField({
          name: 'srcVideo',
          title: 'Відео',
          type: 'string',
        }),
        defineField({
          name: 'dateEvent',
          title: 'Дата Події',
          type: 'internationalizedArrayString',
        }),
        defineField({
          name: 'img',
          title: 'Фото',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    defineField({
      name: 'quote',
      title: 'Змінити цитату',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'quote',
          title: 'Цитата',
          type: 'internationalizedArrayText',
        }),
        defineField({
          name: 'author',
          title: 'Автор',
          type: 'internationalizedArrayString',
        }),
      ],
    }),

    defineField({
      group: ['winner'],
      name: 'winner',
      title: 'Переможці',
      type: 'array',
      of: [{type: 'winners'}],
    }),

    defineField({
      group: ['videos'],
      name: 'videos',
      title: 'Відео',
      type: 'array',
      of: [{type: 'video'}],
    }),
    defineField({
      group: ['organizers'],
      name: 'organizers',
      title: 'Організатори',
      type: 'array',
      of: [{type: 'sponsor'}],
    }),
    defineField({
      group: ['sponsors'],
      name: 'sponsors',
      title: 'Спонсори',
      type: 'array',
      of: [{type: 'sponsor'}],
    }),
  ],
})
