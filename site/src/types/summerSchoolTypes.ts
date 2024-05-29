import { IImage } from './commonTypes';
import { MainAnnualSummerSchoolTypes } from './annualSummerSchoolTypes';
import { IPortableImgGallery } from './newsTypes';

export type ISummerSchool = {
  topText: string;
  bottomText: string;
  infographic: IImage | null;
  gallery: IPortableImgGallery | null;
  annualSummerSchool: MainAnnualSummerSchoolTypes[];
};
