import contacts from './documents/contacts'
import home from './documents/home'

import news from './documents/news'
import settings from './documents/settings'
import social from './documents/social'
import {content} from './objects/content'
import horowitz from './documents/horowitz'

import sponsor from './objects/sponsor'
import video from './objects/video'
import winners from './objects/winners'
import competition from './documents/competition'
import competitionDocument from './documents/competitionDocument'

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

  //objects
  winners,
  video,
  sponsor,
  content,
]
