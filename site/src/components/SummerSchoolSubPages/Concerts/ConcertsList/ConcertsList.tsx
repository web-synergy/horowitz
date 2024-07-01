import GridTemplate from '@/components/Templates/GridTemplate';
import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';
import { Container, Typography } from '@mui/material';
import { useAnnualSchoolData } from '@/hook/useAnnualSchoolData';
import ConcertItem from './parts/ConcertItem';
import PageTemplate from '@/components/Common/PageTemplate';
import { Routes } from '@/types/routes.d';
import { t } from 'i18next';
import { SummerSchool } from '@/types/translation.d';
import Loader from '@/components/Common/Loader';

const ConcertsList = () => {
  const { concerts, fetchConcerts, isLoading } = useAnnualSummerSchoolStore();

  useAnnualSchoolData(concerts, fetchConcerts);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <PageTemplate goBackUrl={Routes.SUMMER_SCHOOL_MAIN}>
      <Container>
        <Typography
          sx={{
            mb: { xs: '24px', md: '40px', lg: '48px' },
          }}
          variant="h1"
        >
          {t(`summerSchool.${SummerSchool.CONCERTS}`)}
        </Typography>
        {concerts && <GridTemplate list={concerts} gridItem={ConcertItem} />}
      </Container>
    </PageTemplate>
  );
};
export default ConcertsList;
