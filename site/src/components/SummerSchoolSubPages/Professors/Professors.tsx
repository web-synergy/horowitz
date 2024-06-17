import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import GridTemplate from '@/components/Templates/GridTemplate';
import PageTemplate from '@/components/Common/PageTemplate';

import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';
import { useAnnualSchoolData } from '@/hook/useAnnualSchoolData';
import ProfessorCard from './parts/ProfessorCard';
import { Routes } from '@/types/routes.d';

const Professors = () => {
  const { t } = useTranslation();

  const { professors, fetchProfessorsAndSchedules, slug } =
    useAnnualSummerSchoolStore();

  useAnnualSchoolData(professors, fetchProfessorsAndSchedules);

  const goBackLink = `/${Routes.SUMMER_SCHOOL}/${slug}`;
  console.log(professors);
  return (
    <PageTemplate goBackUrl={goBackLink}>
      <Container>
        <Typography
          component={'h1'}
          variant="h1"
          sx={{
            marginBottom: { xs: '24px', md: '40px', lg: '48px' },
            textAlign: 'start',
          }}
        >
          {t(`navigation.${Routes.SUMMER_SCHOOL_PROFESSORS}`)}
        </Typography>
        {professors && (
          <GridTemplate
            list={professors}
            gridItem={({ item }) => <ProfessorCard professor={item} />}
          />
        )}
      </Container>
    </PageTemplate>
  );
};

export default Professors;
