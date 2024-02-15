import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutHorowitzCompetition',
  title: 'Конкурс Горовиця',
  type: 'document',

  groups: [
    {
      name: 'upperTextBlock',
      title: 'Верхній текст',
    },
    {
      name: 'middleTextBlock',
      title: 'Середній текст',
    },
    {
      name: 'lowerTextBlock',
      title: 'Нижній текст',
    },
    {
      name: 'images',
      title: 'Зображення',
    },
  ],

  fields: [
    defineField({
      group: ['upperTextBlock'],
      name: 'upperTextBlock',
      title: 'Верхній блок тексту',
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
    }),

    defineField({
      name: 'imgHistoryOne',
      title: 'Зображення Історія 1',
      type: 'internationalizedArrayImage',
      group: 'images',
    }),

    defineField({
      group: ['middleTextBlock'],
      name: 'middleTextBlock',
      title: 'Середній блок тексту',
      type: 'internationalizedArrayContent',
    }),

    defineField({
      name: 'imgHistoryTwo',
      title: 'Зображення Історія 2',
      type: 'internationalizedArrayImage',
      group: 'images',
    }),

    defineField({
      group: ['lowerTextBlock'],
      name: 'lowerTextBlock',
      title: 'Нижній блок тексту',
      type: 'internationalizedArrayContent',
    }),

    defineField({
      name: 'imgStatistics',
      title: 'Зображення Статистика',
      type: 'internationalizedArrayImage',
      group: 'images',
    }),
  ],
})
