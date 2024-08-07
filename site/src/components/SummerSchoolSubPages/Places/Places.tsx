import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageTemplate from '@/components/Common/PageTemplate';
import GoBackBtn from '@/components/Common/GoBackBtn';
import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';
import { useAnnualSchoolData } from '@/hook/useAnnualSchoolData';
import PortableComponent from '@/components/Templates/PortableComponent/PortableComponent';
import { Routes } from '@/types/routes.d';
import Loader from '@/components/Common/Loader';

const Places = () => {
  const { orchestra, slug, fetchArtists, isLoading } =
    useAnnualSummerSchoolStore();
  const { t } = useTranslation();

  useAnnualSchoolData(orchestra, fetchArtists);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <PageTemplate>
        <Container>
          <Typography variant={'h1'} mb={{ xs: 3, md: 5, lg: 6 }}>
            {t(`navigation.${Routes.SUMMER_SCHOOL_PLACES}`)}
          </Typography>
          {orchestra && <PortableComponent data={orchestra} />}
        </Container>
      </PageTemplate>
      <GoBackBtn href={`${Routes.SUMMER_SCHOOL}/${slug}`} />
    </>
  );
};

export default Places;
