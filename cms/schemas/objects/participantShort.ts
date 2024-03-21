import {defineField, defineType} from 'sanity'
import {CgProfile} from 'react-icons/cg'

export default defineType({
  name: 'participantShort',
  title: 'Учасник',
  type: 'object',
  fields: [
    defineField({
      name: 'avatar',
      type: 'picture',
    }),
    defineField({
      name: 'name',
      title: "Прізвище та ім'я",
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'country',
      title: 'Країна',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'birthday',
      title: 'Дата народження',
      type: 'date',
    }),

    defineField({
      name: 'about',
      title: 'Короткий опис',
      type: 'internationalizedArrayArticle',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      avatar: 'avatar.image',
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
