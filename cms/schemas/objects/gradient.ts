import ColorPreview from '../../components/ColorPreview'
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
          preview: {
            select: {
              color: 'value',
              position: 'position',
            },
            prepare: ({position, color}) => {
              return {
                title: `Початок кольору з ${position}%`,
                color: color,
              }
            },
          },
          components: {
            preview: ColorPreview,
          },
        },
      ],
    },
  ],
})
