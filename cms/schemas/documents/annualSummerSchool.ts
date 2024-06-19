import {defineType} from 'sanity'
import image1 from '../../assets/images/variant1.jpg'
import image2 from '../../assets/images/variant2.jpg'
import image3 from '../../assets/images/variant3.jpg'
import {Buttons} from '../../components/Buttons'
import {SiHtmlacademy} from 'react-icons/si'

export const BUTTONS = [
  {title: '1', value: '1', image: image1},
  {title: '2', value: '2', image: image2},
  {title: '3', value: '3', image: image3},
]

export default defineType({
  name: 'annualSummerSchool',
  title: 'Річна Літня академія',
  type: 'document',
  icon: SiHtmlacademy,
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
    {
      name: 'year',
      title: 'Рік',
      type: 'string',
      group: 'common',
      validation: (Rule) => Rule.required(),
    },
    {
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
    },
    {
      name: 'slug',
      title: 'Посилання',
      type: 'slug',
      options: {
        source: 'year',
        slugify: (input) => `summer-academy-${input}`,
      },
      group: 'common',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'isActive',
      title: 'Активувати подачу заявок',
      type: 'boolean',
      group: 'common',
    },
    {
      name: 'applicationLink',
      title: 'Посилання для подачі заявки',
      type: 'url',
      group: 'common',
    },
    {
      name: 'banner',
      title: 'Головний банер',
      type: 'banner',
      group: 'common',
    },
    {
      name: 'description',
      title: 'Опис конкурсу',
      type: 'internationalizedArrayText',
      group: 'common',
    },
    {
      name: 'isActiveConditions',
      title: 'Додати умови участі',
      type: 'boolean',
      group: 'conditions',
    },
    {
      name: 'conditions',
      title: 'Умови участі',
      type: 'internationalizedArrayArticle',
      group: 'conditions',
    },
    {
      name: 'isActiveProfessors',
      title: 'Додати професорів',
      type: 'boolean',
      group: 'professors',
    },
    {
      name: 'professors',
      title: 'Професори',
      type: 'array',
      of: [{type: 'professor'}],
      group: 'professors',
    },
    {
      name: 'isActiveParticipants',
      title: 'Додати учасників',
      type: 'boolean',
      group: 'participants',
    },

    {
      name: 'participants',
      title: 'Учасники',
      group: 'participants',

      type: 'array',
      of: [{type: 'participant'}],
    },
    {
      name: 'isActiveSchedule',
      title: 'Додати розклад',
      type: 'boolean',
      group: 'schedules',
    },
    {
      name: 'schedules',
      title: 'Розклад',
      type: 'array',
      of: [{type: 'schedule'}],
      group: 'schedules',
    },
    {
      name: 'isActiveConcerts',
      title: 'Додати концерти',
      type: 'boolean',
      group: 'concerts',
    },
    {
      title: 'Концерти',
      name: 'concerts',
      type: 'array',
      of: [{type: 'concert'}],

      group: 'concerts',
    },
    {
      name: 'isActiveOrchestra',
      title: 'Додати оркестр та локації',
      type: 'boolean',
      group: 'orchestra',
    },
    {
      name: 'orchestra',
      title: 'Оркестр та локації',
      type: 'internationalizedArrayContent',
      group: 'orchestra',
    },
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
