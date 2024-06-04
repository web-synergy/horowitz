import {defineType} from 'sanity'

export default defineType({
  name: 'aboutHorowitzCompetition',
  title: 'Конкурс Горовиця',
  type: 'document',

  fields: [
    {
      name: 'mainBanner',
      title: 'Головний банер',
      type: 'banner',
    },
    {
      type: 'array',
      title: 'Текстові блоки',
      name: 'blocks',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'textBlock',
              title: 'Блок тексту',
              type: 'internationalizedArrayContent',
              validation: (Rule) =>
                Rule.custom((content: {_key?: string; value?: string}[]) => {
                  for (const value of content) {
                    if (!value.value?.length) {
                      return `Поле ${value._key?.toUpperCase()} обовʼязкове`
                    }
                  }
                  return true // All checks passed
                }),
            },

            {
              name: 'imageBlock',
              title: 'Зображення',
              type: 'internationalizedArrayImage',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              media: 'imageBlock[0].value',
            },
            prepare: ({media}) => ({
              title: 'Текстовий блок',
              media,
            }),
          },
        },
      ],
    },

    {
      name: 'additionalText',
      title: 'Додаткова інформація',
      type: 'internationalizedArrayContent',
    },
  ],
})
