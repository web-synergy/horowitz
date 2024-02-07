import { Box, Container, Typography, styled } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import TextFormat from './parts/TextFormat';
import { theme } from '@/theme';
import { Routes } from '@/types/routes.d';
import { useTranslation } from 'react-i18next';
import { Buttons } from '@/types/translation.d';
import LinkGoBack from '@/components/KyivGenevaSubPages/Common/LinkGoBack';
import { conditionsData } from '@/assets/kyiv-geneva/KyivGenevaConditions';
import { useEffect } from 'react';

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
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  const data = conditionsData[language];
  return (
    <PageTemplate>
      <Container sx={{ pt: { xs: 6, lg: 15 }, pb: { xs: 9, md: 12, lg: 15 } }}>
        <Typography
          sx={{ mb: { xs: '-24px', lg: '0px' } }}
          component={'h1'}
          variant="h1"
        >
          {t(`navigation.${Routes.KYIV_GENEVA_CONDITIONS}`)}
        </Typography>
        {data.map((item, index) => (
          <TextFormat key={index} title={item.title} text={item.text} />
        ))}
        <Box sx={{ mt: '48px' }}>
          <LinkGoBack
            title={t(`buttons.${Buttons.GO_KYIV_GENEVA}`)}
            href={`/${Routes.KYIV_GENEVA}`}
          />
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaConditions;
