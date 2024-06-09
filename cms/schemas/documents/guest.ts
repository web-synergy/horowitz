import {defineType} from 'sanity'
import {CgProfile} from 'react-icons/cg'

export default defineType({
  name: 'guest',
  title: 'Почесний гість',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: "Прізвище та ім'я",
      type: 'internationalizedArrayString',
    },

    {
      name: 'about',
      title: 'Короткий опис',
      type: 'internationalizedArrayText',
    },
    {
      name: 'photo',
      title: 'Фото',
      type: 'image',
    },
  ],
  preview: {
    select: {
      name: 'name',
      avatar: 'photo',
    },
    prepare(selection) {
      const {name, avatar} = selection
      const ukrName = name[0]?.value || ''
      const engName = name[1]?.value || ''
      const title = `${ukrName}/${engName}`

      if (!avatar) {
        return {title, media: CgProfile}
      }

      return {title, media: avatar}
    },
  },
})
