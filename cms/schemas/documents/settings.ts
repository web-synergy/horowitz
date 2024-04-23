import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'settings',
  title: 'Налаштування',
  type: 'document',

  fields: [
    defineField({
      name: 'logo',
      title: 'Логотип',
      type: 'image',
      validation: (Rule) => Rule.error('Обовʼязкове поле').required(),
    }),
    defineField({
      name: 'seoImage',
      title: 'Картинка для відображенні в пошуку',
      type: 'image',
      validation: (Rule) => Rule.error('Обовʼязкове поле').required(),
    }),
  ],
})
