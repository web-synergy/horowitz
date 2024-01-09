import {defineField, defineType} from 'sanity'
import {GiMusicalKeyboard as icon} from 'react-icons/gi'
export default defineType({
  name: 'competitions',
  title: 'Конкурс',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'competition[1].value'},
    }),
    defineField({
      name: 'junior',
      title: 'Горовиць Дебют/Молодша група',
      type: 'reference',
      to: [{type: 'competitionDocument'}],
      options: {
        filter: 'role == $role',
      },
    }),
    defineField({
      name: 'middle',
      title: 'Середня група (14-19 років)',
      type: 'reference',
      to: [{type: 'competitionDocument'}],
      options: {
        filter: 'role == $role',
      },
    }),
    defineField({
      name: 'senior',
      title: 'Старша група (16-33 роки)',
      type: 'reference',
      to: [{type: 'competitionDocument'}],
      options: {
        filter: 'role == $role',
      },
    }),
  ],
})
