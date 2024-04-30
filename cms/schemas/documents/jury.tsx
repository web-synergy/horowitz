import {PictureType} from '../objects/picture'
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
  name: 'jury',
  title: 'Члени жюрі',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: "Прізвище та ім'я",
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'slug',
      title: 'Посилання',
      type: 'slug',
      options: {
        source: 'name[_key == "en"].value',
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: "Посада (не обов'язково)",
      type: 'internationalizedArrayString',
    }),

    defineField({
      name: 'about',
      title: 'Короткий опис',
      type: 'internationalizedArrayArticle',
    }),
    defineField({
      name: 'avatar',
      title: 'Фото',
      type: 'picture',
      options: {
        collapsed: false,
      },
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
