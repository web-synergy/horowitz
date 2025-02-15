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
  name: 'news',
  title: 'Новини',
  type: 'document',
  __experimental_formPreviewTitle: false,
  icon,
  fields: [
    {
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
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: (context) => chooseObject(context.title as Icontent[]),
      },
      validation: (Rule) => Rule.required().error('Обовʼязкове поле'),
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Дата новини',
      validation: (Rule) => Rule.required().error('Обовʼязкове поле'),
    },
    {
      name: 'banner',
      title: 'Додати зображення для списку',
      type: 'image',
    },
    {
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

      validation: (Rule) => Rule.required().error('Обовʼязкове поле для заповнення'),
    },

    {
      name: 'shortDescription',
      title: 'Короткий опис новини',
      type: 'internationalizedArrayText',
      validation: (Rule) =>
        Rule.custom((content) => {
          let errorMassage = ''
          for (const value of content as Icontent[]) {
            if (value.value?.length > 200) {
              errorMassage = `В поле ${value._key?.toUpperCase()} введено ${value.value.length} символів, доступно 200`
            }
            if (!value.value?.length) {
              errorMassage = `Поле ${value._key?.toUpperCase()} обовʼязкове`
            }
          }
          return errorMassage || true
        }),
    },
    {
      name: 'description',
      title: 'Опис новини',
      type: 'internationalizedArrayContent',
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
    },
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
