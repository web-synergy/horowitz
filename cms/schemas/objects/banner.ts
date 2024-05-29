import {defineType} from 'sanity'

const banner = defineType({
  name: 'banner',
  type: 'object',
  fields: [
    {
      name: 'img',
      title: 'Зображення',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'authorRight',
      title: 'Автор зображення (*буде примітка на банері*)',
      type: 'string',
    },
    {
      name: 'fullSize',
      title: 'На весь екран?',
      type: 'boolean',
      options: {layout: 'checkbox'},
    },
    {
      name: 'maxHeight',
      title: 'Максимальна висота у %',
      type: 'number',
      initialValue: 42,
      hidden: ({parent}) => !parent?.fullSize,
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
    {
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
    },
    {
      name: 'overlayGradient',
      title: 'Градієнт для зовнішнього ефекту',
      type: 'gradient',
      hidden: ({parent}) => parent?.overlayType !== 'gradient',
    },

    {
      name: 'overlayColor',
      title: 'Колір для затемнення зображення',
      type: 'color',
      hidden: ({parent}) => parent?.overlayType !== 'monochrome',
    },
    {
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
  options: {
    collapsible: true,
    collapsed: true,
  },
})

export default banner
