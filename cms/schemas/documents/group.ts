import {defineType} from 'sanity'
import {PiFilePdf} from 'react-icons/pi'
import {groupList} from '../../assets/constants/groupList'
import ParticipantPreview from '../../components/ParticipantPreview'

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
      name: 'rewards',
      title: 'Премії',
    },
    {
      name: 'artists',
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
          type: 'professor',
        },
      ],
      group: 'preselectionJury',
      hidden: ({document}) => document?.groupType === 'junior',
    },
    {
      name: 'isActiveRewards',
      type: 'boolean',
      title: 'Активувати сторінку Премії',
      initialValue: false,
      group: 'rewards',
    },
    {
      name: 'rewards',
      type: 'array',
      title: 'Премії',
      of: [{type: 'reward'}],
      group: 'rewards',
    },
    {
      name: 'prizes',
      type: 'internationalizedArrayContent',
      title: 'Призи, ангажменти',
      group: 'rewards',
    },
    {
      name: 'isActiveArtists',
      type: 'boolean',
      title: 'Активувати сторінку Оркестр та диригент',
      initialValue: false,
      group: 'artists',
    },
    {
      name: 'artists',
      type: 'array',
      title: 'Оркестр та диригент',
      of: [{type: 'textBlock'}],
      group: 'artists',
    },
    {
      name: 'isActiveVenues',
      type: 'boolean',
      title: 'Активувати сторінку Локації',
      initialValue: false,
      group: 'venues',
    },
    {
      name: 'venues',
      type: 'array',
      title: 'Локації',
      of: [{type: 'textBlock'}],
      group: 'venues',
    },
    {
      name: 'isActiveGuests',
      type: 'boolean',
      title: 'Активувати сторінку Почесні гості',
      initialValue: false,
      group: 'guests',
    },

    {
      name: 'guests',
      type: 'array',
      title: 'Почесні гості',
      of: [{type: 'reference', to: [{type: 'guest'}], title: 'Список гостей'}],
      group: 'guests',
    },

    {
      name: 'isActiveBooklet',
      type: 'boolean',
      title: 'Активувати Сторінку Буклет',
      initialValue: false,
      group: 'booklet',
    },
    {
      name: 'booklet',
      type: 'file',
      title: 'Буклет',
      icon: PiFilePdf,
      group: 'booklet',
      options: {
        accept: 'application/pdf',
      },
    },
    {
      name: 'isActiveParticipants',
      type: 'boolean',
      title: 'Активувати сторінку Учасники',
      initialValue: false,
      group: 'participants',
    },

    {
      name: 'participants',
      type: 'array',
      title: 'Учасники',
      of: [{type: 'participant'}],
      group: 'participants',
    },

    {
      name: 'isActiveWinners',
      type: 'boolean',
      title: 'Активувати сторінку Переможці',
      initialValue: false,
      group: 'winners',
    },

    {
      name: 'winners',
      type: 'array',
      title: 'Переможці',
      of: [{type: 'winner', title: 'Виберіть переможця зі списку учасників'}],
      group: 'winners',
    },
    {
      name: 'winnersGallery',
      type: 'gallery',
      title: 'Галерея для переможців',
      group: 'winners',
      hidden: ({document}) => document?.groupType === 'junior',
    },
    {
      name: 'juniorGallery',
      type: 'array',
      title: 'Галерея для переможців',
      group: 'winners',
      of: [
        {
          type: 'object',
          name: 'groupGallery',
          title: 'Галерея для групи',
          fields: [
            {
              name: 'subgroup',
              type: 'string',
              title: 'Група',
              options: {
                list: groupList,
              },
            },
            {
              name: 'gallery',
              type: 'gallery',
              title: 'Галерея',
            },
          ],
          preview: {
            select: {
              group: 'subgroup',
            },
            prepare: ({group}) => ({
              title: `Галерея до групи`,
              group,
            }),
          },
          components: {
            preview: ParticipantPreview,
          },
        },
      ],
      hidden: ({document}) => document?.groupType !== 'junior',
    },
  ],
})
