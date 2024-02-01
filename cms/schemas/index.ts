import contacts from './documents/contacts'
import home from './documents/home'

import horowitz from './documents/horowitz'
import news from './documents/news'
import partners from './documents/partners'
import settings from './documents/settings'
import social from './documents/social'
import {content} from './objects/content'

import competition from './documents/competition'
import competitionDocument from './documents/competitionDocument'
import {imageGalleryType} from './objects/imageGalleryType'
import sponsor from './objects/sponsor'
import video from './objects/video'
import winners from './objects/winners'
import {youtube} from './objects/youtube'

export const schemaTypes = [
  //documents
  home,
  news,
  competition,
  settings,
  contacts,
  social,
  competitionDocument,
  horowitz,
  partners,

  //objects
  winners,
  video,
  sponsor,
  content,
  youtube,
  imageGalleryType,
]
