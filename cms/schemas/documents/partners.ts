import {defineType} from 'sanity'

export default defineType({
  name: 'partners',
  title: 'Партнери і спонсори',
  type: 'document',

  fields: [
    {
      name: 'organizers',
      title: 'Організатори конкурсу',
      type: 'array',
      of: [{type: 'sponsor'}],
    },
    {
      name: 'mainPartners',
      title: 'Головні партнери',
      type: 'array',
      of: [{type: 'sponsor'}],
    },
    {
      name: 'sponsors',
      title: 'Спонсори',
      type: 'array',
      of: [{type: 'sponsor'}],
    },
    {
      name: 'generalInfoPartners',
      title: 'Генеральні інформаційні партнери',
      type: 'array',
      of: [{type: 'sponsor'}],
    },
    {
      name: 'partners',
      title: 'Партнери',
      type: 'array',
      of: [{type: 'sponsor'}],
    },
    {
      name: 'mainInfoPartners',
      title: 'Головні інформаційні партнери',
      type: 'array',
      of: [{type: 'sponsor'}],
    },
    {
      name: 'officialInfoPartners',
      title: 'Офіційні інформаційні партнери',
      type: 'array',
      of: [{type: 'sponsor'}],
    },
  ],
})
