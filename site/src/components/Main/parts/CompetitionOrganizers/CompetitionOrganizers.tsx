import { FC, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LogotypesStack, Wrapper } from './styled';

import { MainPage } from '@/types/translation.d';
import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { MainTitle } from '../../styled';

import { urlFor } from '@/config/sanity/imageUrl';
import { usePartnersStore } from '@/store/partnersStore';

const CompetitionOrganizers: FC = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const { organizers, requestLang, fetchPartners } = usePartnersStore();

  useEffect(() => {
    const requestCondition =
      !organizers || (organizers && requestLang !== language);
    if (requestCondition) {
      fetchPartners(language);
    }
  }, [fetchPartners, language, organizers, requestLang]);

  return (
    <Wrapper component={'section'}>
      <Container>
        {organizers && (
          <>
            <MainTitle
              component={'h2'}
              sx={{ marginBottom: '48px', textAlign: 'center' }}
            >
              {t(`mainPage.${MainPage.ORGANIZERS}`)}
            </MainTitle>
            <LogotypesStack>
              {organizers.map((organizer) => (
                <LazyLoadImage
                  key={organizer._key}
                  height={organizer.size}
                  width="auto"
                  src={
                    organizer.img?.asset &&
                    urlFor(organizer.img).url().toString()
                  }
                  alt={organizer.title}
                />
              ))}
            </LogotypesStack>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default CompetitionOrganizers;
