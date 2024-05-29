import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'summerSchool',
  title: 'Літня академія',
  type: 'document',
  fields: [
    defineField({
      name: 'topText',
      title: 'Верхній блок тексту',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'infographic',
      title: 'Інфографіка',
      type: 'internationalizedArrayImage',
    }),
    defineField({
      name: 'bottomText',
      title: 'Нижній блок тексту',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'gallery',
      title: 'Галерея',
      type: 'gallery',
    }),
  ],
})
