import {defineType} from 'sanity'
import {TbTextWrapDisabled} from 'react-icons/tb'
import NoWrap from '../../components/NoWrap'

const article = defineType({
  name: 'description',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [
          {title: 'Без пробілів', value: 'noWrap', icon: TbTextWrapDisabled, component: NoWrap},
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
