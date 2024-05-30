import PageTemplate from '@/components/Common/PageTemplate';
import { Container, Typography, Stack, Box } from '@mui/material';
import { RegularText } from '@/components/Common/RegularText';
import GridTemplate from '@/components/Templates/GridTemplate';
import GroupButton from './GroupButton';
import { useCompetitionStore } from '@/store/competitionStore';
import { Routes } from '@/types/routes.d';
import SeoComponent from '@/components/Common/SEO';
import { transformText } from '@/utils/transfromText';

const MainLayout = () => {
  const {
    description,
    title,
    junior,
    intermediate,
    senior,
    juniorBtn,
    intermediateBtn,
    seniorBtn,
    slug,
  } = useCompetitionStore();

  const buttonList = [
    { title: Routes.JUNIOR, isActive: junior.isActive, btn: juniorBtn },
    {
      title: Routes.INTERMEDIATE,
      isActive: intermediate.isActive,
      btn: intermediateBtn,
    },
    { title: Routes.SENIOR, isActive: senior.isActive, btn: seniorBtn },
  ];

  const renderDescription = description && transformText(description);
  return (
    <>
      <SeoComponent title={title} canonicalUrl={slug} />
      <PageTemplate>
        <Container>
          <Stack gap={{ xs: 3, md: 5, lg: 6 }}>
            <Typography variant="h1" textAlign={'center'}>
              {title}
            </Typography>
            <Box>
              {renderDescription && (
                <RegularText blocks={renderDescription} columnCount={1} />
              )}
            </Box>

            <GridTemplate
              justify="center"
              gridItem={GroupButton}
              list={buttonList}
            />
          </Stack>
        </Container>
      </PageTemplate>
    </>
  );
};

export default MainLayout;
