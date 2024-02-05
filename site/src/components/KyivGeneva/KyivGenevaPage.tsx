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
          <Grid container rowSpacing={6} columnSpacing={7}>
            {kyivGenevaNavigation.map((navigation) => (
              <Grid item key={navigation.title} lg={4} md={6} xs={12}>
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

          <Box sx={{ my: 10, display: 'flex', gap: 10 }}>
            <Button
              component={Link}
              to={`/${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_SPONSORS}`}
            >
              Спонсори
            </Button>

            <Button
              component={Link}
              to={`/${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_WFIMC}`}
            >
              WFIMC
            </Button>
          </Box>
        </Box>
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaPage;
