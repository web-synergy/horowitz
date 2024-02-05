import { kyivGenevaNavigation } from '@/config/routes/navigation'
import { Routes } from '@/types/routes.d'
import { Box, Button, Container, Grid, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import PageTemplate from '../Common/PageTemplate'

import mainBgIng from '@/assets/images/kyiv-geneva/mainPage/zheneva_main_bg.jpg'
import Breadcrumbs from '../Common/Breadcrumbs'

const KyivGenevaPage = () => {
  const { t } = useTranslation()

  return (
    <PageTemplate>
      <Stack sx={{ marginBottom: { xs: '72px', md: '90px', lg: '120px' } }}>
        <Box
          sx={{
            position: 'relative',
            paddingBottom: {
              xs: 'calc(38.5% - 32px)',
              md: 'calc(43.5% - 48px)',
              lg: 'calc(42.5% - 48px)',
            },
            maxHeight: '544px',
            overflow: 'hidden',
            '::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 2,
              bgcolor: '#080708B2',
            },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
            }}
          >
            <Box
              component={'img'}
              src={mainBgIng}
              alt="background image"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'bottom',
              }}
            />
          </Box>
          <Box sx={{ position: 'relative', zIndex: 5 }}>
            <Container>
              <Breadcrumbs mode="dark" title="Конкурс Горовиця Київ-Женева" />
            </Container>
          </Box>
        </Box>
        {/* <Box height={'120px'}></Box> */}
      </Stack>
      <Container>
        {/* <Box>
          <Grid
            container
            rowSpacing={6}
            columnSpacing={7}
            justifyContent="space-between"
          >
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
        </Box> */}
      </Container>
    </PageTemplate>
  )
}

export default KyivGenevaPage
