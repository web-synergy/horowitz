import { useTranslation } from 'react-i18next'

import PageTemplate from '@/components/Common/PageTemplate'
import { Caption } from '@/components/KyivGeneva/parts/styled'

import GoBackBtn from '@/components/Common/GoBackBtn'
import { Routes } from '@/types/routes.d'
import { Box, Container, Typography } from '@mui/material'
import { FC } from 'react'
import { MainBox, Wrapper } from './styled'

import membersImg from '@/assets/images/kyiv-geneva/wfimc/wfimc.jpeg'
import content from '@/assets/kyiv-geneva/main/geneva_mainPage.json'

const KyivGenevaWFIMCPage: FC = () => {
  const {
    i18n: { language },
  } = useTranslation()

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
              <Wrapper>
                <Box>
                  <Box
                    component={'img'}
                    alt={'WFIMC members'}
                    src={membersImg}
                    sx={{ maxWidth: '100%', display: 'block' }}
                  />
                  <Caption component={'p'}>{content[language].wfimc.photoCaption}</Caption>
                </Box>
                {content[language].wfimc.about.map((item, i) => (
                  <Typography
                    key={i}
                    component={'p'}
                    variant="bodyRegular"
                    sx={{
                      marginTop: { xs: '8px', lg: '16px' },
                      textAlign: 'justify',
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Wrapper>
            </Box>
          </MainBox>
        </Container>
        <GoBackBtn href={Routes.KYIV_GENEVA} />
      </PageTemplate>
    )
}

export default KyivGenevaWFIMCPage
