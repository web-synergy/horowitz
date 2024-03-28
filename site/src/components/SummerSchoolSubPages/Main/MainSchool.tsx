import { useLocation } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';
import PageTemplate from '@/components/Common/PageTemplate';
import NavList from '@/components/Templates/NavList/NavList';
import { summerSchoolNavigation } from '@/config/routes/navigation';
import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';
import PortableComponent from '@/components/Templates/PortableComponent/PortableComponent';
import { Routes } from '@/types/routes.d';

const MainSchool = () => {
  const { t } = useTranslation();
  const { year, description } = useAnnualSummerSchoolStore();
  const { pathname } = useLocation();

  return (
    <PageTemplate>
      <Container>
        <Typography variant={'h1'} mb={{ xs: 3, md: 5, lg: 6 }}>
          {t(`navigation.${Routes.SUMMER_SCHOOL_MAIN}`, { year: year })}
        </Typography>

        {description && (
          <Box mb={{ xs: 3, md: 5, lg: 6 }}>
            <PortableComponent data={description} />
          </Box>
        )}
      </Container>
      <NavList linksList={summerSchoolNavigation} path={pathname} />
    </PageTemplate>
  );
};

export default MainSchool;
