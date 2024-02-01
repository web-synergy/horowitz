export interface Partner {
  _key: string
  title: string
  img: {
    asset: {
      _ref: string
    }
  }
  link: string
}

export interface PartnersResp {
  organizers: Partner[]
  mainPartners: Partner[]
}
