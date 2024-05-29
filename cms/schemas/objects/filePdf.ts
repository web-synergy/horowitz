import {defineField, defineType} from 'sanity'
import {PiFilePdf} from 'react-icons/pi'
export default defineType({
  name: 'filePdf',
  title: 'Буклети PDF',
  type: 'object',
  icon: PiFilePdf,
  fields: [
    defineField({
      name: 'file',
      title: 'Файл',
      type: 'file',
    }),
  ],
})
