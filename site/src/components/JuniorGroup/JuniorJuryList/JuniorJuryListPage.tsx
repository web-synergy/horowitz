import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import Loader from '@/components/Common/Loader';
import GroupJuryList from '@/components/GroupPages/GroupJuryList/GroupJuryList';
import { Routes } from '@/types/routes.d';

const JuniorJuryListPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { requestLang, jury, fetchJury, isLoading } = useJuniorGroupStore();
  const {
    junior: { _id: id },
    slug,
  } = useCompetitionStore();

  useEffect(() => {
    if (requestLang === language && jury) return;
    if (!id) return;

    fetchJury(id, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jury, id, language]);

  if (isLoading) {
    <Loader />;
  }

  return (
    <GroupJuryList
      title={t(`navigation.${Routes.GROUP_JURY}`)}
      goBackLink={`${Routes.COMPETITIONS}/${slug}/${Routes.JUNIOR}`}
      juryList={jury}
    />
  );
};

export default JuniorJuryListPage;
