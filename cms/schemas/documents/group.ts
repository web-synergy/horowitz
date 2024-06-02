import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {defineType} from 'sanity'

export default defineType({
  name: 'group',
  title: 'Group',
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
      name: 'preselectionJury',
      title: 'Вибіркове жюрі',
    },
    {
      name: 'participants',
      title: 'Учасники',
    },
    {
      name: 'Rewards',
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
      name: 'book',
      title: 'Буклет',
    },
  ],
  fields: [
    {
      name: 'competitionId',
      type: 'string',
      hidden: true,
    },
    {
      name: 'groupType',
      type: 'string',
      hidden: true,
    },
    {
      name: 'title',
      type: 'string',
      hidden: true,
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Активувати групу',
      initialValue: false,
      group: 'common',
    },
    {
      name: 'isActiveConditions',
      type: 'boolean',
      title: 'Активувати сторінку Умови конкурсу',
      initialValue: false,
      group: 'conditions',
    },
    {
      name: 'conditions',
      type: 'array',
      title: 'Умови участі конкурсу',
      group: 'conditions',
      of: [{type: 'textBlock'}],
    },
    {
      name: 'isActiveJury',
      type: 'boolean',
      title: 'Активувати сторінку Жюрі',
      initialValue: false,
      group: 'jury',
    },
    {
      name: 'juries',
      type: 'array',
      title: 'Список жюрі',
      of: [
        {
          type: 'object',
          name: 'juryProfile',
          title: 'Картка Жюрі',
          fields: [
            {
              name: 'jury',
              type: 'reference',
              to: [{type: 'jury'}],
              title: 'Виберіть жюрі зі списку, або додайте нову картку',
            },
            {
              type: 'internationalizedArrayString',
              name: 'role',
              title: 'Зазначте посаду на конкурсі, за необхідністю',
            },
          ],
          preview: {
            select: {
              name: 'jury.name',
              role: 'role',
              media: 'jury.avatar.image',
            },
            prepare: ({name, media, role}) => {
              const title = role ? `${name[0].value}(${role[0].value})` : `${name[0].value}`
              return {
                title,
                media,
              }
            },
          },
        },
      ],
      group: 'jury',
    },
    {
      name: 'isActiveTimetable',
      type: 'boolean',
      title: 'Активувати сторінку Регламент конкурсу',
      initialValue: false,
      group: 'timetable',
    },
    {
      name: 'timetable',
      type: 'internationalizedArrayContent',
      title: 'Регламент конкурсу',
      group: 'timetable',
    },

    {
      name: 'isActiveRequirements',
      type: 'boolean',
      title: 'Активувати сторінку Репертуарні вимоги',
      initialValue: false,
      group: 'requirements',
    },
    {
      name: 'requirements',
      type: 'internationalizedArrayContent',
      title: 'Репертуарні вимоги',
      group: 'requirements',
    },
    {
      name: 'isActiveStudentsJury',
      type: 'boolean',
      title: 'Активувати сторінку Студентське жюрі',
      initialValue: false,
      group: 'studentJury',
      hidden: ({document}) => document?.groupType !== 'junior',
    },
    {
      name: 'studentJuryDesc',
      type: 'internationalizedArrayString',
      title: 'Текст для сторінки Студентське жюрі',
      group: 'studentJury',
      hidden: ({document}) => document?.groupType !== 'junior',
    },
    {
      name: 'studentsJury',
      type: 'array',
      title: 'Студентське жюрі',
      of: [{type: 'participant'}],
      group: 'studentJury',
      hidden: ({document}) => document?.groupType !== 'junior',
    },
    {
      name: 'isActivePreselectionJury',
      type: 'boolean',
      title: 'Активувати сторінку Вибіркове жюрі',
      initialValue: false,
      group: 'preselectionJury',
      hidden: ({document}) => document?.groupType === 'junior',
    },
    {
      name: 'preselectionJury',
      type: 'array',
      title: 'Вибіркове жюрі',
      of: [
        {
          name: 'jury',
          type: 'reference',
          to: [{type: 'jury'}],
          title: 'Виберіть жюрі зі списку, або додайте нову картку',
        },
      ],
      group: 'preselectionJury',
      hidden: ({document}) => document?.groupType === 'junior',
    },
  ],
})
