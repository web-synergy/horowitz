// import { useLocation } from 'react-router-dom';
import PageTemplate from '@/components/Common/PageTemplate'
import { Box, Container, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import GoBackBtn from '@/components/Common/GoBackBtn'
import PortableComponent from '@/components/Templates/PortableComponent/PortableComponent'
import { summerSchoolNavigation } from '@/config/routes/navigation'
import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore'
import { Routes } from '@/types/routes.d'

import { CommonStackWrapper } from '@/components/Common/styledComponents'
import NavListWrapper from '@/components/Templates/NavList/NavListWrapper'
const MainSchool = () => {
  const { t } = useTranslation()
  const {
    year,
    description,
    isActiveConcerts,
    isActiveConditions,
    isActiveOrchestra,
    isActiveParticipants,
    isActiveProfessors,
    isActiveSchedule,
  } = useAnnualSummerSchoolStore()

  // const { pathname } = useLocation();

  const navigation = summerSchoolNavigation.map(item => {
    switch (item.title) {
      case Routes.SUMMER_SCHOOL_CONCERTS:
        return { ...item, isActive: isActiveConcerts }
      case Routes.SUMMER_SCHOOL_CONDITIONS:
        return { ...item, isActive: isActiveConditions }
      case Routes.SUMMER_SCHOOL_PROFESSORS:
        return { ...item, isActive: isActiveProfessors }
      case Routes.SUMMER_SCHOOL_PLACES:
        return { ...item, isActive: isActiveOrchestra }
      case Routes.SUMMER_SCHOOL_SCHEDULES:
        return { ...item, isActive: isActiveSchedule }
      case Routes.SUMMER_SCHOOL_STUDENTS:
        return { ...item, isActive: isActiveParticipants }
      default:
        return { ...item, isActive: true }
    }
  })

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
        <CommonStackWrapper>
          <NavListWrapper
            sx={{
              height: {
                md: '228px',
                lg: '168px',
              },
            }}
            linksList={navigation}
          />
        </CommonStackWrapper>
      </PageTemplate>
      <GoBackBtn href={Routes.SUMMER_SCHOOL} />
    </>
  )
}

export default MainSchool
