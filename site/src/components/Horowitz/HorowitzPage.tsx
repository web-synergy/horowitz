import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes } from '@/types/routes.d';
import { Box, Container, Typography } from '@mui/material';
import Loader from '../Common/Loader';
import PageTemplate from '../Common/PageTemplate';

import { useHorowitzStore } from '@/store/horowitzStore';
import LiteratureSection from './parts/LiteratureSection';
import QuoteSection from './parts/QuoteSection';
import { Buttons } from '@/types/translation.d';
import { useLiveQuery } from '@sanity/preview-kit';
import { horowitzQuery } from '@/api/query.ts';
import MainBanner from '../Templates/MainBanner/MainBanner.tsx';
import TextBlockComponent from '../Templates/TextBlockComponent/TextBlockComponent.tsx';
import { StyledButton } from './styled.ts';

const HorowitzPage: FC = () => {
  const {
    i18n: { language },
    t,
  } = useTranslation();

  const { fetchHorowitzData, requestLang } = useHorowitzStore((state) => ({
    fetchHorowitzData: state.fetchHorowitzData,
    requestLang: state.requestLang,
  }));

  useEffect(() => {
    if (requestLang === language) return;
    fetchHorowitzData(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchHorowitzData, language]);

  const horowitzData = useHorowitzStore();

  const [
    {
      bannerData,
      quote,
      upperTextBlock,
      lowerTextBlock,
      literature,
      isLoading,
    },
  ] = useLiveQuery(horowitzData, horowitzQuery, {
    language,
  });

  const [isAllLiteratureVisible, setIsAllLiteratureVisible] = useState(false);

  const [longPress, setLongPress] = useState(false);

  const handleLongPress = () => {
    setLongPress(true);
    setTimeout(() => {
      handleShowMore();
      setLongPress(false);
    }, 1000);
  };

  const handleCancelLongPress = () => {
    setLongPress(false);
  };

  const handleContextMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleShowMore = () => {
    if (!longPress) {
      setIsAllLiteratureVisible(!isAllLiteratureVisible);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <MainBanner banner={bannerData} />
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
            {t(`navigation.${Routes.HOROWITZ}`)}
          </Typography>
          <TextBlockComponent text={upperTextBlock} />
        </Container>
        {quote && <QuoteSection quote={quote} />}
        <Container component="section">
          {lowerTextBlock && (
            <Box
              sx={{
                paddingTop: { xs: 3, md: 5, lg: 6 },
                paddingBottom: { xs: 3, md: 5, lg: 6 },
              }}
            >
              <TextBlockComponent text={lowerTextBlock} />
            </Box>
          )}

          <Typography variant="subhead" sx={{ textAlign: 'left' }} gutterBottom>
            {t(`horowitzPage.literature`)}:
          </Typography>
          {literature && (
            <LiteratureSection
              literature={literature}
              isAllLiteratureVisible={isAllLiteratureVisible}
            />
          )}

          <Box
            sx={{
              width: '100%',
              textAlign: 'center',
              marginTop: '48px',
            }}
          >
            <StyledButton
              onClick={handleShowMore}
              onTouchStart={handleLongPress}
              onTouchEnd={handleCancelLongPress}
              onContextMenu={handleContextMenu}
            >
              {t(
                `buttons.${
                  isAllLiteratureVisible ? Buttons.SHOW_LESS : Buttons.SHOW_MORE
                }`
              )}
            </StyledButton>
          </Box>
        </Container>
      </PageTemplate>
    </>
  );
};

export default HorowitzPage;
