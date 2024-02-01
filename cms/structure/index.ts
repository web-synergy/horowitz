import {StructureBuilder} from 'sanity/desk'
import {singleDocument} from './singleDocument'

import {IoSettingsSharp, IoShareSocialOutline} from 'react-icons/io5'
import {LuContact} from 'react-icons/lu'
import {MdOutlineSettingsBrightness} from 'react-icons/md'
import {RiPagesLine} from 'react-icons/ri'
import {SiGithubsponsors} from 'react-icons/si'
import {preview} from './preview'
import {languages} from '../../languages'
import {newsStructure} from './newsStructure'

const singleSchemaTittles = [
  'Головна',
  'Налаштування',
  'Контактна інформація',
  'Соцмережі',
  'Конкурс дані',
  'Володимир Горовиць',
  'Новини',
  'Партнери і спонсори',
]

const structure = (S: StructureBuilder) =>
  S.list()
    .title('Контент')
    .items([
      singleDocument(S, 'home', 'Головна', preview(S)).icon(RiPagesLine),
      ...S.documentTypeListItems().filter(
        (items) => !singleSchemaTittles.includes(items.getTitle() || ''),
      ),
      ...newsStructure(S),
      singleDocument(S, 'horowitz', 'Володимир Горовиць').icon(MdOutlineSettingsBrightness),
      singleDocument(S, 'partners', 'Партнери і спонсори').icon(SiGithubsponsors),
      S.divider(),
      S.listItem()
        .title('Налаштування')
        .icon(IoSettingsSharp)
        .child(
          S.list()
            .title('Налаштування')
            .items([
              singleDocument(S, 'contacts', 'Контактна інформація', preview(S, 'contacts')).icon(
                LuContact,
              ),
              singleDocument(S, 'settings', 'Загальні налаштування', preview(S)).icon(
                MdOutlineSettingsBrightness,
              ),
              singleDocument(S, 'social', 'Соцмережі').icon(IoShareSocialOutline),
            ]),
        ),
    ])

export default structure
