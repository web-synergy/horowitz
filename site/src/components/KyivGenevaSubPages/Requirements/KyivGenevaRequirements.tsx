import { Box, Container, Typography, styled } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { useTranslation } from 'react-i18next';

import { Routes } from '@/types/routes.d';
import GoBackBtn from '@/components/Common/GoBackBtn';
import { requirementsData } from '@/assets/kyiv-geneva/KyivGenevaRequirements';
import { theme } from '@/theme';

const Title = styled(Typography)(() => ({
  display: 'block',
  textAlign: 'justify',
  margin: '24px 0',
  [theme.breakpoints.up('md')]: {
    margin: '40px 0',
  },

  [theme.breakpoints.up('lg')]: {
    margin: '48px 0 ',
  },
}));
const RichText = styled(Typography)(() => ({
  display: 'block',
  textAlign: 'justify',
  marginBottom: '16px',

  // [theme.breakpoints.up('lg')]: {
  //   marginBottom: '24px',
  // },
}));
const KyivGenevaRequirements = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const data = requirementsData[language];

  const { firstRound, secondRound, thirdRound, finalRound, qualifyingRound } =
    data;

  return (
    <PageTemplate>
      <Container
        sx={{
          pt: { xs: 3, md: 5, lg: 6 },
          pb: { xs: 9, md: 12, lg: 15 },
        }}
      >
        <Typography component={'h1'} variant="h1">
          {t(`navigation.${Routes.KYIV_GENEVA_REQUIREMENTS}`)}
        </Typography>
        <Box sx={{ mb: '-16px' }}>
          <Title variant="h3">{qualifyingRound.title}</Title>

          {qualifyingRound.list?.map((item, index) => (
            <RichText key={index} variant="bodyRegular">
              {item}
            </RichText>
          ))}
          <Title variant="h3">{firstRound.title}</Title>
          <RichText variant="bodyRegular">{firstRound.p}</RichText>
          {firstRound.list?.map((item, index) => (
            <RichText key={index} variant="bodyRegular">
              {item}
            </RichText>
          ))}
          <Title variant="h3">{secondRound.title}</Title>
          <RichText variant="bodyRegular">{secondRound.p}</RichText>
          {secondRound.list?.map((item, index) => (
            <RichText key={index} variant="bodyRegular">
              {item}
            </RichText>
          ))}
          <Title variant="h3">{thirdRound.title}</Title>
          <RichText variant="bodyRegular">{thirdRound.p}</RichText>
          <Title variant="h3">{finalRound.title}</Title>
          <RichText variant="bodyRegular">{finalRound.p}</RichText>
          <RichText variant="bodyRegular">{finalRound.p2}</RichText>
        </Box>
      </Container>
      <GoBackBtn href={Routes.KYIV_GENEVA} />
    </PageTemplate>
  );
};

export default KyivGenevaRequirements;
