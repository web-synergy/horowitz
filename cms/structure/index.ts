import {StructureBuilder} from 'sanity/desk'
import {singleDocument} from './singleDocument'

import {IoSettingsSharp} from 'react-icons/io5'
import {RiPagesLine} from 'react-icons/ri'
import {LuContact} from 'react-icons/lu'
import {IoShareSocialOutline} from 'react-icons/io5'
import {MdOutlineSettingsBrightness} from 'react-icons/md'
const singleSchemaTittles = [
  'Головна',
  'Налаштування',
  'Контактна інформація',
  'Соцмережі',
  'Конкурс дані',
]

const structure = (S: StructureBuilder) =>
  S.list()
    .title('Контент')
    .items([
      singleDocument(S, 'home', 'Головна').icon(RiPagesLine),
      ...S.documentTypeListItems().filter(
        (items) => !singleSchemaTittles.includes(items.getTitle() || ''),
      ),

      S.divider(),
      S.listItem()
        .title('Налаштування')
        .icon(IoSettingsSharp)
        .child(
          S.list()
            .title('Налаштування')
            .items([
              singleDocument(S, 'contacts', 'Контактна інформація', 'contacts').icon(LuContact),
              singleDocument(S, 'settings', 'Загальні налаштування').icon(
                MdOutlineSettingsBrightness,
              ),
              singleDocument(S, 'social', 'Соцмережі').icon(IoShareSocialOutline),
            ]),
        ),
    ])

export default structure
