import {defineType, defineField} from 'sanity'

const banner = defineType({
  name: 'banner',
  type: 'object',
  fields: [
    defineField({
      name: 'img',
      title: 'Зображення',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'fullSize',
      title: 'На весь екран?',
      type: 'boolean',
      options: {layout: 'checkbox'},
    }),
    defineField({
      name: 'location',
      title: 'Позиція зображення',
      type: 'object',
      hidden: ({parent}) => parent?.fullSize,
      fields: [
        {
          name: 'width',
          title: 'Ширина у %',
          type: 'number',
        },
        {
          name: 'position',
          title: 'Розміщення',
          type: 'string',
          options: {
            list: [
              {title: 'Зліва', value: 'left'},
              {title: 'Справа', value: 'right'},
              {title: 'По центру', value: 'center'},
            ],
            layout: 'radio',
            direction: 'horizontal',
          },
        },
      ],
    }),
    defineField({
      name: 'maxHeight',
      title: 'Максимальна висота у %',
      type: 'number',
      initialValue: 42,
    }),

    defineField({
      name: 'overlayType',
      title: 'Візуальний ефект',
      type: 'string',
      initialValue: 'gradient',
      options: {
        list: [
          {title: 'Градіент', value: 'gradient'},
          {title: 'Затемнення', value: 'monochrome'},
          {title: 'Без ефекту', value: 'none'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({
      name: 'linearGradient',
      type: 'object',
      hidden: ({parent}) => parent?.overlayType !== 'gradient',
      fields: [
        {
          name: 'degree',
          title: 'Кут нахилу градієнту',
          type: 'number',
        },
        {
          name: 'colors',
          title: 'Набір кольорів для градієнту',
          type: 'array',
          options: {sortable: false},
          of: [
            {
              name: 'color',
              type: 'object',
              fields: [
                {
                  name: 'value',
                  title: 'Колір градієнту',
                  type: 'color',
                },
                {
                  name: 'position',
                  title: 'Початок дії кольору',
                  type: 'number',
                },
              ],
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'overlayColor',
      title: 'Колір для затемнення зображення',
      type: 'color',
      hidden: ({parent}) => parent?.overlayType !== 'monochrome',
    }),

    defineField({
      name: 'background',
      title: 'Фон',
      type: 'color',
    }),
  ],
  options: {
    collapsible: true,
  },
})

export default banner
