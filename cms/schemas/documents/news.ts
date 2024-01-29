import {defineField, defineType} from 'sanity'
import {IoNewspaperOutline as icon} from 'react-icons/io5'

interface Icontent {
  _key: string
  value: string
}
export default defineType({
  name: 'news',
  title: 'Новини',
  type: 'document',
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
      options: {source: 'title[1].value'},
      validation: (Rule) => Rule.required().error('Обовʼязкове поле'),
    }),
    defineField({
      name: 'dateStart',
      type: 'date',
      title: 'Дата початку події',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
      validation: (Rule) => [
        Rule.required().error('Обовʼязкове поле'),
        Rule.custom((duration, context) => {
          const dateEnd = context.document?.dateEnd!

          if (duration! >= dateEnd) {
            return 'Дата закінчення новини швидше дати початку'
          } else {
            return true
          }
        }),
      ],
    }),
    defineField({
      name: 'dateEnd',
      type: 'date',
      title: 'Дата закінчення події',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    }),
    defineField({
      name: 'img',
      title: 'Додати зображення',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Обовʼязкове поле для заповнення'),
    }),

    defineField({
      name: 'shortDescription',
      title: 'Короткий опис новини',
      type: 'internationalizedArrayText',
      validation: (Rule) =>
        Rule.custom((content) => {
          let errorMassage = ''
          for (const value of content as Icontent[]) {
            if (value.value?.length > 150) {
              errorMassage = `В поле ${value._key?.toUpperCase()} введено ${value.value.length} символів, доступно 150`
            }
            if (!value.value?.length) {
              errorMassage = `Поле ${value._key?.toUpperCase()} обовʼязкове`
            }
          }
          return errorMassage || true
        }),
    }),
    defineField({
      name: 'description',
      title: 'Опис новини',
      type: 'internationalizedArrayContent',
      validation: (Rule) =>
        Rule.custom((content) => {
          let errorMassage = ''
          for (const value of content as Icontent[]) {
            console.log(value)
            if (value.value?.length > 150) {
              errorMassage = `В поле ${value._key?.toUpperCase()} введено ${value.value.length} символів, доступно 150`
            }
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
