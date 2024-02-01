import { PortableTextBlock } from '@portabletext/types'
import { INews } from './newsTypes'

import { CompetitionsMenu, ContactsType, SettingsResp, SociableType } from './contactsTypes'
import { Partner } from './partnersTypes'

export interface SettingsStoreState {
  sociable: SociableType | null
  logo: string | null
  contacts: { [key: string]: ContactsType | null }
  competitions: { [key: string]: CompetitionsMenu[] | null }
  fetchSettings: (language: string) => Promise<void>
  getPreviewSettings: (settings: SettingsResp[], language: string) => void
}

export interface HorowitzStoreState {
  bannerData: {
    bannerCopyright: string
    bannerImg: string
  }
  quote: { author: string[]; quote: string[] }
  upperTextBlock: PortableTextBlock[]
  lowerTextBlock: PortableTextBlock[]
  literature: PortableTextBlock[]
  isLoading: boolean
  fetchHorowitzData: (language: string) => Promise<void>
}

export interface NewsStoreState {
  newsList: INews[]
  loading: boolean
  error: string | unknown
  pageQty: number
  fetchNews: (language: string, page: number) => Promise<void>
}

export interface PartnersStoreState {
  organizers: Partner[] | null
  mainPartners: Partner[] | null
  sponsors: Partner[] | null
  generalInfoPartners: Partner[] | null
  mainInfoPartners: Partner[] | null
  officialInfoPartners: Partner[] | null
  partners: Partner[] | null

  fetchPartners: () => Promise<void>
}
