import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Головна',
  type: 'document',

  groups: [
    {
      name: 'banner',
      title: 'Рекламний банер',
    },
    {
      name: 'winners',
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
      group: 'banner',
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'img',
          title: 'Фото',
          type: 'internationalizedArrayImage',
          options: {
            hotspot: true,
          },
        }),

        defineField({
          name: 'background',
          title: 'Фон',
          type: 'object',
          fields: [
            defineField({
              name: 'backgroundType',
              title: 'Фон',
              type: 'string',
              initialValue: 'none',
              options: {
                list: [
                  {title: 'Градіент', value: 'gradient'},
                  {title: 'Однотоний', value: 'monochrome'},
                ],
                layout: 'radio',
                direction: 'horizontal',
              },
            }),

            defineField({
              name: 'backgroundColor',
              title: 'Колір фону',
              type: 'color',
              hidden: ({parent}) => parent?.backgroundType !== 'monochrome',
            }),
            defineField({
              name: 'backgroundGradient',
              title: 'Градієнт для фону',
              type: 'gradient',
              hidden: ({parent}) => parent?.backgroundType !== 'gradient',
            }),
          ],
        }),
      ],
    }),

    defineField({
      group: ['winners'],
      name: 'winners',
      title: 'Переможці',
      type: 'array',
      of: [{type: 'winner'}],
    }),

    defineField({
      group: ['videos'],
      name: 'videos',
      title: 'Відео',
      type: 'array',
      of: [{type: 'video'}],
    }),
  ],
})
