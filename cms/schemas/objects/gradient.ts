import ColorPreview from '../../components/ColorPreview'
import {defineType} from 'sanity'
import {validateHexColor} from '../../utils/validationHexColor'
import {validateAlphaChannel} from '../../utils/validateAlphaChannel'

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
              name: 'color',
              type: 'string',
              title: 'Введіть колір в форматі hex',
              validation: (Rule) => Rule.optional().custom(validateHexColor),
            },
            {
              name: 'alphaChannel',
              type: 'string',
              title: 'Введіть показник прозорість кольору (від 0 до 1)',
              validation: (Rule) => Rule.optional().custom(validateAlphaChannel),
            },
            {
              name: 'position',
              title: 'Початок дії кольору',
              type: 'number',
            },
          ],
          preview: {
            select: {
              color: 'color',
              alpha: 'alphaChannel',
              position: 'position',
            },
            prepare: ({position, color, alpha}) => {
              return {
                title: `Початок кольору з ${position}%`,
                color: color,
                alpha: alpha,
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
