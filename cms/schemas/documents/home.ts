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
    {
      name: 'banner',
      title: 'Баннер',
      type: 'object',
      group: 'banner',
      options: {
        collapsible: true,
      },
      fields: [
        {
          name: 'img',
          title: 'Фото',
          type: 'internationalizedArrayImage',
          options: {
            hotspot: true,
          },
        },

        {
          name: 'background',
          title: 'Фон',
          type: 'object',
          fields: [
            {
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
            },

            {
              name: 'backgroundColor',
              title: 'Колір фону',
              type: 'color',
              hidden: ({parent}) => parent?.backgroundType !== 'monochrome',
            },
            {
              name: 'backgroundGradient',
              title: 'Градієнт для фону',
              type: 'gradient',
              hidden: ({parent}) => parent?.backgroundType !== 'gradient',
            },
          ],
        },
      ],
    },

    {
      group: ['winners'],
      name: 'winners',
      title: 'Переможці',
      type: 'array',
      of: [{type: 'winner'}],
    },

    {
      group: ['videos'],
      name: 'videos',
      title: 'Відео',
      type: 'array',
      of: [{type: 'video'}],
    },
  ],
})
