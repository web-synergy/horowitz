import {defineType, defineField} from 'sanity'

export const horowitzThirty = defineType({
  name: 'horowitzThirty',
  title: 'Конкурсу 30 років',
  type: 'document',
  fields: [
    defineField({
      name: 'mainBanner',
      title: 'Головний банер',
      type: 'banner',
    }),
    defineField({
      name: 'content',
      title: 'Контент сторінки',
      type: 'internationalizedArrayContent',
    }),
  ],
  preview: {
    prepare: () => {
      return {title: 'Конкурсу 30 років'}
    },
  },
})
