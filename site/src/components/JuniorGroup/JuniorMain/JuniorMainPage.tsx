import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import { getGroupNavigation } from '@/config/routes/navigation';
import { Routes } from '@/types/routes.d';
import Loader from '@/components/Common/Loader';
import SeoComponent from '@/components/Common/SEO';
import GroupMainPage from '@/components/GroupPages/GroupMain/GroupMain';

const JuniorMainPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const {
    slug,
    junior: { _id: id },
    isLoading: compLoading,
  } = useCompetitionStore();
  const {
    fetchCommonData,
    requestLang,
    isActiveBooklet,
    isActiveConditions,
    isActiveGuests,
    isActiveJury,
    isActiveOrchestra,
    isActiveParticipants,
    isActiveRequirements,
    isActiveRewards,
    isActiveStudentsJury,
    isActiveTimetable,
    isActiveVenues,
    isActiveWinners,
    isLoading: juniorLoading,
    isCommonDataFetched,
  } = useJuniorGroupStore();

  useEffect(() => {
    if (requestLang === language && isCommonDataFetched) return;
    if (!id) return;
    fetchCommonData(id, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, id]);

  const navigation = getGroupNavigation(true).map((item) => {
    switch (item.title) {
      case Routes.GROUP_CONDITIONS:
        return { ...item, isActive: isActiveConditions };
      case Routes.GROUP_JURY:
        return { ...item, isActive: isActiveJury };
      case Routes.GROUP_STUDENT_JURY:
        return { ...item, isActive: isActiveStudentsJury };
      case Routes.GROUP_TIMETABLE:
        return { ...item, isActive: isActiveTimetable };
      case Routes.GROUP_REQUIREMENTS:
        return { ...item, isActive: isActiveRequirements };
      case Routes.GROUP_PARTICIPANTS:
        return { ...item, isActive: isActiveParticipants };
      case Routes.GROUP_REWARDS:
        return { ...item, isActive: isActiveRewards };
      case Routes.GROUP_ORCHESTRA:
        return { ...item, isActive: isActiveOrchestra };
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

  const title = t(`navigation.${Routes.JUNIOR}`);

  if (compLoading || juniorLoading) {
    <Loader />;
  }
  return (
    <>
      <SeoComponent canonicalUrl={`${slug}/junior`} title={title} />
      <GroupMainPage goBackLink={slug} navList={navigation} title={title} />
    </>
  );
};

export default JuniorMainPage;
