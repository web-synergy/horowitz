import { Container, Typography, styled } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import TextFormat from './parts/TextFormat';
import { theme } from '@/theme';
import { Routes } from '@/types/routes.d';
import { useTranslation } from 'react-i18next';

import { conditionsData } from '@/assets/kyiv-geneva/KyivGenevaConditions';
import GoBackBtn from '@/components/Common/GoBackBtn';

export const RichText = styled(Typography)(() => ({
  display: 'block',
  textAlign: 'justify',
  marginBottom: '8px',
  [theme.breakpoints.up('lg')]: {
    marginBottom: '16px',
  },
}));

const KyivGenevaConditions = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const data = conditionsData[language];
  return (
    <PageTemplate>
      <Container sx={{ pt: { xs: 3, lg: 6 }, pb: { xs: 9, md: 12, lg: 15 } }}>
        <Typography
          sx={{ mb: { xs: '-24px', lg: '0px' } }}
          component={'h1'}
          variant='h1'>
          {t(`navigation.${Routes.KYIV_GENEVA_CONDITIONS}`)}
        </Typography>
        {data.map((item, index) => (
          <TextFormat key={index} title={item.title} text={item.text} />
        ))}
      </Container>
      <GoBackBtn href={Routes.KYIV_GENEVA} />
    </PageTemplate>
  );
};

export default KyivGenevaConditions;
