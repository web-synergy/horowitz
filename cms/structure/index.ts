import {StructureBuilder} from 'sanity/desk'
import {singleDocument} from './singleDocument'

import {IoSettingsSharp} from 'react-icons/io5'
// import {previewUrl} from '../environment'
const singleSchemaTittles = ['Головна', 'Налаштування']

const structure = (S: StructureBuilder) =>
  S.list()
    .title('Контент')
    .items([
      singleDocument(S, 'home', 'Головна'),
      ...S.documentTypeListItems().filter(
        (items) => !singleSchemaTittles.includes(items.getTitle() || ''),
      ),
      S.divider(),
      singleDocument(S, 'settings', 'Налаштування').icon(IoSettingsSharp),
    ])

export default structure
