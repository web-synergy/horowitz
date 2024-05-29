import {defineField, defineType} from 'sanity'

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
      name: 'regulation',
      title: 'Регламент',
    },
    {
      name: 'repertoire',
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
  ],
})
