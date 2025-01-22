import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';
import PageTemplate from '../Common/PageTemplate';
import SeoComponent from '../Common/SEO';
import { Container, Typography, Box } from '@mui/material';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { concatPositionWithData } from '@/utils/concatPositionWithData';
import { MainPerson } from './MainPerson';
import { Member } from './Member';

import { lyatoshinskiyData, revuckiyData } from '@/libs/mockedData';
import { arrangeCircles } from '@/utils/arrangeCircles';

export const ROUNDS = 4;

const GliersRoundsPage: FC = () => {
  const { t } = useTranslation();
  const { containerRef, containerSize } = useWidthBlokSize();
  const title = t(`navigation.${Routes.GLIERS_ROUNDS}`);

  const result = arrangeCircles(
    containerSize,
    lyatoshinskiyData.length + revuckiyData.length,
    ROUNDS
  );

  const data = concatPositionWithData(result, lyatoshinskiyData, revuckiyData);

  return (
    <>
      <SeoComponent
        canonicalUrl={`/${Routes.PROJECTS}/${Routes.GLIERS_ROUNDS}`}
        title={title}
      />
      <PageTemplate>
        <Container
          sx={{ marginBottom: { xs: 3, md: 5, lg: 6 } }}
          component="section"
        >
          <Typography
            variant="h1"
            sx={{
              textTransform: 'uppercase',
              marginBottom: { xs: 3, md: 5, lg: 6 },
              textAlign: 'center',
            }}
          >
            {title}
          </Typography>
          <Box
            ref={containerRef}
            sx={{
              position: 'relative',
              width: '100%',
              height: 'auto',
              aspectRatio: 1,
            }}
          >
            <MainPerson {...data[0]} />
            {data.slice(1).map((item, index) => (
              <Member {...item} key={index} />
            ))}
          </Box>
        </Container>
      </PageTemplate>
    </>
  );
};

export default GliersRoundsPage;
