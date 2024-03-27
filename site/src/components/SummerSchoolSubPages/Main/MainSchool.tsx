import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTemplate from '@/components/Common/PageTemplate';
import NavList from '@/components/Templates/NavList/NavList';
import { summerSchoolNavigation } from '@/config/routes/navigation';
import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';
// import PortableComponent from '@/components/Templates/PortableComponent/PortableComponent';

const MainSchool = () => {
  const { pathname } = useLocation();
  const {
    i18n: { language },
  } = useTranslation();
  const { requestLang, fetchAnnualSummerSchool, ...store } =
    useAnnualSummerSchoolStore();
  const year = pathname.slice(-4);

  console.log(store);
  useEffect(() => {
    if (requestLang === language) return;
    fetchAnnualSummerSchool(language, year);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, year]);

  return (
    <PageTemplate>
      <Container>
        <Typography>Main page for summer school</Typography>
      </Container>
      <NavList linksList={summerSchoolNavigation} path={pathname} />
    </PageTemplate>
  );
};

export default MainSchool;
