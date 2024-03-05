import {defineField, defineType} from 'sanity'
import TitlePreview from '../../components/TitlePreview'

export default defineType({
  name: 'aboutHorowitzCompetition',
  title: 'Конкурс Горовиця',
  type: 'document',

  fields: [
    defineField({
      name: 'mainBanner',
      title: 'Головний банер',
      type: 'banner',
    }),

    defineField({
      name: 'content',
      type: 'array',
      title: 'Контент',

      of: [
        {
          name: 'textBlock',
          title: 'Текстовий контент',
          type: 'object',
          fields: [{name: 'data', type: 'internationalizedArrayArticle'}],
          components: {preview: TitlePreview},
          preview: {
            select: {
              title: 'title',
            },
          },
        },
        {
          name: 'imageBlock',
          title: 'Зображення',
          type: 'object',
          fields: [{name: 'data', type: 'internationalizedArrayImage'}],
          components: {preview: TitlePreview},
          preview: {
            select: {
              title: 'title',
            },
          },
        },
        {
          name: 'quoteBlock',
          title: 'Цитата',
          components: {preview: TitlePreview},
          type: 'object',
          fields: [{name: 'data', type: 'internationalizedArrayQuote'}],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    }),
    // defineField({
    //   name: 'upperTextBlock',
    //   title: 'Верхній блок тексту',
    //   type: 'internationalizedArrayContent',
    //   validation: (Rule) =>
    //     Rule.custom((content: {_key?: string; value?: string}[]) => {
    //       for (const value of content) {
    //         if (!value.value?.length) {
    //           return `Поле ${value._key?.toUpperCase()} обовʼязкове`
    //         }
    //       }
    //       return true // All checks passed
    //     }),
    // }),

    // defineField({
    //   name: 'imgHistoryOne',
    //   title: 'Зображення Історія 1',
    //   type: 'internationalizedArrayImage',
    // }),

    // defineField({
    //   name: 'middleTextBlock',
    //   title: 'Середній блок тексту',
    //   type: 'internationalizedArrayContent',
    // }),

    // defineField({
    //   name: 'imgHistoryTwo',
    //   title: 'Зображення Історія 2',
    //   type: 'internationalizedArrayImage',
    // }),

    // defineField({
    //   name: 'lowerTextBlock',
    //   title: 'Нижній блок тексту',
    //   type: 'internationalizedArrayContent',
    // }),

    // defineField({
    //   name: 'imgStatistics',
    //   title: 'Зображення Статистика',
    //   type: 'internationalizedArrayImage',
    // }),
  ],
})
