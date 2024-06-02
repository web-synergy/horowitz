import {defineField, defineType} from 'sanity'
import {type SlugSourceContext} from 'sanity'
import {CgProfile} from 'react-icons/cg'
import type {Value} from 'sanity-plugin-internationalized-array'

export default defineType({
  name: 'participant',
  title: 'Учасник',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: "Прізвище та ім'я",
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'country',
      title: 'Країна (за необхідністю)',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'slug',
      title: "Посилання (обов'язково внесіть попередньо ім'я англійською)",
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        disableArrayWarning: true,
        source: (_, context: SlugSourceContext) => {
          const {parent, parentPath} = context

          const base = (parent.name as Value[]).find((item) => item._key === 'en')

          return base ? `${parentPath[0]}-${base.value}` : ''
        },
      },
    }),

    defineField({
      name: 'age',
      title: 'Вік',
      type: 'number',
    }),

    defineField({
      name: 'biography',
      title: 'Короткий текст',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'avatar',
      title: 'Фото',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      name: 'name',
      avatar: 'avatar',
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
