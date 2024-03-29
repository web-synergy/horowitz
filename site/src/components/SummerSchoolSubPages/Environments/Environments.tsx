import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageTemplate from '@/components/Common/PageTemplate';
import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';
import PortableComponent from '@/components/Templates/PortableComponent/PortableComponent';
import { Routes } from '@/types/routes.d';

const Environments = () => {
  const { conditions } = useAnnualSummerSchoolStore();
  const { t } = useTranslation();

  return (
    <PageTemplate>
      <Container>
        <Typography variant={'h1'} mb={{ xs: 3, md: 5, lg: 6 }}>
          {t(`navigation.${Routes.SUMMER_SCHOOL_CONDITIONS}`)}
        </Typography>
        {conditions && <PortableComponent data={conditions} />}
      </Container>
    </PageTemplate>
  );
};

export default Environments;
