import {defineField, defineType} from 'sanity'

const concert = defineType({
  name: 'concert',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'slugaa',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title[0].value',
      },
    }),
    defineField({
      name: 'img',
      title: 'Афіша',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      media: image,
    }),
  },
})

export default concert
