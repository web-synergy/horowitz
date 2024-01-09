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
    }),
    defineField({
      name: 'social',
      title: 'Соціальні мережі',
      type: 'object',
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
    }),
    defineField({
      name: 'contacts',
      title: 'Контактна інформація',
      type: 'object',
      fields: [
        defineField({
          name: 'about',
          title: 'Про нас',
          type: 'internationalizedArrayText',
        }),
        defineField({
          name: 'address',
          title: 'Адреса',
          type: 'string',
        }),
        defineField({
          name: 'phone',
          title: 'Телефон',
          type: 'string',
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
            }),
            defineField({
              name: 'email',
              title: 'E-mail',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})
