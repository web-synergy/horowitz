import { useLocation } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageTemplate from '@/components/Common/PageTemplate';
import NavList from '@/components/Templates/NavList/NavList';
import PortableComponent from '@/components/Templates/PortableComponent/PortableComponent';
import GoBackBtn from '@/components/Common/GoBackBtn';
import { Routes } from '@/types/routes.d';
import { summerSchoolNavigation } from '@/config/routes/navigation';
import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';

const MainSchool = () => {
  const { t } = useTranslation();
  const {
    year,
    description,
    isActiveConcerts,
    isActiveConditions,
    isActiveOrchestra,
    isActiveParticipants,
    isActiveProfessors,
    isActiveSchedule,
  } = useAnnualSummerSchoolStore();
  const { pathname } = useLocation();

  const navigation = summerSchoolNavigation.map((item) => {
    switch (item.title) {
      case Routes.SUMMER_SCHOOL_CONCERTS:
        return { ...item, isDisabled: isActiveConcerts };
      case Routes.SUMMER_SCHOOL_CONDITIONS:
        return { ...item, isDisabled: isActiveConditions };
      case Routes.SUMMER_SCHOOL_PROFESSORS:
        return { ...item, isDisabled: isActiveProfessors };
      case Routes.SUMMER_SCHOOL_PLACES:
        return { ...item, isDisabled: isActiveOrchestra };
      case Routes.SUMMER_SCHOOL_SCHEDULES:
        return { ...item, isDisabled: isActiveSchedule };
      case Routes.SUMMER_SCHOOL_STUDENTS:
        return { ...item, isDisabled: isActiveParticipants };
      default:
        return { ...item, isDisabled: true };
    }
  });

  return (
    <>
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
        <NavList linksList={navigation} path={pathname} />
      </PageTemplate>
      <GoBackBtn href={Routes.SUMMER_SCHOOL} />
    </>
  );
};

export default MainSchool;
