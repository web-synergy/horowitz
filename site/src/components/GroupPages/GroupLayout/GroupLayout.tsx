import { useEffect, FC } from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MainBanner from '@/components/Common/MainBanner';
import { useCompetitionStore } from '@/store/competitionStore';
import Loader from '@/components/Common/Loader';

interface GroupLayoutProps {
  groupLoading: boolean;
}

const GroupLayout: FC<GroupLayoutProps> = ({ groupLoading }) => {
  const { pathname } = useLocation();
  const {
    i18n: { language },
  } = useTranslation();
  const { mainBanner, fetchCommonData, requestLang, isLoading } =
    useCompetitionStore();

  const competitionSlug = pathname.split('/')[2];

  useEffect(() => {
    if (requestLang === language) {
      return;
    }
    fetchCommonData(competitionSlug, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [competitionSlug, language]);

  if (groupLoading || isLoading) return <Loader />;

  if (requestLang && !mainBanner) {
    return <Navigate to={'404'} />;
  }

  return (
    <>
      {mainBanner && <MainBanner banner={mainBanner} />}
      <Outlet />
    </>
  );
};

export default GroupLayout;
