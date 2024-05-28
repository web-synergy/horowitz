import {defineField, defineType} from 'sanity'

const patternEmail =
  /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export default defineType({
  name: 'settings',
  title: 'Налаштування',
  type: 'document',
  groups: [
    {
      name: 'media',
      title: 'Логотип',
    },
    {
      name: 'contacts',
      title: 'Контакти',
    },
    {
      name: 'socials',
      title: 'Соціальні мережи',
    },
  ],

  fields: [
    defineField({
      name: 'logo',
      title: 'Логотип',
      type: 'image',
      validation: (Rule) => Rule.error('Обовʼязкове поле').required(),
      group: ['media'],
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      validation: (Rule) => Rule.error('Обовʼязкове поле').required(),
      group: ['socials'],
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
      validation: (Rule) => Rule.error('Обовʼязкове поле').required(),
      group: ['socials'],
    }),
    defineField({
      name: 'youTube',
      title: 'YouTube',
      type: 'url',
      validation: (Rule) => Rule.error('Обовʼязкове поле').required(),
      group: ['socials'],
    }),
    defineField({
      name: 'about',
      title: 'Про нас',
      type: 'internationalizedArrayArticle',
      validation: (Rule) => Rule.error('Обовʼязкове поле').required(),
      group: ['contacts'],
    }),
    defineField({
      name: 'address',
      title: 'Адреса',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.error('Обовʼязкове поле').required(),
      group: ['contacts'],
    }),
    defineField({
      name: 'phone',
      title: 'Телефон',
      type: 'string',
      validation: (Rule) => [
        Rule.regex(/^[0-9]+$/).error('Доступні тільки цифри'),
        Rule.required().error('Обовʼязкове поле'),
      ],
      group: ['contacts'],
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
      validation: (Rule) => [
        Rule.error('Обовʼязкове поле').required(),
        Rule.regex(patternEmail).error('Перевірте правильність написання'),
      ],
      group: ['contacts'],
    }),
    defineField({
      name: 'pressCenterPhone',
      title: 'Телефон Прес-центру',
      type: 'string',
      validation: (Rule) => [
        Rule.regex(/^[0-9]+$/).error('Доступні тільки цифри'),
        Rule.required().error('Обовʼязкове поле'),
      ],
      group: ['contacts'],
    }),
    defineField({
      name: 'pressCenterEmail',
      title: 'E-mail Прес-центру',
      type: 'string',
      validation: (Rule) => [
        Rule.error('Обовʼязкове поле').required(),
        Rule.regex(patternEmail).error('Перевірте правильність написання'),
      ],
      group: ['contacts'],
    }),
  ],
})
