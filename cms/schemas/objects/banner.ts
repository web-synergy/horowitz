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
      name: 'copyright',
      title: 'Автор зображення (*буде примітка на банері*)',
      type: 'string',
    }),
    defineField({
      name: 'size',
      type: 'object',
      fields: [
        defineField({
          name: 'fullSize',
          title: 'На весь екран?',
          type: 'boolean',
          options: {layout: 'checkbox'},
        }),
        defineField({
          name: 'maxHeight',
          title: 'Максимальна висота у %',
          type: 'number',
          initialValue: 42,
          hidden: ({parent}) => !parent?.fullSize,
        }),
        defineField({
          name: 'location',
          title: 'Позиція зображення',
          type: 'object',
          hidden: ({parent}) => parent?.fullSize,
          fields: [
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
      ],
    }),

    defineField({
      name: 'overlay',
      type: 'object',
      fields: [
        defineField({
          name: 'overlayType',
          title: 'Візуальний ефект на банері',
          type: 'string',
          initialValue: 'none',
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
          title: 'Градієнт для зовнішнього ефекту',
          type: 'gradient',
          hidden: ({parent}) => parent?.overlayType !== 'gradient',
        }),

        defineField({
          name: 'overlayColor',
          title: 'Колір для затемнення зображення',
          type: 'color',
          hidden: ({parent}) => parent?.overlayType !== 'monochrome',
        }),
      ],
    }),

    defineField({
      name: 'background',
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
              {title: 'Без ефекту', value: 'none'},
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
  options: {
    collapsible: true,
  },
})

export default banner
