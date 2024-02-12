import { usePartnersStore } from '@/store/partnersStore';
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
  const {
    organizers,
    mainPartners,
    sponsors,
    generalInfoPartners,
    partners,
    mainInfoPartners,
    officialInfoPartners,
  } = usePartnersStore();

  const navigate = useNavigate();

  const {
    t,
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    fetchData(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

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
            {organizers && (
              <LogotypesGallery
                title={t(`sponsorsPage.${Sponsors.COMP_ORG}`)}
                gallery={organizers}
              />
            )}
            <TwoGalleryStack>
              {mainPartners && (
                <LogotypesGallery
                  title={t(`sponsorsPage.${Sponsors.MAIN_PART}`)}
                  gallery={mainPartners}
                />
              )}
              {sponsors && (
                <LogotypesGallery
                  title={t(`sponsorsPage.${Sponsors.SPONSORS}`)}
                  gallery={sponsors}
                />
              )}
            </TwoGalleryStack>
            {generalInfoPartners && (
              <LogotypesGallery
                title={t(`sponsorsPage.${Sponsors.GEN_INFO_PART}`)}
                gallery={generalInfoPartners}
              />
            )}
            <TwoGalleryStack>
              {partners && (
                <LogotypesGallery
                  title={t(`sponsorsPage.${Sponsors.PARTNERS}`)}
                  gallery={partners}
                />
              )}
              {mainInfoPartners && (
                <LogotypesGallery
                  title={t(`sponsorsPage.${Sponsors.MAIN_INFO_PART}`)}
                  gallery={mainInfoPartners}
                />
              )}
            </TwoGalleryStack>
            {officialInfoPartners && (
              <LogotypesGallery
                title={t(`sponsorsPage.${Sponsors.OFF_INFO_PART}`)}
                gallery={officialInfoPartners}
              />
            )}

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
