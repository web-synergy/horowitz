import { JuniorGroupType } from '@/types/groupTypes';
import { sanityFetch } from '@/config/sanity/client';

import {
  juniorGroupArtistsQuery,
  juniorGroupBooklet,
  juniorGroupCommonQuery,
  juniorGroupConditionQuery,
  juniorGroupGuests,
  juniorGroupJuryQuery,
  juniorGroupParticipants,
  juniorGroupRequirementsQuery,
  juniorGroupRewardsQuery,
  juniorGroupStudentJury,
  juniorGroupTimetableQuery,
  juniorGroupVenuesQuery,
  juniorWinners,
} from '../query';

export const getJuniorGroupData = (
  id: string,
  language: string
): Promise<JuniorGroupType> => {
  return sanityFetch(juniorGroupCommonQuery, { id, language });
};

export const getJuniorConditionsData = (
  id: string,
  language: string
): Promise<JuniorGroupType> => {
  return sanityFetch(juniorGroupConditionQuery, { id, language });
};

export const getJuniorRequirementsData = (
  id: string,
  language: string
): Promise<JuniorGroupType> => {
  return sanityFetch(juniorGroupRequirementsQuery, { id, language });
};

export const getJuniorTimetableData = (
  id: string,
  language: string
): Promise<JuniorGroupType> => {
  return sanityFetch(juniorGroupTimetableQuery, { id, language });
};

export const getJuniorVenuesData = (
  id: string,
  language: string
): Promise<JuniorGroupType> => {
  return sanityFetch(juniorGroupVenuesQuery, { id, language });
};

export const getJuniorRewardsData = (
  id: string,
  language: string
): Promise<JuniorGroupType> => {
  return sanityFetch(juniorGroupRewardsQuery, { id, language });
};

export const getJuniorArtistsData = (
  id: string,
  language: string
): Promise<JuniorGroupType> => {
  return sanityFetch(juniorGroupArtistsQuery, { id, language });
};

export const getJuniorJuryData = (
  id: string,
  language: string
): Promise<JuniorGroupType> => {
  return sanityFetch(juniorGroupJuryQuery, { id, language });
};

export const getJuniorStudentsJuryData = (
  id: string,
  language: string
): Promise<JuniorGroupType> => {
  return sanityFetch(juniorGroupStudentJury, { id, language });
};

export const getJuniorGuestsData = (
  id: string,
  language: string
): Promise<JuniorGroupType> => {
  return sanityFetch(juniorGroupGuests, { id, language });
};

export const getJuniorBookletData = (
  id: string,
  language: string
): Promise<JuniorGroupType> => {
  return sanityFetch(juniorGroupBooklet, { id, language });
};

export const getJuniorParticipantsData = (
  id: string,
  language: string
): Promise<JuniorGroupType> => {
  return sanityFetch(juniorGroupParticipants, { id, language });
};

export const getJuniorWinnersData = (
  id: string,
  language: string
): Promise<JuniorGroupType> => {
  return sanityFetch(juniorWinners, { id, language });
};
