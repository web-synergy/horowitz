import { Container, Typography, styled } from '@mui/material';
import TextFormat from './parts/TextFormat';
import { Routes } from '@/types/routes.d';
import { useTranslation } from 'react-i18next';

import { conditionsData } from '@/assets/kyiv-geneva/KyivGenevaConditions';
import PageTemplate from '@/components/Common/PageTemplate';

export const RichText = styled(Typography)(() => ({
  display: 'block',
  textAlign: 'justify',
  marginBottom: '16px',
}));

const KyivGenevaConditions = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const data = conditionsData[language];

  return (
    <PageTemplate goBackUrl={Routes.KYIV_GENEVA}>
      <Container>
        <Typography component={'h1'} variant='h1'>
          {t(`navigation.${Routes.KYIV_GENEVA_CONDITIONS}`)}
        </Typography>
        {data.map((item, index) => (
          <TextFormat key={index} title={item.title} text={item.text} />
        ))}
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaConditions;
