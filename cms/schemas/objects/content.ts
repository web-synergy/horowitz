import {defineType} from 'sanity'

const content = defineType({
  name: 'content',
  type: 'array',
  of: [{type: 'block'}],
})

export default content
