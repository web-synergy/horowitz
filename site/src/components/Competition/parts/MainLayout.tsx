import PageTemplate from '@/components/Common/PageTemplate';
import { Container, Typography, Stack, Box } from '@mui/material';
import PortableComponent from '@/components/Templates/PortableComponent/PortableComponent';
import GridTemplate from '@/components/Templates/GridTemplate';
import GroupButton from './GroupButton';
import { useCompetitionStore } from '@/store/competitionStore';
import { Routes } from '@/types/routes.d';

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

  return (
    <PageTemplate>
      <Container>
        <Stack gap={{ xs: 3, md: 5, lg: 6 }}>
          <Typography variant="h1" textAlign={'center'}>
            {title}
          </Typography>
          <Box>{description && <PortableComponent data={description} />}</Box>

          <GridTemplate
            justify="center"
            gridItem={GroupButton}
            list={buttonList}
          />
        </Stack>
      </Container>
    </PageTemplate>
  );
};

export default MainLayout;
