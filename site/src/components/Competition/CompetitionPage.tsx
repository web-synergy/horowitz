import { useLocation, Navigate } from 'react-router-dom';
import { useSettingsStore } from '@/store/settingStore';
import PageTemplate from '../Common/PageTemplate';

import { Container } from '@mui/material';
import WarStatePlaceholderPage from '../WarStatePlaceholderPage/WarStatePlaceholderPage';
import { useState } from 'react';

const CompetitionPage = () => {
  const [isWarTime] = useState(true);
  const { pathname } = useLocation();

  const { competitions } = useSettingsStore();

  const langCompetitions = competitions;
  const title = langCompetitions ? langCompetitions[0]?.title[0] : '';

  const competitionName = pathname.slice(1);
  const isCompetitionExist = langCompetitions?.find(
    (item) => item.slug === competitionName
  );

  if (!isCompetitionExist) {
    return <Navigate to={'404'} />;
  }

  return isWarTime ? (
    <WarStatePlaceholderPage title={title} />
  ) : (
    <PageTemplate>
      <Container>
        <div>Competition Page</div>
      </Container>
    </PageTemplate>
  );
};

export default CompetitionPage;
