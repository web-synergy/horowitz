import {defineField, defineType} from 'sanity'
import image1 from '../../assets/images/variant1.jpg'
import image2 from '../../assets/images/variant2.jpg'
import image3 from '../../assets/images/variant3.jpg'
import {Buttons} from '../../components/Buttons'

export const BUTTONS = [
  {title: '1', value: '1', image: image1},
  {title: '2', value: '2', image: image2},
  {title: '3', value: '3', image: image3},
]

export default defineType({
  name: 'annualSummerSchool',
  title: 'Річна Літня академія',
  type: 'document',
  groups: [
    {name: 'common', title: 'Загальні дані'},
    {name: 'conditions', title: 'Умови участі'},
    {name: 'professors', title: 'Професори'},
    {name: 'participants', title: 'Учасники'},
    {name: 'schedules', title: 'Розклад'},
    {name: 'concerts', title: 'Концерти'},
    {name: 'orchestra', title: 'Оркестр та локації'},
  ],
  fields: [
    defineField({
      name: 'year',
      title: 'Рік',
      type: 'string',
      group: 'common',
    }),
    defineField({
      name: 'button',
      title: 'Заставка на кнопку',
      type: 'string',
      group: 'common',
      initialValue: BUTTONS[0].value,
      options: {
        list: BUTTONS.map(({title, value}) => ({title, value})),
        layout: 'radio',
      },
      components: {input: Buttons},
    }),
    defineField({
      name: 'slug',
      title: 'Посилання',
      type: 'slug',
      options: {
        source: 'year',
        slugify: (input) => `summer-academy-${input}`,
      },
      group: 'common',
    }),
    defineField({
      name: 'isActive',
      title: 'Активувати подачу заявок',
      type: 'boolean',
      group: 'common',
    }),
    defineField({
      name: 'applicationLink',
      title: 'Посилання для подачи заявки',
      type: 'url',
      hidden: ({parent}) => !parent?.isActive,
      group: 'common',
    }),

    defineField({
      name: 'description',
      title: 'Опис конкурсу',
      type: 'internationalizedArrayArticle',
      group: 'common',
    }),
    defineField({
      name: 'isActiveConditions',
      title: 'Додати умови участі',
      type: 'boolean',
      group: 'conditions',
    }),
    defineField({
      name: 'conditions',
      title: 'Умови участі',
      type: 'conditions',
      group: 'conditions',
      hidden: ({parent}) => !parent?.isActiveConditions,
    }),
    defineField({
      name: 'isActiveProfessors',
      title: 'Додати професорів',
      type: 'boolean',
      group: 'professors',
    }),
    defineField({
      name: 'professors',
      title: 'Професори',
      type: 'array',
      of: [{type: 'profile'}],
      group: 'professors',
      hidden: ({parent}) => !parent?.isActiveProfessors,
    }),
    defineField({
      name: 'isActiveParticipants',
      title: 'Додати умови учасників',
      type: 'boolean',
      group: 'participants',
    }),
    defineField({
      name: 'participants',
      title: 'Учасники',
      type: 'array',
      of: [{type: 'participantShort'}],
      group: 'participants',
      hidden: ({parent}) => !parent?.isActiveParticipants,
    }),
    defineField({
      name: 'isActiveSchedule',
      title: 'Додати умови розклади',
      type: 'boolean',
      group: 'schedules',
    }),
    defineField({
      name: 'isActiveConcerts',
      title: 'Додати умови концерти',
      type: 'boolean',
      group: 'concerts',
    }),
    defineField({
      name: 'isActiveOrchestra',
      title: 'Додати оркестр та локації',
      type: 'boolean',
      group: 'orchestra',
    }),
    defineField({
      name: 'orchestra',
      title: 'Оркестр та локації',
      type: 'array',
      of: [{type: 'textBlock'}],
      group: 'orchestra',
      hidden: ({parent}) => !parent?.isActiveOrchestra,
    }),
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
