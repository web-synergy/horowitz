import { Box, Container, Grid, Typography, styled } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { Requirements } from '@/assets/kyiv-geneva/main/KyivGenevaRequirements';
import { RichText } from '../Conditions/KyivGenevaConditions';

const Title = styled(Typography)(() => ({
  display: 'block',
  textAlign: 'justify',
  margin: '48px 0 24px',
}));

const KyivGenevaRequirements = () => {
  const { firstRound, secondRound, thirdRound, finalRound, qualifyingRound } =
    Requirements;
  return (
    <PageTemplate>
      <Container>
        <RichText variant='h2'>Репертуарні вимоги</RichText>
        <Box sx={{ mb: { xs: '-8px', lg: '-16px' } }}>
          <Title variant='h3'>{qualifyingRound.title}</Title>
          <Box
            sx={{
              columnCount: { xs: 1, lg: 2 },
              columnGap: 3,
              mb: { xs: '-8px', lg: '-16px' },
            }}>
            {qualifyingRound.list.map(item => (
              <RichText variant='bodyRegular'>{item}</RichText>
            ))}
          </Box>
          <Grid container spacing={{ md: 0, lg: 3 }}>
            <Grid item lg={6}>
              <Title variant='h3'>{firstRound.title}</Title>
              <RichText variant='bodyRegular'>{firstRound.p}</RichText>
              {firstRound.list.map(item => (
                <RichText variant='bodyRegular'>{item}</RichText>
              ))}
              <Title variant='h3'>{secondRound.title}</Title>
              <RichText variant='bodyRegular'>{secondRound.p}</RichText>
              {secondRound.list.map(item => (
                <RichText variant='bodyRegular'>{item}</RichText>
              ))}
            </Grid>
            <Grid item lg={6}>
              <Title variant='h3'>{thirdRound.title}</Title>
              <RichText variant='bodyRegular'>{thirdRound.p}</RichText>
              <Title variant='h3'>{finalRound.title}</Title>
              <RichText variant='bodyRegular'>{finalRound.p}</RichText>
              <RichText sx={{ mt: '16px' }} variant='bodyRegular'>
                {finalRound.p2}
              </RichText>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaRequirements;
