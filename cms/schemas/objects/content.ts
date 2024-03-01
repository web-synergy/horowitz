import {defineType} from 'sanity'
import NoWrap from '../../components/NoWrap'
import {TbTextWrapDisabled} from 'react-icons/tb'
import {IoIosColorPalette} from 'react-icons/io'
import ColorText from '../../components/ColorText'

const content = defineType({
  name: 'content',
  type: 'array',

  of: [
    {
      type: 'block',
      styles: [
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Number', value: 'number'},
        {title: 'Bullet', value: 'bullet'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'No wrap', value: 'nw', icon: TbTextWrapDisabled, component: NoWrap},
        ],
        annotations: [
          {
            title: 'Color',
            type: 'object',
            name: 'color',
            icon: IoIosColorPalette,
            fields: [
              {
                name: 'color',
                type: 'color',
              },
            ],
            components: {
              annotation: ColorText,
            },
          },
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'string',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'youtube',
    },
    {type: 'gallery'},

    {
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'width',
          title: 'Ширина у %',
          type: 'number',
          initialValue: 100,
        },
        {
          name: 'isEmbed',
          title: 'Вмонтувати в текст',
          type: 'boolean',
          options: {layout: 'checkbox'},
        },

        {
          name: 'position',
          title: 'Розміщення',
          type: 'string',
          initialValue: 'center',
          options: {
            list: [
              {title: 'Зліва', value: 'left'},
              {title: 'По центру', value: 'center'},
              {title: 'Справа', value: 'right'},
            ],
            layout: 'radio',
            direction: 'horizontal',
          },
        },
        {
          name: 'aspectRatio',
          title: 'Формат зображення',
          type: 'number',
          initialValue: 1.77,
          options: {
            list: [
              {title: '3:4', value: 0.75},
              {title: 'Квадрат', value: 1},
              {title: '16:9', value: 1.77},
            ],
            layout: 'radio',
            direction: 'horizontal',
          },
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alt',
        },
      ],
    },
  ],
})

export default content
