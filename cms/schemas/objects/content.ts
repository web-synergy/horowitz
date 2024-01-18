import {defineType} from 'sanity'
import ImageBlock from '../../components/ImageBlock'

export const content = defineType({
  name: 'content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Цитата', value: 'blockquote'},
      ],
      lists: [
        {title: 'Нумерований', value: 'number'},
        {title: 'Маркований', value: 'bullet'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
              {
                title: 'Відкрити в новому вікні',
                name: 'blank',
                type: 'boolean',
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
    },
  ],
})
