import {defineField, defineType} from 'sanity'

const concert = defineType({
  name: 'concert',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'img',
      title: 'Афіша',
      type: 'internationalizedArrayImage',
    }),
    defineField({
      name: 'concertPrograms',
      title: 'Програма концерту',
      type: 'internationalizedArrayArticle',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'img',
    },
    prepare: ({title, image}) => ({
      title: title[0].value,
      media: image[0].value,
    }),
  },
})

export default concert
