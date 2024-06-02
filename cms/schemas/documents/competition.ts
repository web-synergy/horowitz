import {defineType} from 'sanity'
import {BsFileEarmarkMusicFill as icon} from 'react-icons/bs'
import {GroupInput} from '../../components/GroupInput'
import {GroupField} from '../../components/GroupField'
import {validateInternationalizedArray} from '../../utils/validateInternalizedArray'
import {Value} from 'sanity-plugin-internationalized-array'

export default defineType({
  name: 'competition',
  title: 'Конкурси',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Назва конкурсу',
      type: 'internationalizedArrayString',
      validation: (Rule) =>
        Rule.custom<Value[]>((value) => {
          return validateInternationalizedArray(value)
        }),
    },
    {
      name: 'slug',
      type: 'slug',
      options: {source: 'title[1].value'},
      validation: (rule) => rule.required(),
    },
    {
      name: 'isStubActive',
      title: 'Показувати заглушку',
      type: 'boolean',
    },
    {
      name: 'stubText',
      title: 'Текст для заглушки',
      type: 'internationalizedArrayString',
      hidden: ({document}) => !document?.isStubActive,
    },
    {
      name: 'description',
      title: 'Загальний опис',
      type: 'internationalizedArrayText',
      hidden: ({document}) => !!document?.isWarState,
    },
    {
      name: 'juniorBtn',
      type: 'image',
      title: 'Картинка для кнопки Молодша група',
    },
    {
      name: 'intermediateBtn',
      type: 'image',
      title: 'Картинка для кнопки Середня група',
    },
    {
      name: 'seniorBtn',
      type: 'image',
      title: 'Картинка для кнопки Старша група',
    },
    {
      name: 'mainBanner',
      type: 'banner',
      title: 'Головний банер',

      validation: (Rule) => Rule.required(),
    },
    {
      name: 'junior',
      title: 'Дебют/Молодша група',
      hidden: ({document}) => !!document?.isWarState,
      type: 'reference',
      to: [{type: 'group'}],
      options: {
        disableNew: true,
      },
      validation: (rule) => rule.required(),
      components: {
        input: GroupInput,
        field: GroupField,
      },
    },
    {
      name: 'intermediate',
      type: 'reference',
      hidden: ({document}) => !!document?.isWarState,
      to: [{type: 'group'}],
      title: 'Середня група (14-19 років)',
      validation: (rule) => rule.required(),
      options: {
        disableNew: true,
      },
      components: {
        input: GroupInput,
        field: GroupField,
      },
    },
    {
      name: 'senior',
      title: 'Старша група (16-33 роки)',
      hidden: ({document}) => !!document?.isWarState,
      type: 'reference',
      to: [{type: 'group'}],
      options: {disableNew: true},
      validation: (rule) => rule.required(),
      components: {
        input: GroupInput,
        field: GroupField,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({title}) => ({title: title[0].value}),
  },
})
