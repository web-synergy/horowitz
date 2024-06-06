import {defineType} from 'sanity'
import {PiMedalFill} from 'react-icons/pi'

export default defineType({
  name: 'reward',
  type: 'object',
  title: 'Нагорода',
  fields: [
    {type: 'image', name: 'img', title: 'Фото за необхідності'},
    {type: 'internationalizedArrayString', title: 'Назва премії', name: 'title'},
    {type: 'internationalizedArrayString', title: 'Опис премії', name: 'description'},
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      image: 'img',
    },
    prepare: ({title, subtitle, image}) => ({
      title: title[0].value,
      subtitle: subtitle[0].value,
      media: image ?? PiMedalFill,
    }),
  },
})
