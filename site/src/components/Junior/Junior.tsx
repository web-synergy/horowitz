import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageTemplate from '../Common/PageTemplate';
import SeoComponent from '../Common/SEO';
import GoBackBtn from '../Common/GoBackBtn';
import { useCompetitionStore } from '@/store/competitionStore';
import { Routes } from '@/types/routes.d';

const Junior = () => {
  const { t } = useTranslation();
  const { slug } = useCompetitionStore();

  return (
    <>
      <SeoComponent canonicalUrl={`${slug}/junior`} />

      <PageTemplate>
        <Container>
          <Typography variant="h1">
            {t(`navigation.${Routes.JUNIOR}`)}
          </Typography>
        </Container>
      </PageTemplate>
      <GoBackBtn href={slug} />
    </>
  );
};

export default Junior;
