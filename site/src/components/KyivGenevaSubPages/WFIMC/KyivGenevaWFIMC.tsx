import { useTranslation } from 'react-i18next';

import { Caption } from '@/components/KyivGeneva/parts/styled';

import GoBackBtn from '@/components/Common/GoBackBtn';
import { Routes } from '@/types/routes.d';
import { Box, Container, Typography } from '@mui/material';
import { FC } from 'react';
import { Wrapper } from './styled';

import membersImg from '@/assets/images/kyiv-geneva/wfimc/wfimc.webp';
import content from '@/assets/kyiv-geneva/main/geneva_mainPage.json';
import PageTemplate from '@/components/Common/PageTemplate';

const KyivGenevaWFIMCPage: FC = () => {
  const {
    i18n: { language },
  } = useTranslation();

  if (language === 'ua' || language === 'en')
    return (
      <>
        <PageTemplate>
          <Container>
            <Typography
              component={'h1'}
              variant={'h1'}
              sx={{
                marginBottom: {
                  xs: 3,
                  md: 5,
                  lg: 6,
                },
              }}
            >
              WFIMC
            </Typography>
            <Box>
              <Wrapper>
                <Box sx={{ mb: { xs: 3, md: 0 } }}>
                  <Box
                    component={'img'}
                    alt={'WFIMC members'}
                    src={membersImg}
                    sx={{
                      maxWidth: '100%',
                      display: 'block',
                    }}
                  />
                  <Caption component={'p'}>
                    {content[language].wfimc.photoCaption}
                  </Caption>
                </Box>
                {content[language].wfimc.about.map((item, i) => (
                  <Typography
                    key={i}
                    component={'p'}
                    variant="bodyRegular"
                    sx={{
                      marginTop: 2,
                      textAlign: 'justify',
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Wrapper>
            </Box>
          </Container>
        </PageTemplate>
        <GoBackBtn href={Routes.KYIV_GENEVA} />
      </>
    );
};

export default KyivGenevaWFIMCPage;
