import { usePartnersStore } from '@/store';
import { Sponsors, Buttons } from '@/types/translation.d';
import { Box, Container, Stack } from '@mui/material';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PageTemplate from '../Common/PageTemplate';

import GoBackBtn from './parts/GoBackBtn';
import LogotypesGallery from './parts/LogotypesGallery';
import { MainTitle, TwoGalleryStack } from './styled';

const SponsorsPage: FC = () => {
  const fetchData = usePartnersStore((state) => state.fetchPartners);
  const organizers = usePartnersStore((state) => state.organizers);
  const mainPartners = usePartnersStore((state) => state.mainPartners);
  const sponsors = usePartnersStore((state) => state.sponsors);
  const generalInfoPartners = usePartnersStore(
    (state) => state.generalInfoPartners
  );
  const partners = usePartnersStore((state) => state.partners);
  const mainInfoPartners = usePartnersStore((state) => state.mainInfoPartners);
  const officialInfoPartners = usePartnersStore(
    (state) => state.officialInfoPartners
  );

  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    scrollTo(0, 0);
    if (!organizers) fetchData();
  }, []);

  if (
    !organizers ||
    !mainPartners ||
    !sponsors ||
    !generalInfoPartners ||
    !partners ||
    !mainInfoPartners ||
    !officialInfoPartners
  )
    return null;
  return (
    <Box
      component={'section'}
      sx={{
        padding: {
          xs: '48px 0',
          lg: '120px 0',
        },
      }}
    >
      <PageTemplate>
        <Container>
          <MainTitle component={'h1'}>
            {t(`sponsorsPage.${Sponsors.MAIN_TITLE}`)}
          </MainTitle>
          <Stack spacing={6}>
            <LogotypesGallery
              title={t(`sponsorsPage.${Sponsors.COMP_ORG}`)}
              gallery={organizers}
            />
            <TwoGalleryStack>
              <LogotypesGallery
                title={t(`sponsorsPage.${Sponsors.MAIN_PART}`)}
                gallery={mainPartners}
              />
              <LogotypesGallery
                title={t(`sponsorsPage.${Sponsors.SPONSORS}`)}
                gallery={sponsors}
              />
            </TwoGalleryStack>
            <LogotypesGallery
              title={t(`sponsorsPage.${Sponsors.GEN_INFO_PART}`)}
              gallery={generalInfoPartners}
            />
            <TwoGalleryStack>
              <LogotypesGallery
                title={t(`sponsorsPage.${Sponsors.PARTNERS}`)}
                gallery={partners}
              />
              <LogotypesGallery
                title={t(`sponsorsPage.${Sponsors.MAIN_INFO_PART}`)}
                gallery={mainInfoPartners}
              />
            </TwoGalleryStack>
            <LogotypesGallery
              title={t(`sponsorsPage.${Sponsors.OFF_INFO_PART}`)}
              gallery={officialInfoPartners}
            />

            <GoBackBtn
              title={t(`buttons.${Buttons.GO_BACK_HOME}`)}
              onClick={() => navigate(-1)}
            />
          </Stack>
        </Container>
      </PageTemplate>
    </Box>
  );
};
export default SponsorsPage;
