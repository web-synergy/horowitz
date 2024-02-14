import {defineType} from 'sanity'

const article = defineType({
  name: 'article',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [],
    },
  ],
})

export default article
