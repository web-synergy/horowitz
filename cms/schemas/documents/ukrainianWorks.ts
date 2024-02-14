import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ukrainianWorks',
  title: 'Твори українських композиторів',
  type: 'document',

  fields: [
    defineField({
      name: 'text',
      title: 'Текст',
      type: 'internationalizedArrayArticle',
    }),

    defineField({
      name: 'list',
      title: 'Список',
      type: 'internationalizedArrayText',
    }),
  ],
})
