import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';

const SchoolLayout = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const { pathname } = useLocation();
  const { requestLang, fetchAnnualSummerSchool, year } =
    useAnnualSummerSchoolStore();

  const yearFromPath = pathname.split('/')[2].slice(-4);

  useEffect(() => {
    const isLangTheSame = requestLang === language;
    const isYearTheSame = year && year === yearFromPath;
    if (isLangTheSame && isYearTheSame) return;

    fetchAnnualSummerSchool(language, yearFromPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, yearFromPath]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default SchoolLayout;
