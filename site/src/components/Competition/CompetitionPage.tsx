import { useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSettingsStore } from '@/store';
import PageTemplate from '../Common/PageTemplate';
import { Container } from '@mui/material';

const CompetitionPage = () => {
  const { pathname } = useLocation();

  const { competitions } = useSettingsStore();
  const {
    i18n: { language },
  } = useTranslation();
  // if ()

  const langCompetitions = competitions[language];
  const competitionName = pathname.slice(1);

  const isCompetitionExist = langCompetitions?.find(
    (item) => item.slug === competitionName
  );

  if (!isCompetitionExist) {
    return <Navigate to={'404'} />;
  }

  return (
    <PageTemplate>
      <Container>
        <div>Competition Page</div>
      </Container>
    </PageTemplate>
  );
};

export default CompetitionPage;
