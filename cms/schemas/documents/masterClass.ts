import {defineField, defineType} from 'sanity'
import {IoNewspaperOutline as icon} from 'react-icons/io5'

interface Icontent {
  _key: string
  value: string
}

function chooseObject(arr: Icontent[]) {
  if (arr.length === 2) {
    return arr[1].value
  } else {
    return arr[0].value
  }
}

export default defineType({
  name: 'masterClass',
  title: 'Майстеркласи',
  type: 'document',
  __experimental_formPreviewTitle: false,
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'internationalizedArrayString',
      validation: (Rule) =>
        Rule.custom((content) => {
          let errorMassage = ''
          for (const value of content as Icontent[]) {
            if (value.value?.length > 100) {
              errorMassage = `В поле ${value._key?.toUpperCase()} введено ${value.value.length} символів, доступно 100`
            }
            if (!value.value?.length) {
              errorMassage = `Поле ${value._key?.toUpperCase()} обовʼязкове`
            }
          }
          return errorMassage || true
        }),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: (context: {title: Icontent[]}) => chooseObject(context.title),
      },
      validation: (Rule) => Rule.required().error('Обовʼязкове поле'),
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      title: 'Дата',
      validation: (Rule) => Rule.required().error('Обовʼязкове поле'),
    }),
    defineField({
      name: 'img',
      title: 'Додати зображення',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt',
        }),
      ],
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const video = context.document?.video
          if (!value && !video) {
            return 'Необхідно ввести або посилання на відео, або додати зображення'
          }
          if (value && video) {
            return 'Можна ввести тільки одне: або посилання на відео, або додати зображення'
          }
          return true
        }),
    }),
    defineField({
      name: 'video',
      title: 'Посилання на відео',
      type: 'url',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const img = context.document?.img
          if (!value && !img) {
            return 'Необхідно ввести або посилання на відео, або додати зображення'
          }
          if (value && img) {
            return 'Можна ввести тільки одне: або посилання на відео, або додати зображення'
          }
          return true
        }),
    }),
    defineField({
      name: 'description',
      title: 'Опис майстеркласу',
      type: 'internationalizedArrayArticle',
      validation: (Rule) =>
        Rule.custom((content) => {
          let errorMassage = ''
          for (const value of content as Icontent[]) {
            if (!value.value?.length) {
              errorMassage = `Поле ${value._key?.toUpperCase()} обовʼязкове`
            }
          }
          return errorMassage || true
        }),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      img: 'img',
    },
    prepare: ({title, img}) => {
      return {
        title: title[0].value,
        media: img,
      }
    },
  },
})
