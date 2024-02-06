import { useTranslation } from 'react-i18next'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

import PageTemplate from '@/components/Common/PageTemplate'
import { Caption } from '@/components/KyivGeneva/parts/styled'
import GoBackBtn from '@/components/Sponsors/parts/GoBackBtn'
import { Box, Container, Link, Stack, Typography } from '@mui/material'
import { FC, useEffect } from 'react'
import { ImgBox, MainBox } from './syled'

import membersImg from '@/assets/images/kyiv-geneva/wfimc/wfimc.jpeg'
import content from '@/assets/kyiv-geneva/main/geneva_mainPage.json'

const KyivGenevaWFIMCPage: FC = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  if (language === 'ua' || language === 'en')
    return (
      <PageTemplate>
        <Container>
          <MainBox>
            <Typography
              component={'h1'}
              variant={'h1'}
              sx={{
                marginBottom: {
                  xs: '24px',
                  lg: '48px',
                },
              }}
            >
              WFIMC
            </Typography>
            <Box>
              <ImgBox>
                <Box component={'img'} alt={'WFIMC members'} src={membersImg} maxWidth={'100%'} />
                <Caption>{content[language].wfimc.photoCaption}</Caption>
              </ImgBox>
              <Box>
                {content[language].wfimc.about.map((item, i) => (
                  <Typography
                    key={i}
                    component={'p'}
                    variant="bodyRegular"
                    sx={{ marginTop: { xs: '8px', lg: '16px' }, textAlign: 'justify' }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
            <Box sx={{ clear: 'both' }}></Box>

            <Stack
              sx={{
                marginTop: {
                  xs: '24px',
                  md: '48px',
                },
                flexDirection: {
                  xs: 'column',
                  md: 'row',
                },
                justifyContent: 'space-between',
                gap: '48px',
              }}
            >
              <Box sx={{ order: { xs: 1, md: 0 } }}>
                <GoBackBtn title={t('genevaMainPage.BTN_GO_BACK')} onClick={() => navigate(-1)} />
              </Box>

              <Link
                component={RouterLink}
                to={'https://www.wfimc.org/'}
                target="_blank"
                sx={{ alignSelf: 'end', color: '#0B2DA3', fontWeight: '500' }}
              >
                WFIMC
              </Link>
            </Stack>
          </MainBox>
        </Container>
      </PageTemplate>
    )
}

export default KyivGenevaWFIMCPage
