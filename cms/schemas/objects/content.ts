import {defineField, defineType} from 'sanity'

export const content = defineType({
  name: 'content',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
