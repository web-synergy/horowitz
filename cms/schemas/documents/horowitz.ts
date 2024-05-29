import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'horowitz',
  title: 'Володимир Горовиць',
  type: 'document',

  groups: [
    {
      name: 'upperTextBlock',
      title: 'Верхній текст',
    },
    {
      name: 'quote',
      title: 'Цитата',
    },
    {
      name: 'lowerTextBlock',
      title: 'Нижній текст',
    },
    {
      name: 'literature',
      title: 'Література',
    },
  ],

  fields: [
    {
      name: 'mainBanner',
      title: 'Головний банер',
      type: 'banner',
    },

    {
      group: ['upperTextBlock'],
      name: 'upperTextBlock',
      title: 'Верхній блок тексту',
      type: 'internationalizedArrayDescription',
      validation: (Rule) =>
        Rule.custom((content: {_key?: string; value?: string}[]) => {
          for (const value of content) {
            if (!value.value?.length) {
              return `Поле ${value._key?.toUpperCase()} обовʼязкове`
            }
          }
          return true // All checks passed
        }),
    },

    {
      group: ['quote'],
      name: 'quote',
      title: 'Змінити цитату',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'quote',
          title: 'Цитата',
          type: 'internationalizedArrayText',
        },
        {
          name: 'author',
          title: 'Автор',
          type: 'internationalizedArrayString',
        },
      ],
    },
    {
      group: ['lowerTextBlock'],
      name: 'lowerTextBlock',
      title: 'Нижній блок тексту',
      type: 'internationalizedArrayArticle',
    },
    {
      group: ['literature'],
      name: 'literature',
      title: 'Література',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          marks: {
            annotations: [],
            decorators: [],
          },
          lists: [{title: 'Number', value: 'number'}],
        },
      ],
    },
  ],
})
