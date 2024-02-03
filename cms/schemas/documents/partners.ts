import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'partners',
  title: 'Партнери і спонсори',
  type: 'document',

  fields: [
    defineField({
      name: 'organizers',
      title: 'Організатори конкурсу',
      type: 'array',
      of: [{type: 'sponsor'}],
    }),
    defineField({
      name: 'mainPartners',
      title: 'Головні партнери',
      type: 'array',
      of: [{type: 'sponsor'}],
    }),
    defineField({
      name: 'sponsors',
      title: 'Спонсори',
      type: 'array',
      of: [{type: 'sponsor'}],
    }),
    defineField({
      name: 'generalInfoPartners',
      title: 'Генеральні інформаційні партнери',
      type: 'array',
      of: [{type: 'sponsor'}],
    }),
    defineField({
      name: 'partners',
      title: 'Партнери',
      type: 'array',
      of: [{type: 'sponsor'}],
    }),
    defineField({
      name: 'mainInfoPartners',
      title: 'Головні інформаційні партнери',
      type: 'array',
      of: [{type: 'sponsor'}],
    }),
    defineField({
      name: 'officialInfoPartners',
      title: 'Офіційні інформаційні партнери',
      type: 'array',
      of: [{type: 'sponsor'}],
    }),
  ],
})
