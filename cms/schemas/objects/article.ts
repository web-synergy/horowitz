import {defineType} from 'sanity'
import {TbTextWrapDisabled} from 'react-icons/tb'
// import {IoIosColorPalette} from 'react-icons/io'
import NoWrap from '../../components/NoWrap'
// import ColorText from '../../components/ColorText'

const article = defineType({
  name: 'article',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [{title: 'With top space', value: 'topSpace'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'No wrap', value: 'nw', icon: TbTextWrapDisabled, component: NoWrap},
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
  ],
})

export default article
