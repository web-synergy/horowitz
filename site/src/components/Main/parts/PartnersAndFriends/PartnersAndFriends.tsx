import { FC } from 'react';

import { Box } from '@mui/material';
import { MainTitle } from '../../styled';
import { ShowMoreBtn } from './styled';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { urlFor } from '@/config/sanity/imageUrl';
import { usePartnersStore } from '@/store/partnersStore';
import { Routes } from '@/types/routes.d';
import { Buttons, MainPage } from '@/types/translation.d';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';

const PartnersAndFriends: FC = () => {
  const { t } = useTranslation();
  const {
    generalInfoPartners,
    mainInfoPartners,
    mainPartners,
    officialInfoPartners,
    partners,
    sponsors,
  } = usePartnersStore();

  const commonList = [
    ...(mainPartners || []),
    ...(sponsors || []),
    ...(generalInfoPartners || []),
    ...(partners ?? []),
    ...(mainInfoPartners ?? []),
    ...(officialInfoPartners ?? []),
  ];

  if (!commonList.length) return null; // fix slider error (Loop Warning)

  return (
    <CommonStackWrapper
      sx={{
        mb: {
          xs: 8,
          md: 12,
          lg: 15,
        },
      }}
    >
      <MainTitle component={'h2'} sx={{ textAlign: 'center' }}>
        {t(`mainPage.${MainPage.FRIENDS}`)}
      </MainTitle>

      <Box>
        <Swiper
          breakpoints={{
            320: {
              spaceBetween: 40,
              slidesPerView: 2,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 3,
              centeredSlides: true,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              centeredSlides: true,
            },
            1500: {
              slidesPerView: 5,
            },
          }}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 600,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {commonList.length &&
            commonList.map(({ _key, img, size, title }) => (
              <SwiperSlide key={_key}>
                <LazyLoadImage
                  src={img.asset && urlFor(img).url().toString()}
                  alt={title}
                  height={size}
                  width="auto"
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <ShowMoreBtn
          variant="transparent"
          component={RouterLink}
          to={Routes.SPONSORS}
        >
          {t(`buttons.${Buttons.VIEW_ALL}`)}
        </ShowMoreBtn>
      </Box>
    </CommonStackWrapper>
  );
};

export default PartnersAndFriends;
