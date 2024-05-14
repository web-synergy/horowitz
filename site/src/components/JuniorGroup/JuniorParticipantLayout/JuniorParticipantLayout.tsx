import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import { useCompetitionStore } from '@/store/competitionStore';
import TabSection from './parts/TabSection';
import Loader from '@/components/Common/Loader';
import PageTemplate from '@/components/Common/PageTemplate';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import { Routes } from '@/types/routes.d';
import { Tabs } from '@/types/translation.d';
import GoBackBtn from '@/components/Common/GoBackBtn';

const JuniorParticipantLayout = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { requestLang, junior, fetchParticipants, isLoading } =
    useJuniorGroupStore();
  const {
    junior: { _id: id },
  } = useCompetitionStore();
  const { pathname } = useLocation();
  const pagePath = pathname.split('/').slice(-1)[0];
  const prevPageMain = pathname.split('/').slice(0, 4).join('/');
  const prevPageGroup = pathname.split('/').slice(0, 5).join('/');

  useEffect(() => {
    if (requestLang === language && junior) return;
    if (!id) return;

    fetchParticipants(id, language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [junior, id, language]);

  if (isLoading) {
    <Loader />;
  }

  const goBackLink =
    pagePath === Tabs.JUNIOR || pagePath === Routes.GROUP_PARTICIPANTS
      ? prevPageMain
      : prevPageGroup;

  return (
    <>
      <PageTemplate>
        <Container>
          <CommonStackWrapper>
            <Typography variant="h1">
              {t(`navigation.${Routes.GROUP_PARTICIPANTS}`)}
            </Typography>
            <TabSection />
            <Outlet />
          </CommonStackWrapper>
        </Container>
      </PageTemplate>
      <GoBackBtn href={goBackLink} importantHref={true} />
    </>
  );
};

export default JuniorParticipantLayout;
