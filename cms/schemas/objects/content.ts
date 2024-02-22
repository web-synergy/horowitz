import {defineType} from 'sanity'
import NoWrap from '../../components/NoWrap'
import {TbTextWrapDisabled as icon} from 'react-icons/tb'

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
          {title: 'No wrap', value: 'nw', icon, component: NoWrap},
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
          name: 'alt',
          type: 'string',
          title: 'Alt',
        },
      ],
    },
  ],
})

export default content
