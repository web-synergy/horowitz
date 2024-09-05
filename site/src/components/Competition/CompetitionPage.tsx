import { useEffect } from 'react';
// import { useLiveQuery } from '@sanity/preview-kit';
import { useLocation, Navigate } from 'react-router-dom';
import { useSettingsStore } from '@/store/settingStore';

import { useTranslation } from 'react-i18next';

import { useCompetitionStore } from '@/store/competitionStore';

import StubPage from '../Stub/Stub';
import SeoComponent from '../Common/SEO';
import Loader from '../Common/Loader';
import MainLayout from './parts/MainLayout';

const CompetitionPage = () => {
  const {
    i18n: { language },
  } = useTranslation();

  const { pathname } = useLocation();
  const { competitions } = useSettingsStore();
  const {
    fetchCommonData,
    isStubActive,
    title,
    stubText,
    requestLang,
    isLoading,
    slug,
  } = useCompetitionStore();

  const competitionSlug = pathname.split('/').slice(-1)[0];

  useEffect(() => {
    if (requestLang === language && title) return;
    fetchCommonData(competitionSlug, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [competitionSlug, language]);

  if (!competitions) {
    return;
  }

  const isCompetitionExist = competitions.find(
    (item) => item.slug === competitionSlug
  );

  if (isLoading) return <Loader />;

  if (!isCompetitionExist) {
    return <Navigate to={'404'} />;
  }

  return (
    <>
      <SeoComponent canonicalUrl={`/${slug}`} title={title} />
      {isStubActive ? (
        <StubPage title={title} text={stubText} />
      ) : (
        <MainLayout />
      )}
    </>
  );
};

export default CompetitionPage;
