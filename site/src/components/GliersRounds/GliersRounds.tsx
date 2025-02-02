import { FC } from 'react';
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';
import PageTemplate from '../Common/PageTemplate';
import SeoComponent from '../Common/SEO';

import { useWidthBlokSize } from '@/hook/useWidthBlockSize';

import { TabletLayout } from './tablet/TabletLayout';
import { MobileLayout } from './mobile/MobileLayout';

import { membersData } from '@/libs/mockedData';

const GliersRoundsPage: FC = () => {
  const { t } = useTranslation();
  const { containerRef, containerSize } = useWidthBlokSize();
  const title = t(`navigation.${Routes.GLIERS_ROUNDS}`);
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));

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
            {isNotMobile ? (
              <TabletLayout width={containerSize} members={membersData} />
            ) : (
              <MobileLayout width={containerSize} members={membersData} />
            )}
          </Box>
        </Container>
      </PageTemplate>
    </>
  );
};

export default GliersRoundsPage;
