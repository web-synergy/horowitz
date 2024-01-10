import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'contacts',
  type: 'document',
  title: 'Контактна інформація',

  fields: [
    defineField({
      name: 'about',
      title: 'Про нас',
      type: 'internationalizedArrayContent',
    }),
    defineField({
      name: 'address',
      title: 'Адреса',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'phone',
      title: 'Телефон',
      type: 'string',
      validation: (Rule) => Rule.regex(/^[0-9]+$/).error('Неправильний формат телефону'),
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
    }),
    defineField({
      name: 'pressCenter',
      title: 'Прес-центр',
      type: 'object',
      fields: [
        defineField({
          name: 'phone',
          title: 'Телефон',
          type: 'string',
          validation: (Rule) => Rule.regex(/^[0-9]+$/).error('Неправильний формат телефону'),
        }),
        defineField({
          name: 'email',
          title: 'E-mail',
          type: 'string',
        }),
      ],
    }),
  ],
})
