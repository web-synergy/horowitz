import {defineType} from 'sanity'

export const content = defineType({
  name: 'content',
  type: 'array',
  of: [{type: 'block'}],
})
