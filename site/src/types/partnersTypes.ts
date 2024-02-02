interface PartnerImage {
  asset: {
    _ref: string
  }
  _key: string
  alt: string
}

export interface Partner {
  _key: string
  title: string
  img: PartnerImage
  link: string
}

export interface PartnersResp {
  organizers: Partner[]
  mainPartners: Partner[]
}
