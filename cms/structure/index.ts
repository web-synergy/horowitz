import {singleDocument} from './singleDocument'

import {IoSettingsSharp, IoShareSocialOutline} from 'react-icons/io5'
import {LuContact} from 'react-icons/lu'
import {MdOutlineSettingsBrightness} from 'react-icons/md'
import {RiPagesLine} from 'react-icons/ri'
import {SiGithubsponsors} from 'react-icons/si'
import {BsMusicNoteList} from 'react-icons/bs'
import {FaPeopleGroup} from 'react-icons/fa6'
import {preview} from './preview'

import {newsStructure} from './newsStructure'
import {virtuososStructure} from './virtuososStructure'
import {StructureBuilder} from 'sanity/structure'

const singleSchemaTittles = [
  'Головна',
  'Налаштування',
  'Контактна інформація',
  'Соцмережі',
  'Конкурс дані',
  'Володимир Горовиць',
  'Новини',
  'Партнери і спонсори',
  'Адміністрація конкурсу',
  'Статті',
  'Віртуози планет',
  'Конкурс Горовиця',
  'Твори українських композиторів',
]

const structure = (S: StructureBuilder) =>
  S.list()
    .title('Контент')
    .items([
      singleDocument(S, 'home', 'Головна', preview(S)).icon(RiPagesLine),
      S.divider(),
      ...newsStructure(S),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (items) => !singleSchemaTittles.includes(items.getTitle() || ''),
      ),
      singleDocument(
        S,
        'ukrainianWorks',
        'Твори українських композиторів',
        preview(S, 'ukrainian-works'),
      ).icon(BsMusicNoteList),
      S.divider(),
      ...virtuososStructure(S),

      S.divider(),
      singleDocument(S, 'aboutHorowitzCompetition', 'Конкурс Горовиця', preview(S, 'details')).icon(
        MdOutlineSettingsBrightness,
      ),
      singleDocument(S, 'horowitz', 'Володимир Горовиць', preview(S, 'horowitz')).icon(
        MdOutlineSettingsBrightness,
      ),
      singleDocument(
        S,
        'administration',
        'Адміністрація конкурсу',
        preview(S, 'administration'),
      ).icon(FaPeopleGroup),
      S.divider(),
      singleDocument(S, 'partners', 'Партнери і спонсори', preview(S, 'sponsors')).icon(
        SiGithubsponsors,
      ),
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
