import {defineType} from 'sanity'

export default defineType({
  name: 'gradient',
  type: 'object',
  fields: [
    {
      name: 'degree',
      title: 'Кут нахилу градієнту',
      type: 'number',
    },
    {
      name: 'colors',
      title: 'Набір кольорів для градієнту',
      type: 'array',
      options: {sortable: false},
      of: [
        {
          name: 'element',
          type: 'object',
          fields: [
            {
              name: 'value',
              title: 'Колір градієнту',
              type: 'color',
            },
            {
              name: 'position',
              title: 'Початок дії кольору',
              type: 'number',
            },
          ],
        },
      ],
    },
  ],
})
