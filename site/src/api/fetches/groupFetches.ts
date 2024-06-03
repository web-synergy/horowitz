import {
  CommonGroupType,
  JuniorGroupType,
  OtherGroupType,
} from '@/types/groupTypes';
import { sanityFetch } from '@/config/sanity/client';

import {
  juniorGroupCommonQuery,
  otherGroupCommonQuery,
  groupConditionQuery,
  groupArtistsQuery,
  groupBooklet,
  groupGuests,
  groupJuryQuery,
  juniorGroupParticipants,
  groupRequirementsQuery,
  groupRewardsQuery,
  juniorGroupStudentJury,
  groupTimetableQuery,
  groupVenuesQuery,
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

export const getGroupVenuesData = (
  id: string,
  language: string
): Promise<Pick<CommonGroupType, 'venues'>> => {
  return sanityFetch(groupVenuesQuery, { id, language });
};

export const getGroupRewardsData = (
  id: string,
  language: string
): Promise<Pick<CommonGroupType, 'rewards'>> => {
  return sanityFetch(groupRewardsQuery, { id, language });
};

export const getGroupArtistsData = (
  id: string,
  language: string
): Promise<Pick<CommonGroupType, 'artists'>> => {
  return sanityFetch(groupArtistsQuery, { id, language });
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

export const getGroupGuestsData = (
  id: string,
  language: string
): Promise<Pick<OtherGroupType, 'guests'>> => {
  return sanityFetch(groupGuests, { id, language });
};

export const getGroupBookletData = (
  id: string,
  language: string
): Promise<Pick<CommonGroupType, 'artists'>> => {
  return sanityFetch(groupBooklet, { id, language });
};

export const getJuniorParticipantsData = (
  id: string,
  language: string
): Promise<Pick<JuniorGroupType, 'participants'>> => {
  return sanityFetch(juniorGroupParticipants, { id, language });
};

export const getOtherGroupParticipantsData = (
  id: string,
  language: string
): Promise<Pick<OtherGroupType, 'participants'>> => {
  return sanityFetch(juniorGroupParticipants, { id, language });
};

export const getJuniorWinnersData = (
  id: string,
  language: string
): Promise<Pick<JuniorGroupType, 'winners'>> => {
  return sanityFetch(juniorWinners, { id, language });
};
