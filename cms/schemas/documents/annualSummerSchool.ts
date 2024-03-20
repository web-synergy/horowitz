import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'annualSummerSchool',
  title: 'Річна Літня академія',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Рік',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Посилання',
      type: 'slug',
      options: {
        source: 'year',
        slugify: (input) => `summer-academy-${input}`,
      },
    }),
    defineField({
      name: 'isActive',
      title: 'Активувати подачу заявок',
      type: 'boolean',
    }),
    defineField({
      name: 'applicationLink',
      title: 'Посилання для подачи заявки',
      type: 'url',
      hidden: ({parent}) => !parent?.isActive,
    }),
    defineField({
      name: 'organizers',
      title: 'Організатори',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [{name: 'orginazer', type: 'internationalizedArrayString'}],
        },
      ],
    }),

    defineField({
      name: 'description',
      title: 'Опис конкурсу',
      type: 'internationalizedArrayContent',
    }),
    // defineField({
    //   name: 'conditions',
    //   title: 'Умови участі',
    //   type: 'reference',
    //   to: [{type: ''}],
    // }),
  ],

  preview: {
    select: {
      year: 'year',
    },
    prepare({year}) {
      let title = 'Музична академія'
      if (!year) {
        return {title: title}
      }

      return {
        title: `${title} за ${year}`,
      }
    },
  },
})
