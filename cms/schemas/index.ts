import contacts from './documents/contacts'
import home from './documents/home'

import horowitz from './documents/horowitz'
import news from './documents/news'
import partners from './documents/partners'
import aboutHorowitzCompetition from './documents/aboutCompetition'
import administration from './documents/administration'
import settings from './documents/settings'
import social from './documents/social'
import content from './objects/content'
import banner from './objects/banner'

import competition from './documents/competition'
import competitionDocument from './documents/competitionDocument'
import {imageGalleryType} from './objects/imageGalleryType'
import sponsor from './objects/sponsor'
import membersAdministration from './objects/membersAdministration'
import video from './objects/video'
import winners from './objects/winners'
import {youtube} from './objects/youtube'
import virtuosos from './documents/virtuosos'
import virtuososArticle from './documents/virtuososArticle'
import ukrainianWorks from './documents/ukrainianWorks'
import article from './objects/article'
import magazinePdf from './documents/magazinePdf'

export const schemaTypes = [
  //documents
  home,
  news,
  competition,
  settings,
  contacts,
  social,
  competitionDocument,
  magazinePdf,
  horowitz,
  partners,
  administration,
  virtuosos,
  virtuososArticle,
  aboutHorowitzCompetition,
  ukrainianWorks,

  //objects
  winners,
  video,
  sponsor,
  membersAdministration,
  content,
  youtube,
  imageGalleryType,
  article,
  banner,
]
