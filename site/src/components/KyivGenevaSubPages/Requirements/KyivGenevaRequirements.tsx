import { Box, Container, Typography, styled } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { useTranslation } from 'react-i18next';

import { RichText } from '../Conditions/KyivGenevaConditions';

import { Routes } from '@/types/routes.d';
import LinkGoBack from '@/components/Common/LinkGoBack';
import { KyivGeneva } from '@/types/translation.d';
import Breadcrumbs from '@/components/Common/Breadcrumbs';
import requirementsData from '@/assets/kyiv-geneva/KyivGenevaRequirements';
interface ITextData {
  title: string;
  p: string;
  p2?: string;
  list?: string[];
  h4?: string;
}
interface IRequirements {
  firstRound: ITextData;
  secondRound: ITextData;
  thirdRound: ITextData;
  finalRound: ITextData;
  qualifyingRound: ITextData;
}

const Title = styled(Typography)(() => ({
  display: 'block',
  textAlign: 'justify',
  margin: '48px 0 24px',
}));

const KyivGenevaRequirements = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const data: IRequirements = requirementsData[language] as IRequirements;

  if (!data) return null;
  const { firstRound, secondRound, thirdRound, finalRound, qualifyingRound } =
    data;

  return (
    <PageTemplate>
      <Container>
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '60px', md: '80px', lg: '100px' },
            left: { xs: '16px', md: '40px', lg: '80px' },
            maxWidth: '100%',
            zIndex: 10,
          }}>
          <Breadcrumbs
            history={[
              {
                title: t(`navigation.${Routes.KYIV_GENEVA}`),
                href: `/${Routes.KYIV_GENEVA}`,
              },
            ]}
            title={t(`kyivGeneva.${Routes.KYIV_GENEVA_REQUIREMENTS}`)}
            mode='dark'
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '60px', md: '80px', lg: '100px' },
            left: { xs: '16px', md: '40px', lg: '80px' },
            maxWidth: '100%',
            zIndex: 10,
          }}>
          <Breadcrumbs
            history={[
              {
                title: t(`navigation.${Routes.KYIV_GENEVA}`),
                href: `/${Routes.KYIV_GENEVA}`,
              },
            ]}
            title={t(`kyivGeneva.${Routes.KYIV_GENEVA_CONDITIONS}`)}
            mode='dark'
          />
        </Box>
        <Box sx={{ my: { xs: '48px', lg: '120px' } }}>
          <Typography
            component={'h1'}
            sx={{ mb: { xs: '-24px', lg: '0px' } }}
            variant='h1'>
            {t(`kyivGeneva.${Routes.KYIV_GENEVA_REQUIREMENTS}`)}
          </Typography>
          <Box sx={{ mb: { xs: '-8px', lg: '-16px' } }}>
            <Title variant='h3'>{qualifyingRound.title}</Title>
            <Box
              sx={{
                columnCount: { xs: 1, lg: 2 },
                columnGap: 3,
                mb: { xs: '-8px', lg: '-16px' },
              }}>
              {qualifyingRound.list?.map(item => (
                <RichText variant='bodyRegular'>{item}</RichText>
              ))}
              <Title variant='h3'>{firstRound.title}</Title>
              <RichText variant='bodyRegular'>{firstRound.p}</RichText>
              {firstRound.list?.map(item => (
                <RichText variant='bodyRegular'>{item}</RichText>
              ))}
              <Title variant='h3'>{secondRound.title}</Title>
              <RichText variant='bodyRegular'>{secondRound.p}</RichText>
              {secondRound.list?.map(item => (
                <RichText variant='bodyRegular'>{item}</RichText>
              ))}
              <Title variant='h3'>{thirdRound.title}</Title>
              <RichText variant='bodyRegular'>{thirdRound.p}</RichText>
              <Title variant='h3'>{finalRound.title}</Title>
              <RichText variant='bodyRegular'>{finalRound.p}</RichText>
              <RichText sx={{ mt: '16px' }} variant='bodyRegular'>
                {finalRound.p2}
              </RichText>
            </Box>
          </Box>
          <Box sx={{ mt: { xs: '48px', lg: '62px' } }}>
            <LinkGoBack
              title={t(`kyivGeneva.${KyivGeneva.GO_KYIV_GENEVA}`)}
              href={`/${Routes.KYIV_GENEVA}`}
            />
          </Box>
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaRequirements;
