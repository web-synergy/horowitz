import contacts from './documents/contacts'
import home from './documents/home'

import news from './documents/news'
import settings from './documents/settings'
import social from './documents/social'
import {content} from './objects/content'

import sponsor from './objects/sponsor'
import video from './objects/video'
import winners from './objects/winners'
import competition from './documents/competition'
import competitionDocument from './documents/competitionDocument'
import {youtube} from './objects/youtube'
import {imageGalleryType} from './objects/imagesArray'

export const schemaTypes = [
  //documents
  home,
  news,
  competition,
  settings,
  contacts,
  social,
  competitionDocument,

  //objects
  winners,
  video,
  sponsor,
  content,
  youtube,
  imageGalleryType,
]
