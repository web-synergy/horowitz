import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';
import PageTemplate from '@/components/Common/PageTemplate';
import GoBackBtn from '@/components/Common/GoBackBtn';
import PortableComponent from '@/components/Templates/PortableComponent/PortableComponent';
import { Routes } from '@/types/routes.d';
import { useAnnualSchoolData } from '@/hook/useAnnualSchoolData';

const Environments = () => {
  const { conditions, slug, fetchConditions } = useAnnualSummerSchoolStore();

  const { t } = useTranslation();

  useAnnualSchoolData(conditions, fetchConditions);

  return (
    <>
      <PageTemplate>
        <Container>
          <Typography variant={'h1'} mb={{ xs: 3, md: 5, lg: 6 }}>
            {t(`navigation.${Routes.SUMMER_SCHOOL_CONDITIONS}`)}
          </Typography>
          {conditions && <PortableComponent data={conditions} />}
        </Container>
      </PageTemplate>
      <GoBackBtn href={`${Routes.SUMMER_SCHOOL}/${slug}`} />
    </>
  );
};

export default Environments;
