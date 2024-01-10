import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  type: 'document',
  title: 'Соцмережі',
  fields: [
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
    }),
    defineField({
      name: 'youTube',
      title: 'YouTube',
      type: 'url',
    }),
  ],
})
