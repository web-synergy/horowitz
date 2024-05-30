import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ukrainianWorks',
  title: 'Твори українських композиторів',
  type: 'document',

  fields: [
    defineField({
      name: 'mainBanner',
      title: 'Головний банер',
      type: 'banner',
    }),
    defineField({
      name: 'text',
      title: 'Текст',
      type: 'internationalizedArrayArticle',
    }),
  ],
})
