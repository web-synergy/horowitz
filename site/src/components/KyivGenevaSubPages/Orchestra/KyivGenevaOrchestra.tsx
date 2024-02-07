import { Box, Container, Typography, styled } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';
import { orchestraData } from '@/assets/kyiv-geneva/KyivGenevaOrchestra';
import { theme } from '@/theme';
import LinkGoBack from '@/components/KyivGenevaSubPages/Common/LinkGoBack';
import { KyivGeneva } from '@/types/translation.d';
import { useEffect } from 'react';

const RichText = styled(Typography)(() => ({
  display: 'block',
  textAlign: 'justify',
  marginBottom: '8px',
  [theme.breakpoints.up('lg')]: {
    marginBottom: '0px',
  },
}));

const KyivGenevaOrchestra = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  const data = orchestraData[language];

  return (
    <PageTemplate>
      <Container>
        <Box sx={{ my: { xs: '48px', lg: '120px' } }}>
          <Typography
            sx={{
              mb: { xs: '24px', lg: '48px' },
            }}
            component={'h1'}
            variant='h1'>
            {t(`kyivGeneva.${Routes.KYIV_GENEVA_ORCHESTRA}`)}
          </Typography>

          {data.map((item, index) => (
            <Box key={index}>
              <Typography
                sx={{ mb: { xs: '24px', lg: '48px' } }}
                component={'h3'}
                variant='h3'>
                {item.title}
              </Typography>
              <Box
                sx={{
                  columnCount: { lg: 2 },
                  columnGap: { lg: 3 },
                  mb: { xs: '24px', lg: '48px' },
                }}>
                {item.text.map((item, index) => (
                  <RichText key={index}>{item}</RichText>
                ))}
              </Box>
              <Box sx={{ mb: { xs: '24px', lg: '48px' } }}>
                <Box
                  sx={{ width: '100%', maxHeight: '681px' }}
                  component={'img'}
                  src={item.img.src}
                  alt={item.img.title}
                />
                <Typography
                  sx={{ color: theme => theme.palette.neutral[60] }}
                  variant='smallText'>
                  {item.img.title}
                </Typography>
              </Box>
            </Box>
          ))}
          <LinkGoBack
            title={t(`kyivGeneva.${KyivGeneva.GO_KYIV_GENEVA}`)}
            href={`/${Routes.KYIV_GENEVA}`}
          />
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaOrchestra;
