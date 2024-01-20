import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'horowitz',
  title: 'Володимир Горовиць',
  type: 'document',

  groups: [
    {
      name: 'upperBlockText',
      title: 'Верхній текст',
    },
    {
      name: 'quote',
      title: 'Цитата',
    },
    {
      name: 'lowerBlockText',
      title: 'Нижній текст',
    },
    {
      name: 'literature',
      title: 'Література',
    },
  ],

  fields: [
    defineField({
      name: 'bannerData',
      title: 'Баннер',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'bannerImg',
          title: 'Фото',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'bannerCopyright',
          title: 'Текст авторського права',
          type: 'string',
        }),
      ],
    }),

    defineField({
      group: ['upperBlockText'],
      name: 'upperBlockText',
      title: 'Верхній блок тексту',
      type: 'internationalizedArrayContent',
    }),

    defineField({
      group: ['quote'],
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
      group: ['lowerBlockText'],
      name: 'lowerBlockText',
      title: 'Нижній блок тексту',
      type: 'internationalizedArrayContent',
    }),

    defineField({
      group: ['literature'],
      name: 'literature',
      title: 'Література',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
