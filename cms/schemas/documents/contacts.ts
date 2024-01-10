import {defineField, defineType} from 'sanity'

const patternEmail =
  /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export default defineType({
  name: 'contacts',
  type: 'document',
  title: 'Контактна інформація',

  fields: [
    defineField({
      name: 'about',
      title: 'Про нас',
      type: 'internationalizedArrayContent',
      validation: (Rule) => Rule.error('Обовʼязкове поле').required(),
    }),
    defineField({
      name: 'address',
      title: 'Адреса',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.error('Обовʼязкове поле').required(),
    }),
    defineField({
      name: 'phone',
      title: 'Телефон',
      type: 'string',
      validation: (Rule) => [
        Rule.regex(/^[0-9]+$/).error('Доступні тільки цифри'),
        Rule.required().error('Обовʼязкове поле'),
      ],
    }),
    defineField({
      name: 'email',
      title: 'E-mail',
      type: 'string',
      validation: (Rule) => [
        Rule.error('Обовʼязкове поле').required(),
        Rule.regex(patternEmail).error('Перевірте правильність написання.'),
      ],
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
          validation: (Rule) => [
            Rule.regex(/^[0-9]+$/).error('Доступні тільки цифри'),
            Rule.required().error('Обовʼязкове поле'),
          ],
        }),
        defineField({
          name: 'email',
          title: 'E-mail',
          type: 'string',
          validation: (Rule) => [
            Rule.error('Обовʼязкове поле').required(),
            Rule.regex(patternEmail).error('Перевірте правильність написання.'),
          ],
        }),
      ],
    }),
  ],
})
