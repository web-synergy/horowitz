import { IBanner } from "./bannerType";

export interface MemberImage {
  asset: {
    _ref: string;
  };
  _key: string;
  alt: string;
}

export interface Member {
  name: string;
  role: string;
  img: MemberImage;
}

export interface IAdministration {
  banner: IBanner;
  members: Member[];
}
