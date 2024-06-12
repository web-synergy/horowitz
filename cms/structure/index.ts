import {singleDocument} from './singleDocument'
import {StructureBuilder} from 'sanity/structure'

import {IoSettingsSharp} from 'react-icons/io5'
import {MdOutlineSettingsBrightness} from 'react-icons/md'
import {SiInstructure, SiGithubsponsors} from 'react-icons/si'
import {RiPagesLine} from 'react-icons/ri'
import {GiTribunalJury} from 'react-icons/gi'
import {BsMusicNoteList} from 'react-icons/bs'
import {FaPeopleGroup, FaPeopleLine} from 'react-icons/fa6'
import {FaRegSun} from 'react-icons/fa'
import {preview} from './preview'

import {newsStructure} from './newsStructure'
import {virtuososStructure} from './virtuososStructure'
import {summerSchoolStructure} from './summerSchoolStructure'
import {competitionStructure} from './competitionStructure'
import {masterClassStructure} from './masterClassStructure'

const structure = (S: StructureBuilder) =>
  S.list()
    .title('Контент')
    .items([
      singleDocument(S, 'home', 'Головна', preview(S)).icon(RiPagesLine),
      S.divider(),
      ...newsStructure(S),
      S.divider(),
      ...competitionStructure(S),

      singleDocument(
        S,
        'ukrainianWorks',
        'Твори українських композиторів',
        preview(S, 'ukrainian-works'),
      ).icon(BsMusicNoteList),
      S.divider(),
      ...virtuososStructure(S),
      singleDocument(S, 'summerSchool', 'Літня музична академія', preview(S, 'summer-school')).icon(
        FaRegSun,
      ),
      ...summerSchoolStructure(S),
      ...masterClassStructure(S),

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

      singleDocument(S, 'settings', 'Налаштування', preview(S, 'contacts')).icon(IoSettingsSharp),
      S.divider(),
      S.listItem()
        .title('інші групи')
        .schemaType('group')
        .child(
          S.documentList().title('інші групи').filter('_type == "group"').apiVersion('v2023-08-30'),
        ),
      S.listItem()
        .title('Жюрі')
        .icon(FaPeopleLine)
        .schemaType('jury')
        .child(S.documentList().title('Жюрі').filter('_type == "jury"').apiVersion('v2023-08-30')),
      S.listItem()
        .title('Почесні гості')
        .schemaType('guest')
        .icon(GiTribunalJury)
        .child(
          S.documentList().title('Guests').filter('_type == "guest"').apiVersion('v2023-08-30'),
        ),
      S.divider(),
      singleDocument(S, 'documentation', 'Інструкція по роботі з текстовим полем').icon(
        SiInstructure,
      ),
    ])

export default structure
