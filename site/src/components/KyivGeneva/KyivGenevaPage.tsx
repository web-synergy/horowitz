import PageTemplate from '../Common/PageTemplate';
import { Container, Grid, Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { kyivGenevaNavigation } from '@/config/routes/navigation';
import { Link } from 'react-router-dom';
import { Routes } from '@/types/routes.d';

const KyivGenevaPage = () => {
  const { t } = useTranslation();
  return (
    <PageTemplate>
      <Container>
        <div>KyivGenevaPage</div>
        <Box>
          <Grid
            container
            rowSpacing={6}
            columnSpacing={7}
            justifyContent="space-between"
          >
            {kyivGenevaNavigation.map((navigation) => (
              <Grid item xs={4} key={navigation.title}>
                <Button
                  fullWidth
                  component={Link}
                  sx={{ '&.MuiButton-root': { padding: '14px' } }}
                  to={`/${Routes.KYIV_GENEVA}/${navigation.title}`}
                >
                  {t(`kyivGeneva.${navigation.title}`)}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaPage;
