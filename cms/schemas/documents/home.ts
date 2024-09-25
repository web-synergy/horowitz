import {defineType} from 'sanity'

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
    {
      name: 'event',
      title: 'Подія',
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
              type: 'string',
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
      name: 'winnersTitle',
      type: 'internationalizedArrayString',
      title: 'Заголовок для секції Переможці',
      group: 'winners',
    },
    {
      name: 'winnersLink',
      type: 'string',
      title: 'Посилання на сторінку з переможцями',
      group: 'winners',
    },
    {
      name: 'winners',
      type: 'array',
      title: 'Список переможців',
      of: [
        {
          type: 'object',
          title: 'Внесіть дані переможця',
          fields: [
            {
              name: 'name',
              type: 'internationalizedArrayString',
              title: "Прізвище та ім'я",
            },
            {
              name: 'title',
              type: 'internationalizedArrayString',
              title: 'Титул',
            },
            {
              name: 'photo',
              type: 'image',
              title: 'Фото',
            },
          ],
          preview: {
            select: {
              title: 'name[0].value',
              subtitle: 'title[0].value',
              media: 'photo',
            },
          },
        },
      ],
      group: 'winners',
    },
    {
      group: 'event',
      name: 'eventsTitle',
      type: 'internationalizedArrayString',
      title: 'Заголовок для секції Події',
    },
    {
      group: 'event',
      name: 'eventsText',
      type: 'internationalizedArrayText',
      title: 'Текст для секції Події',
    },
    {
      group: 'event',
      name: 'eventsLink',
      type: 'string',
      title: 'Посилання на подію',
    },
    {
      group: 'event',
      name: 'eventsButtonText',
      type: 'internationalizedArrayString',
      title: 'Текст для кнопки',
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
