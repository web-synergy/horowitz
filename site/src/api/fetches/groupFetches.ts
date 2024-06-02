import {
  CommonGroupType,
  GroupType,
  JuniorGroupType,
  OtherGroupType,
} from '@/types/groupTypes';
import { sanityFetch } from '@/config/sanity/client';

import {
  juniorGroupCommonQuery,
  otherGroupCommonQuery,
  groupConditionQuery,
  juniorGroupArtistsQuery,
  juniorGroupBooklet,
  juniorGroupGuests,
  groupJuryQuery,
  juniorGroupParticipants,
  groupRequirementsQuery,
  juniorGroupRewardsQuery,
  juniorGroupStudentJury,
  groupTimetableQuery,
  juniorGroupVenuesQuery,
  juniorWinners,
  otherGroupPreselectionJury,
} from '../query';

export const getJuniorGroupData = (
  id: string,
  language: string
): Promise<JuniorGroupType> => {
  return sanityFetch(juniorGroupCommonQuery, { id, language });
};

export const getOtherGroupData = (
  id: string,
  language: string
): Promise<OtherGroupType> => {
  return sanityFetch(otherGroupCommonQuery, { id, language });
};

export const getGroupConditionsData = (
  id: string,
  language: string
): Promise<Pick<CommonGroupType, 'conditions'>> => {
  return sanityFetch(groupConditionQuery, { id, language });
};

export const getGroupJuryData = (
  id: string,
  language: string
): Promise<Pick<CommonGroupType, 'juries'>> => {
  return sanityFetch(groupJuryQuery, { id, language });
};

export const getGroupRequirementsData = (
  id: string,
  language: string
): Promise<Pick<CommonGroupType, 'requirements'>> => {
  return sanityFetch(groupRequirementsQuery, { id, language });
};

export const getGroupTimetableData = (
  id: string,
  language: string
): Promise<Pick<CommonGroupType, 'timetable'>> => {
  return sanityFetch(groupTimetableQuery, { id, language });
};

export const getJuniorVenuesData = (
  id: string,
  language: string
): Promise<GroupType> => {
  return sanityFetch(juniorGroupVenuesQuery, { id, language });
};

export const getJuniorRewardsData = (
  id: string,
  language: string
): Promise<GroupType> => {
  return sanityFetch(juniorGroupRewardsQuery, { id, language });
};

export const getJuniorArtistsData = (
  id: string,
  language: string
): Promise<GroupType> => {
  return sanityFetch(juniorGroupArtistsQuery, { id, language });
};

export const getJuniorStudentsJuryData = (
  id: string,
  language: string
): Promise<Pick<JuniorGroupType, 'studentJuryDesc' | 'studentsJury'>> => {
  return sanityFetch(juniorGroupStudentJury, { id, language });
};

export const getOtherGroupPreselectionJuryData = (
  id: string,
  language: string
): Promise<Pick<OtherGroupType, 'preselectionJury'>> => {
  return sanityFetch(otherGroupPreselectionJury, { id, language });
};

export const getJuniorGuestsData = (
  id: string,
  language: string
): Promise<GroupType> => {
  return sanityFetch(juniorGroupGuests, { id, language });
};

export const getJuniorBookletData = (
  id: string,
  language: string
): Promise<GroupType> => {
  return sanityFetch(juniorGroupBooklet, { id, language });
};

export const getJuniorParticipantsData = (
  id: string,
  language: string
): Promise<GroupType> => {
  return sanityFetch(juniorGroupParticipants, { id, language });
};

export const getJuniorWinnersData = (
  id: string,
  language: string
): Promise<GroupType> => {
  return sanityFetch(juniorWinners, { id, language });
};
