import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'horowitz',
  title: 'Володимир Горовиць',
  type: 'document',

  groups: [
    {
      name: 'text',
      title: 'Блок тексту',
    },
    {
      name: 'literature',
      title: 'Література',
    },
  ],

  fields: [
    defineField({
      name: 'bannerData',
      title: 'Баннер',
      type: 'object',
      options: {
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'bannerImg',
          title: 'Фото',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'bannerCopyright',
          title: 'Текст авторського права',
          type: 'string',
        }),
      ],
    }),

    defineField({
      group: ['text'],
      name: 'textBlocks',
      title: 'Блок тексту',
      type: 'array',
      of: [{type: 'biographyText'}],
    }),

    defineField({
      group: ['literature'],
      name: 'literature',
      title: 'Література',
      type: 'array',
      of: [{type: 'literatureItem'}],
    }),
  ],
})
