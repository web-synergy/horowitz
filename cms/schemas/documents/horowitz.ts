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
    // defineField({
    //   name: 'bannerData',
    //   title: 'Баннер',
    //   type: 'object',
    //   fields: [
    //     defineField({
    //       name: 'mainBanner',
    //       title: 'Головний банер',
    //       type: 'banner',
    //     }),
    //     defineField({
    //       name: 'bannerCopyright',
    //       title: 'Текст авторського права',
    //       type: 'string',
    //     }),
    //   ],
    // }),

    defineField({
      name: 'mainBanner',
      title: 'Головний банер',
      type: 'banner',
    }),
    defineField({
      name: 'bannerCopyright',
      title: 'Текст авторського права',
      type: 'string',
    }),

    defineField({
      group: ['upperTextBlock'],
      name: 'upperTextBlock',
      title: 'Верхній блок тексту',
      type: 'internationalizedArrayContent',
      validation: (Rule) =>
        Rule.custom((content: {_key?: string; value?: string}[]) => {
          for (const value of content) {
            if (!value.value?.length) {
              return `Поле ${value._key?.toUpperCase()} обовʼязкове`
            }
          }
          return true // All checks passed
        }),
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
      group: ['lowerTextBlock'],
      name: 'lowerTextBlock',
      title: 'Нижній блок тексту',
      type: 'internationalizedArrayContent',
    }),

    defineField({
      group: ['literature'],
      name: 'literature',
      title: 'Література',
      type: 'array',
      of: [
        {
          type: 'block',
          lists: [
            {title: 'Number', value: 'number'},
            {title: 'Bullet', value: 'bullet'},
          ],
        },
      ],
    }),
  ],
})
