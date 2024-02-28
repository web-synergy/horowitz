import { FC, useEffect } from 'react';

import { LogotypesStack, Wrapper } from './styled';

import { MainPage } from '@/types/translation.d';
import { Box, Container } from '@mui/material';
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
                <Box
                  key={organizer._key}
                  component={'img'}
                  sx={{
                    width: 'auto',
                    height: {
                      xs: Math.floor(organizer.size * 0.8),
                      md: Math.floor(organizer.size * 0.9),
                      lg: organizer.size,
                    },
                  }}
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
