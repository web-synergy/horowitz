import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { GroupPageProps } from '@/types/groupTypes';
import { Routes } from '@/types/routes.d';
import { useCompetitionStore } from '@/store/competitionStore';
import { useOtherGroupStore } from '@/store/otherGroupStore';
import { useOtherGroupData } from '@/hook/useOtherGroupData';

import { getGroupNavigation } from '@/config/routes/navigation';

import GroupMainPage from '@/components/GroupPages/GroupMain/GroupMain';
import SeoComponent from '@/components/Common/SEO';

const OtherGroupMainPage: FC<GroupPageProps> = ({ group }) => {
  const { t } = useTranslation();
  const { slug } = useCompetitionStore();
  const {
    fetchCommonData,
    isActiveBooklet,
    isActiveConditions,
    isActiveGuests,
    isActiveJury,
    isActiveArtists,
    isActiveParticipants,
    isActiveRequirements,
    isActiveRewards,
    isActivePreselectionJury,
    isActiveTimetable,
    isActiveVenues,
    isActiveWinners,
    isCommonDataFetched,
  } = useOtherGroupStore();

  useOtherGroupData(isCommonDataFetched, fetchCommonData, group);

  const navigation = getGroupNavigation(false).map((item) => {
    switch (item.title) {
      case Routes.GROUP_CONDITIONS:
        return { ...item, isActive: isActiveConditions };
      case Routes.GROUP_JURY:
        return { ...item, isActive: isActiveJury };
      case Routes.GROUP_PRESELECTION_JURY:
        return { ...item, isActive: isActivePreselectionJury };
      case Routes.GROUP_TIMETABLE:
        return { ...item, isActive: isActiveTimetable };
      case Routes.GROUP_REQUIREMENTS:
        return { ...item, isActive: isActiveRequirements };
      case Routes.GROUP_PARTICIPANTS:
        return { ...item, isActive: isActiveParticipants };
      case Routes.GROUP_REWARDS:
        return { ...item, isActive: isActiveRewards };
      case Routes.GROUP_ORCHESTRA:
        return { ...item, isActive: isActiveArtists };
      case Routes.GROUP_WINNERS:
        return { ...item, isActive: isActiveWinners };
      case Routes.GROUP_VENUES:
        return { ...item, isActive: isActiveVenues };
      case Routes.GROUP_GUESTS:
        return { ...item, isActive: isActiveGuests };
      case Routes.GROUP_BOOKLET:
        return { ...item, isActive: isActiveBooklet };
      default:
        return item;
    }
  });

  const title = t(`navigation.${group}`);
  const goBackLink = `/${Routes.COMPETITIONS}/${slug}`;

  return (
    <>
      <SeoComponent canonicalUrl={`${slug}/${group}`} title={title} />
      <GroupMainPage
        goBackLink={goBackLink}
        navList={navigation}
        title={title}
      />
    </>
  );
};

export default OtherGroupMainPage;
