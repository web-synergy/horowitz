import { Box, Container, Typography, styled } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';
import { orchestraData } from '@/assets/kyiv-geneva/KyivGenevaOrchestra';
import { theme } from '@/theme';
import GoBackBtn from '@/components/Common/GoBackBtn';

const RichText = styled(Typography)(() => ({
  display: 'block',
  textAlign: 'justify',
  marginBottom: '16px',

  [theme.breakpoints.up('lg')]: {
    marginBottom: '0px',
  },
}));

const KyivGenevaOrchestra = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const data = orchestraData[language];

  return (
    <PageTemplate>
      <Container
        sx={{ pt: { xs: 3, md: 5, lg: 6 }, pb: { xs: 9, md: 12, lg: 15 } }}
      >
        <Typography component={'h1'} variant="h1">
          {t(`navigation.${Routes.KYIV_GENEVA_ORCHESTRA}`)}
        </Typography>

        {data.map((item, index) => (
          <Box key={index}>
            <Typography
              sx={{
                mt: { xs: 3, md: 5, lg: 6 },
                mb: { xs: 3, md: 5, lg: 6 },
              }}
              component={'h3'}
              variant="h3"
            >
              {item.title}
            </Typography>
            <Box
              sx={{
                columnCount: { lg: 2 },
                columnGap: { lg: 3 },
                mb: { xs: 3, md: 5, lg: 6 },
              }}
            >
              {item.text.map((item, index) => (
                <RichText key={index}>{item}</RichText>
              ))}
            </Box>
            <Box>
              <Box
                sx={{
                  width: '100%',
                  maxHeight: '681px',
                  objectFit: 'cover',
                }}
                component={'img'}
                src={item.img.src}
                alt={item.img.title}
              />
              <Typography
                sx={{ color: (theme) => theme.palette.neutral[60] }}
                variant="smallText"
              >
                {item.img.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Container>
      <GoBackBtn href={Routes.KYIV_GENEVA} />
    </PageTemplate>
  );
};

export default KyivGenevaOrchestra;
