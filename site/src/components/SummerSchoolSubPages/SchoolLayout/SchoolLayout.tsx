import { Outlet } from 'react-router-dom';

import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';
import { useAnnualSchoolData } from '@/hook/useAnnualSchoolData';
import MainBanner from '@/components/Templates/MainBanner/MainBanner';

const SchoolLayout = () => {
  const { fetchCommonData, isCommonDataFetched, banner } =
    useAnnualSummerSchoolStore();

  useAnnualSchoolData(isCommonDataFetched, fetchCommonData);

  return (
    <>
      <MainBanner banner={banner} />
      <Outlet />
    </>
  );
};

export default SchoolLayout;
