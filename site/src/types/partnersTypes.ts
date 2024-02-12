interface PartnerImage {
  asset: {
    _ref: string;
  };
  _key: string;
  alt: string;
}

export interface Partner {
  _key: string;
  title: string;
  img: PartnerImage;
  link: string;
  size: number;
}

export interface PartnersResp {
  organizers: Partner[];
  mainPartners: Partner[];
  sponsors: Partner[];
  generalInfoPartners: Partner[];
  mainInfoPartners: Partner[];
  officialInfoPartners: Partner[];
  partners: Partner[];
}
