import { IBanner } from './bannerType';
import { IImage } from './commonTypes';

export interface Member {
  name: string;
  role: string;
  img: IImage;
}

export interface IAdministration {
  banner: IBanner;
  members: Member[];
}
