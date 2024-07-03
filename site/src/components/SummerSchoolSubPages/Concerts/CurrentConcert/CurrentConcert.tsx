import { t } from 'i18next';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import { useAnnualSummerSchoolStore } from '@/store/annualSummerSchoolStore';
import { useAnnualSchoolData } from '@/hook/useAnnualSchoolData';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';

import PageTemplate from '@/components/Common/PageTemplate';
import Image from '@/components/Common/Image';
import TextBlockComponent from '@/components/Templates/TextBlockComponent/TextBlockComponent';

import { getImageData } from '@/utils/getImageData';
import { urlFor } from '@/config/sanity/imageUrl';
import { Routes } from '@/types/routes.d';
import { SummerSchool } from '@/types/translation.d';
import Loader from '@/components/Common/Loader';

const CurrentConcert = () => {
  const {
    currentConcert,
    getCurrentConcert,
    concerts,
    fetchConcerts,
    isLoading,
  } = useAnnualSummerSchoolStore();
  const { key } = useParams();
  const theme = useTheme();
  const { containerRef, containerSize } = useWidthBlokSize();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useAnnualSchoolData(concerts, fetchConcerts);

  const imageWidth = isMobile ? 400 : Math.floor((containerSize - 24) / 2);

  useEffect(() => {
    if (key) getCurrentConcert(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, concerts]);

  if (!currentConcert) {
    return null;
  }
  const { img } = currentConcert;
  const {
    dimensions: { width, height },
  } = getImageData(img.asset._ref);

  const aspectRatio = width / height;

  const imageHeight = Math.floor(imageWidth / aspectRatio);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <PageTemplate goBackUrl={Routes.SUMMER_SCHOOL_CONCERTS}>
      <Container>
        <Typography
          sx={{
            mb: { xs: '24px', md: '40px', lg: '48px' },
          }}
          variant="h1"
        >
          {t(`summerSchool.${SummerSchool.CONCERT_PROGRAM}`)}
        </Typography>

        <Box ref={containerRef}>
          <Box
            sx={{
              float: { xs: 'unset', md: 'left' },
              mr: { xs: 0, md: 3 },
              mb: { xs: 3, md: 0 },
            }}
          >
            <Image
              height={imageHeight}
              width={imageWidth}
              isLazyLoading={false}
              alt="poster"
              styles={{ margin: '0 auto' }}
              src={urlFor(img)
                .auto('format')
                .width(imageWidth)
                .height(imageHeight)
                .toString()}
            />
          </Box>

          <TextBlockComponent
            text={currentConcert.concertPrograms}
            column={1}
            inline={true}
          />
        </Box>
      </Container>
    </PageTemplate>
  );
};
export default CurrentConcert;
