import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'junior',
  title: 'Молодша група',
  type: 'document',
  groups: [
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
    defineField({
      name: 'competitionId',
      type: 'string',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'groupType',
      type: 'string',
    }),
    defineField({
      name: 'isActive',
      type: 'boolean',
      title: 'Активувати групу',
      initialValue: false,
    }),
  ],
})
