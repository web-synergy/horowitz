import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'junior',
  title: 'Молодша група',
  type: 'document',
  groups: [
    {
      name: 'common',
      title: 'Загальні',
    },
    {
      name: 'conditions',
      title: 'Умови конкурсу',
    },
    {
      name: 'jury',
      title: 'Жюрі',
    },
    {
      name: 'timetable',
      title: 'Регламент',
    },
    {
      name: 'requirements',
      title: 'Репертуарні вимоги',
    },
    {
      name: 'studentJury',
      title: 'Студентське жюрі',
    },
    {
      name: 'participants',
      title: 'Учасники',
    },
    {
      name: 'rewards',
      title: 'Премії',
    },
    {
      name: 'orchestra',
      title: 'Оркестр і диригент',
    },
    {
      name: 'winners',
      title: 'Переможці',
    },
    {
      name: 'venues',
      title: 'Локації',
    },
    {
      name: 'guests',
      title: 'Почесні гості',
    },
    {
      name: 'booklet',
      title: 'Буклет',
    },
  ],
  fields: [
    defineField({
      name: 'competitionId',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'groupType',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'title',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'isActive',
      type: 'boolean',
      title: 'Активувати групу',
      initialValue: false,
      group: 'common',
    }),
    defineField({
      name: 'isActiveConditions',
      type: 'boolean',
      title: 'Активувати сторінку Умови конкурсу',
      initialValue: false,
      group: 'conditions',
    }),
    defineField({
      name: 'conditions',
      type: 'array',
      title: 'Умови участі конкурсу',
      group: 'conditions',
      of: [{type: 'textBlock'}],
    }),

    defineField({
      name: 'isActiveJury',
      type: 'boolean',
      title: 'Активувати сторінку Жюрі',
      initialValue: false,
      group: 'jury',
    }),
    defineField({
      name: 'jury',
      type: 'array',
      title: 'Жюрі',
      of: [{type: 'reference', to: [{type: 'jury'}], title: 'Список жюрі'}],
      group: 'jury',
    }),
    defineField({
      name: 'isActiveStudentsJury',
      type: 'boolean',
      title: 'Активувати сторінку Студентське жюрі',
      initialValue: false,
      group: 'studentJury',
    }),
    defineField({
      name: 'isActiveTimetable',
      type: 'boolean',
      title: 'Активувати сторінку Регламент конкурсу',
      initialValue: false,
      group: 'timetable',
    }),
    defineField({
      name: 'timetable',
      type: 'internationalizedArrayContent',
      title: 'Регламент конкурсу',
      group: 'timetable',
    }),
    defineField({
      name: 'isActiveRequirements',
      type: 'boolean',
      title: 'Активувати сторінку Репертуарні вимоги',
      initialValue: false,
      group: 'requirements',
    }),
    defineField({
      name: 'requirements',
      type: 'internationalizedArrayContent',
      title: 'Репертуарні вимоги',
      group: 'requirements',
    }),

    defineField({
      name: 'isActiveParticipants',
      type: 'boolean',
      title: 'Активувати сторінку Учасники',
      initialValue: false,
      group: 'participants',
    }),
    defineField({
      name: 'isActiveRewards',
      type: 'boolean',
      title: 'Активувати сторінку Премії',
      initialValue: false,
      group: 'rewards',
    }),
    defineField({
      name: 'rewards',
      type: 'array',
      title: 'Премії',
      of: [{type: 'reward'}],
      group: 'rewards',
    }),
    defineField({
      name: 'prizes',
      type: 'internationalizedArrayContent',
      title: 'Призи, ангажементи',
      group: 'rewards',
    }),
    defineField({
      name: 'isActiveOrchestra',
      type: 'boolean',
      title: 'Активувати сторінку Оркестр та диригент',
      initialValue: false,
      group: 'orchestra',
    }),
    defineField({
      name: 'orchestra',
      type: 'array',
      title: 'Оркестр та диригент',
      of: [{type: 'artist'}],
      group: 'orchestra',
    }),
    defineField({
      name: 'isActiveWinners',
      type: 'boolean',
      title: 'Активувати сторінку Переможці',
      initialValue: false,
      group: 'winners',
    }),
    defineField({
      name: 'isActiveVenues',
      type: 'boolean',
      title: 'Активувати сторінку Локації',
      initialValue: false,
      group: 'venues',
    }),
    defineField({
      name: 'venues',
      type: 'array',
      title: 'Локації',
      of: [{type: 'textBlock'}],
      group: 'venues',
    }),
    defineField({
      name: 'isActiveGuests',
      type: 'boolean',
      title: 'Активувати сторінку Почесні гості',
      initialValue: false,
      group: 'guests',
    }),
    defineField({
      name: 'isActiveBooklet',
      type: 'boolean',
      title: 'Активувати Сторінку Буклет',
      initialValue: false,
      group: 'booklet',
    }),
  ],
})
