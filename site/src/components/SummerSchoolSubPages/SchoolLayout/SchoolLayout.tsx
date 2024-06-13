import { Box } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';

import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';
import { useAnnualSchoolData } from '@/hook/useAnnualSchoolData';
import MainBanner from '@/components/Common/MainBanner';
import Loader from '@/components/Common/Loader';

const SchoolLayout = () => {
  const { pathname } = useLocation();
  const { fetchCommonData, isCommonDataFetched, banner, isLoading } =
    useAnnualSummerSchoolStore();

  const yearFromPath = pathname.split('/')[2].slice(-4);

  useAnnualSchoolData(yearFromPath, isCommonDataFetched, fetchCommonData);

  if (isLoading) {
    return <Loader />;
  }

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
