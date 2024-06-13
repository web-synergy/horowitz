import { sanityFetch } from '@/config/sanity/client';
import { schoolData, annualCommonSchoolData } from '../query';
import { ISummerSchool } from '@/types/summerSchoolTypes';
import { AnnualSummerSchoolTypes } from '@/types/annualSummerSchoolTypes';

export const getSummerSchoolData = (
  language: string
): Promise<ISummerSchool> => {
  return sanityFetch(schoolData, { language });
};

export const getAnnualSchoolData = (
  language: string,
  year: string
): Promise<AnnualSummerSchoolTypes> => {
  return sanityFetch(annualCommonSchoolData, { language, year });
};
