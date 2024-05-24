import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'studentsJury',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Імʼя',
      type: 'internationalizedArrayString',
    }),

    defineField({
      name: 'age',
      title: 'Вік',
      type: 'number',
    }),
    defineField({
      name: 'phrase',
      title: 'Короткий опис',
      type: 'internationalizedArrayArticle',
    }),

    defineField({
      name: 'avatar',
      title: 'Фото',
      type: 'picture',
    }),
  ],
  preview: {
    select: {
      title: 'name[0].value',
      image: 'avatar.image',
    },
    prepare: ({title, image}) => ({
      title: title,
      media: image,
    }),
  },
})
