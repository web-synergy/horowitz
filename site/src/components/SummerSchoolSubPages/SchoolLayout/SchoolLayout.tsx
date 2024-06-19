import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';
import { useAnnualSchoolData } from '@/hook/useAnnualSchoolData';
import MainBanner from '@/components/Templates/MainBanner/MainBanner';
import Loader from '@/components/Common/Loader';

const SchoolLayout = () => {
  const { fetchCommonData, isCommonDataFetched, banner, isLoading } =
    useAnnualSummerSchoolStore();

  useAnnualSchoolData(isCommonDataFetched, fetchCommonData);

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
