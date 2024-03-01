import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { FC } from 'react';

import { useTranslation } from 'react-i18next';

import logo_1 from '@/assets/images/kyiv-geneva/mainPage/sponsors/sponsor_logo_1.png';
import logo_2 from '@/assets/images/kyiv-geneva/mainPage/sponsors/sponsor_logo_2.png';
import logo_3 from '@/assets/images/kyiv-geneva/mainPage/sponsors/sponsor_logo_3.png';
import logo_4 from '@/assets/images/kyiv-geneva/mainPage/sponsors/sponsor_logo_4.png';
import { Routes } from '@/types/routes.d';
import { Buttons, KyivGeneva, Sponsors } from '@/types/translation.d';
import { Link } from 'react-router-dom';

const SponsorsSection: FC = () => {
  const { t } = useTranslation();
  const logotypes = [logo_1, logo_2, logo_3, logo_4];
  return (
    <Box>
      <Container>
        <Stack sx={{ gap: { xs: 3, md: 5, lg: 6 } }}>
          <Typography variant="h1" component={'h2'}>
            {t(`sponsorsPage.${Sponsors.PARTNERS}`)}
          </Typography>
          <Typography variant="h3" component={'h3'}>
            {t(`kyivGeneva.${KyivGeneva.GOVERNMENT}`)}
          </Typography>
          <Stack
            sx={{
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: {
                xs: '16px',
                lg: '28px',
              },
            }}
          >
            {logotypes.map((logo, i) => (
              <Box key={i} sx={{ height: '72px' }}>
                <Box
                  component={'img'}
                  src={logo}
                  alt="logotype"
                  sx={{
                    display: 'block',
                    height: '63px',
                  }}
                />
              </Box>
            ))}
          </Stack>
        </Stack>
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="transparent"
            component={Link}
            to={`/${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_SPONSORS}`}
            sx={{
              width: '288px',
              border: (theme) => `1px solid ${theme.palette.common.black}`,
              marginTop: 6,
            }}
          >
            {t(`buttons.${Buttons.VIEW_ALL}`)}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SponsorsSection;
