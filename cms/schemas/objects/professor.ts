import {PictureType} from './picture'
import {defineType} from 'sanity'
import {CgProfile} from 'react-icons/cg'
import {Value} from 'sanity-plugin-internationalized-array'
import {createParticipantSlug} from '../../utils/createParticipantSlug'

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
    {
      name: 'name',
      title: "Прізвище та ім'я",
      type: 'internationalizedArrayString',
    },
    {
      name: 'slug',
      title: 'Посилання',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        disableArrayWarning: true,
        source: createParticipantSlug,
      },
    },

    {
      name: 'instrument',
      title: 'Музичний інструмент',
      type: 'internationalizedArrayString',
      hidden: ({document}) => document?._type !== 'annualSummerSchool',
    },
    {
      name: 'role',
      title: 'Роль',
      type: 'internationalizedArrayString',
    },

    {
      name: 'about',
      title: 'Коротка біографія',
      type: 'internationalizedArrayText',
    },
    {
      name: 'photo',
      title: 'Зображення',
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
