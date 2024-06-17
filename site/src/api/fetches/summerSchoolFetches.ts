import { sanityFetch } from '@/config/sanity/client';
import {
  schoolData,
  annualCommonSchoolData,
  annualSchoolConditionsData,
  annualSchoolProfessorAndScheduleData,
} from '../query';
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

export const getAnnualSchoolConditionsData = (
  language: string,
  year: string
): Promise<AnnualSummerSchoolTypes> => {
  return sanityFetch(annualSchoolConditionsData, { language, year });
};

export const getAnnualSchoolProfessorsAndSchedulesData = (
  language: string,
  year: string
): Promise<AnnualSummerSchoolTypes> => {
  return sanityFetch(annualSchoolProfessorAndScheduleData, { language, year });
};
