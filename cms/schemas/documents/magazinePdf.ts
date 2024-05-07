import {defineField, defineType} from 'sanity'
import {PiFilePdf} from 'react-icons/pi'
export default defineType({
  name: 'magazinePdf',
  title: 'Буклети PDF',
  type: 'document',
  icon: PiFilePdf,
  fields: [
    defineField({
      name: 'file',
      title: 'Файл',
      type: 'file',
    }),
  ],
})
