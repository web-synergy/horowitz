import { useEffect } from 'react';
import { Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';
import MainBanner from '@/components/Common/MainBanner';

const SchoolLayout = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const { pathname } = useLocation();
  const { requestLang, fetchAnnualSummerSchool, year, banner } =
    useAnnualSummerSchoolStore();

  const yearFromPath = pathname.split('/')[2].slice(-4);

  useEffect(() => {
    const isLangTheSame = requestLang === language;
    const isYearTheSame = year && year === yearFromPath;
    if (isLangTheSame && isYearTheSame) return;

    fetchAnnualSummerSchool(language, yearFromPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, yearFromPath]);

  if (!banner) {
    return (
      <>
        <Box
          sx={{
            width: '100%',
            height: '40vh',
            backgroundColor: (theme) => theme.palette.neutral[30],
          }}
        />
        <Outlet />
      </>
    );
  }
  return (
    <>
      <MainBanner banner={banner} />
      <Outlet />
    </>
  );
};

export default SchoolLayout;
