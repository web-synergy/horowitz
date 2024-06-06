import {defineType} from 'sanity'
import {ProfessorInput} from '../../components/ProfessorInput'
import RehearsalPreview from '../../components/RehearsalPreview'

export default defineType({
  name: 'schedule',
  title: 'Розклад',
  type: 'object',
  fields: [
    {
      name: 'lecture',
      title: 'Лектор',
      type: 'string',
      components: {
        input: ProfessorInput,
      },
    },
    {
      name: 'date',
      title: 'Дата',
      type: 'date',
    },
    {
      name: 'rehearsals',
      title: 'Репетиції',
      type: 'array',
      of: [{type: 'rehearsal'}],
    },
  ],
  preview: {
    select: {
      title: 'lecture',
      subtitle: 'date',
    },
  },
  components: {
    preview: RehearsalPreview,
  },
})
