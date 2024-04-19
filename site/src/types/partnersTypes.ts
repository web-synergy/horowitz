import { IImage } from './commonTypes';

export interface Partner {
  _key: string;
  title: string;
  img: IImage;
  link: string;
  size: number;
}

export interface PartnersType {
  organizers: Partner[] | null;
  mainPartners: Partner[] | null;
  sponsors: Partner[] | null;
  generalInfoPartners: Partner[] | null;
  mainInfoPartners: Partner[] | null;
  officialInfoPartners: Partner[] | null;
  partners: Partner[] | null;
}
