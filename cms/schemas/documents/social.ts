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
      validation: (Rule) => Rule.error('Обовʼязкове поле').required(),
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
      validation: (Rule) => Rule.error('Обовʼязкове поле').required(),
    }),
    defineField({
      name: 'youTube',
      title: 'YouTube',
      type: 'url',
      validation: (Rule) => Rule.error('Обовʼязкове поле').required(),
    }),
  ],
})
