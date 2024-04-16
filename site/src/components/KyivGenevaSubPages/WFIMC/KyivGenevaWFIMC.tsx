import { useTranslation } from 'react-i18next';

import { Caption } from '@/components/KyivGeneva/parts/styled';

import { Routes } from '@/types/routes.d';
import { Container, Typography } from '@mui/material';
import { FC } from 'react';
import { Wrapper, ImageWrapper } from './styled';
import StaticImageComponent from '../Common/StaticImageComponent';

import membersImg from '@/assets/images/kyiv-geneva/wfimc/wfimc.webp';
import content from '@/assets/kyiv-geneva/main/geneva_mainPage.json';
import PageTemplate from '@/components/Common/PageTemplate';

const KyivGenevaWFIMCPage: FC = () => {
  const {
    i18n: { language },
  } = useTranslation();

  if (language === 'ua' || language === 'en')
    return (
      <PageTemplate goBackUrl={Routes.KYIV_GENEVA}>
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

          <Wrapper>
            <ImageWrapper>
              <StaticImageComponent
                alt={'WFIMC members'}
                imageUrl={membersImg}
              />
              <Caption component={'p'}>
                {content[language].wfimc.photoCaption}
              </Caption>
            </ImageWrapper>

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
        </Container>
      </PageTemplate>
    );
};

export default KyivGenevaWFIMCPage;
