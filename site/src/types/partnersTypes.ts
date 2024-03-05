import { IImage } from './commonTypes';

export interface Partner {
  _key: string;
  title: string;
  img: IImage;
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
