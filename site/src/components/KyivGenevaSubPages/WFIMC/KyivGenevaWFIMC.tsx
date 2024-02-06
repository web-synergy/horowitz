import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import PageTemplate from '@/components/Common/PageTemplate'
import { Caption } from '@/components/KyivGeneva/parts/styled'
import GoBackBtn from '@/components/Sponsors/parts/GoBackBtn'
import { Box, Container, Typography } from '@mui/material'
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

            <Box marginTop={6}>
              <GoBackBtn title={t('genevaMainPage.BTN_GO_BACK')} onClick={() => navigate(-1)} />
            </Box>
          </MainBox>
        </Container>
      </PageTemplate>
    )
}

export default KyivGenevaWFIMCPage
