import { kyivGenevaNavigation } from '@/config/routes/navigation'
import { Routes } from '@/types/routes.d'
import { Box, Button, Container, Grid, Stack } from '@mui/material'
import { UseTranslationOptions, useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import PageTemplate from '../Common/PageTemplate'

import bannerImg from '@/assets/images/kyiv-geneva/mainPage/zheneva_main_bg.jpg'
import AboutSection from './parts/AboutSection'
import BannerSection from './parts/BannerSection'
import { MainStack } from './styled'

import pageData from '@/assets/kyiv-geneva/main/zheneva_mainPage.json'
import { i18n } from 'i18next'

const KyivGenevaPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation()

  if (language === 'ua' || language === 'en')
    return (
      <PageTemplate>
        <MainStack>
          <BannerSection bannerImg={bannerImg} breadcrumbsTitle="Конкурс Горовиця Київ-Женева" />
          <AboutSection content={pageData[language]} />
        </MainStack>
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
