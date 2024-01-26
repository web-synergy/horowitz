import {defineField, defineType} from 'sanity'
import {IoNewspaperOutline as icon} from 'react-icons/io5'
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
      validation: (Rule) => Rule.required().error('Обовʼязкове поле для заповнення'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title[1].value'},
      validation: (Rule) => Rule.required().error('Обовʼязкове поле для заповнення'),
    }),
    defineField({
      name: 'dateStart',
      type: 'date',
      title: 'Дата',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
      validation: (Rule) => [
        Rule.required().error('Обовʼязкове поле для заповнення'),
        Rule.custom((duration, context) => {
          const dateEnd = context.document?.date!

          if (duration! >= dateEnd) {
            return 'Дата закінчення пізніше дати початку'
          }

          return true
        }),
      ],
    }),
    defineField({
      name: 'date',
      type: 'date',
      title: 'Дата',
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
      validation: (Rule) => Rule.required().error('Обовʼязкове поле для заповнення'),
    }),
    defineField({
      name: 'description',
      title: 'Опис новини',
      type: 'internationalizedArrayContent',
      validation: (Rule) => Rule.required().error('Обовʼязкове поле для заповнення'),
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
