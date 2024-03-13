import {defineField, defineType} from 'sanity'
import {PiFilePdf} from 'react-icons/pi'
export default defineType({
  name: 'magazinePdf',
  title: 'Буклети PDF',
  type: 'document',
  icon: PiFilePdf,
  fields: [
    defineField({
      name: 'title',
      title: 'Назва',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'file',
      title: 'Файл',
      type: 'file',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({title}) => ({title: title[0].value}),
  },
})
