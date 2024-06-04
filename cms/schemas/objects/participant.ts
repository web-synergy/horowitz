import {defineType, ImageSchemaType} from 'sanity'
import {CgProfile} from 'react-icons/cg'
import {createParticipantSlug} from '../../utils/createParticipantSlug'
import ParticipantPreview from '../../components/ParticipantPreview'

import {groupList} from '../../assets/constants/groupList'
import {Value} from 'sanity-plugin-internationalized-array'

export interface ParticipantSchema {
  _key: string
  name: Value[]
  subgroup: string | undefined
  age: number
  avatar: ImageSchemaType
  biography: Value[]
}

export default defineType({
  name: 'participant',
  title: 'Учасник',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: "Прізвище та ім'я",
      type: 'internationalizedArrayString',
    },
    {
      name: 'country',
      title: 'Країна (за необхідністю)',
      type: 'internationalizedArrayString',
      hidden: ({document}) => document?._type !== 'annualSummerSchool',
    },
    {
      name: 'subgroup',
      type: 'string',
      title: 'Група',
      options: {
        list: groupList,
      },
      hidden: ({document}) => document?.groupType !== 'junior',
    },
    {
      name: 'slug',
      title: "Посилання (обов'язково внесіть попередньо ім'я англійською)",
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        disableArrayWarning: true,
        source: createParticipantSlug,
      },
    },

    {
      name: 'age',
      title: 'Вік',
      type: 'number',
    },

    {
      name: 'biography',
      title: 'Короткий текст',
      type: 'internationalizedArrayText',
    },
    {
      name: 'avatar',
      title: 'Фото',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      avatar: 'avatar',
      group: 'subgroup',
    },
    prepare(selection) {
      const {name, avatar, group} = selection
      const ukrName = name[0]?.value || ''
      const engName = name[1]?.value || ''
      const title = `${ukrName}/${engName}`

      if (!avatar) {
        return {title, media: CgProfile, group}
      }

      return {title, group, media: avatar}
    },
  },
  components: {
    preview: ParticipantPreview,
  },
})
