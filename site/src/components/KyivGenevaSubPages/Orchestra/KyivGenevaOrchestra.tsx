import { Box, Container, Typography, styled } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';
import { orchestraData } from '@/assets/kyiv-geneva/KyivGenevaOrchestra';

const RichText = styled(Typography)(({ theme }) => ({
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
    <PageTemplate goBackUrl={Routes.KYIV_GENEVA}>
      <Container>
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
    </PageTemplate>
  );
};

export default KyivGenevaOrchestra;
