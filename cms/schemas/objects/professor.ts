import {PictureType} from './picture'
import {defineField, defineType} from 'sanity'
import {CgProfile} from 'react-icons/cg'
import {Value} from 'sanity-plugin-internationalized-array'

export interface ProfessorSchema {
  _key: string
  name: Value[]
  avatar: PictureType
  instrument: Value[]
  about: Value[]
}

export default defineType({
  name: 'professor',
  title: 'Професор',
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
      name: 'instrument',
      title: 'Музичний інструмент',
      type: 'internationalizedArrayString',
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
