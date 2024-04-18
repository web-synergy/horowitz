import { useEffect } from 'react';
// import { useLiveQuery } from '@sanity/preview-kit';
import { useLocation, Navigate } from 'react-router-dom';
import { useSettingsStore } from '@/store/settingStore';
import PageTemplate from '../Common/PageTemplate';
import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@mui/material';
import PortableComponent from '../Templates/PortableComponent/PortableComponent';
import WarStatePlaceholderPage from '../WarStatePlaceholderPage/WarStatePlaceholderPage';
import { useCompetitionStore } from '@/store/competitionStore';
import Loader from '../Common/Loader';

const CompetitionPage = () => {
  const {
    i18n: { language },
  } = useTranslation();

  const { pathname } = useLocation();
  const { competitions } = useSettingsStore();
  const {
    fetchCommonData,
    isWarState,
    title,
    requestLang,
    isLoading,
    description,
  } = useCompetitionStore();

  const competitionSlug = pathname.split('/').slice(-1)[0];

  useEffect(() => {
    if (requestLang === language) return;
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
    <PageTemplate>
      <Container>
        <Typography
          variant="h1"
          textAlign={'center'}
          mb={{ xs: 3, md: 5, lg: 6 }}
        >
          {title}
        </Typography>
        {description && <PortableComponent data={description} />}
      </Container>
    </PageTemplate>
  );
};

export default CompetitionPage;
