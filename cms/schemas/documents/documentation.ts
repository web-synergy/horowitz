import {defineType} from 'sanity'

import UserDocumentation from '../../components/UserDocumentation'
export default defineType({
  name: 'documentation',
  type: 'document',
  title: 'Допомога з роботою з текстовим полем',
  fields: [
    {
      type: 'string',
      name: 'textDoc',
      components: {
        field: UserDocumentation,
      },
    },
  ],
})
