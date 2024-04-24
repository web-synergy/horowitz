import { useEffect } from 'react';
// import { useLiveQuery } from '@sanity/preview-kit';
import { useLocation, Navigate } from 'react-router-dom';
import { useSettingsStore } from '@/store/settingStore';

import { useTranslation } from 'react-i18next';

import WarStatePlaceholderPage from '../WarStatePlaceholderPage/WarStatePlaceholderPage';
import { useCompetitionStore } from '@/store/competitionStore';
import Loader from '../Common/Loader';
import MainLayout from './parts/MainLayout';

const CompetitionPage = () => {
  const {
    i18n: { language },
  } = useTranslation();

  const { pathname } = useLocation();
  const { competitions } = useSettingsStore();
  const { fetchCommonData, isWarState, title, requestLang, isLoading } =
    useCompetitionStore();

  const competitionSlug = pathname.split('/').slice(-1)[0];

  console.log(title);
  useEffect(() => {
    if (requestLang === language && title) return;
    fetchCommonData(competitionSlug, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [competitionSlug, language]);

  const isCompetitionExist = competitions?.find(
    (item) => item.slug === competitionSlug
  );

  //ToDo: add preview request
  // const [data] = useLiveQuery(virtuosos, virtuososQuery, {
  //   language,
  // });

  if (isLoading) return <Loader />;

  if (!isCompetitionExist) {
    return <Navigate to={'404'} />;
  }

  return isWarState ? (
    <WarStatePlaceholderPage title={title} />
  ) : (
    <MainLayout />
  );
};

export default CompetitionPage;
