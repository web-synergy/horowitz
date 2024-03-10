import { usePartnersStore } from '@/store/partnersStore';
import { Sponsors } from '@/types/translation.d';
import { Container, Stack } from '@mui/material';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageTemplate from '../Common/PageTemplate';

import { Routes } from '@/types/routes.d';
import LogotypesGallery from './parts/LogotypesGallery';
import { MainTitle, TwoGalleryStack } from './styled';

import { partners as partnersQuery } from '@/api/query';
import { useLiveQuery } from '@sanity/preview-kit';

const SponsorsPage: FC = () => {
  const fetchData = usePartnersStore((state) => state.fetchPartners);
  const data = usePartnersStore();
  //
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const [
    {
      organizers,
      mainPartners,
      sponsors,
      generalInfoPartners,
      partners,
      mainInfoPartners,
      officialInfoPartners,
      requestLang,
    },
  ] = useLiveQuery(data, partnersQuery, {
    language,
  });
  useEffect(() => {
    if (requestLang === language) return;
    fetchData(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <PageTemplate goBackUrl={Routes.HOME}>
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
              optRowGap={5}
            />
          )}
          <TwoGalleryStack>
            {partners && (
              <LogotypesGallery
                title={t(`sponsorsPage.${Sponsors.PARTNERS}`)}
                gallery={partners}
                optRowGap={5}
              />
            )}
            {mainInfoPartners && (
              <LogotypesGallery
                title={t(`sponsorsPage.${Sponsors.MAIN_INFO_PART}`)}
                gallery={mainInfoPartners}
                optRowGap={5}
              />
            )}
          </TwoGalleryStack>
          {officialInfoPartners && (
            <LogotypesGallery
              title={t(`sponsorsPage.${Sponsors.OFF_INFO_PART}`)}
              gallery={officialInfoPartners}
            />
          )}
        </Stack>
      </Container>
    </PageTemplate>
  );
};
export default SponsorsPage;
