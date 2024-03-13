import { Navigation, Keyboard, Zoom, EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { PagePdf } from './PagePdf';
import { useState } from 'react';
import { IPdfViewer } from '@/types/pdfTypes';
import { Swiper as TSwiper } from 'swiper/types';

export default function SwiperPdf({
  pdfSize,
  pageNumber,
  isOnePage,
}: IPdfViewer) {
  const [end, setEnd] = useState<number>(2);
  const onSwiper = (swiper: TSwiper) => {
    const currentPage = swiper.activeIndex;
    const pageCounter = (): number => {
      const lastPage = pageNumber.length;
      let result = 0;
      if (currentPage + end > lastPage) {
        result = lastPage;
      } else {
        result = currentPage + 2;
      }
      return result;
    };
    setEnd(pageCounter());
  };

  return (
    <Swiper
      onSlideChange={onSwiper}
      modules={[Zoom, Navigation, Keyboard, EffectCreative]}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -900],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      effect={'creative'}
      speed={500}
      zoom={{
        maxRatio: 2,
        zoomedSlideClass: 'zoom',
      }}
      pagination={{ clickable: true }}
      keyboard={{
        enabled: true,
      }}
      navigation={true}
      slidesPerView={1}>
      {pageNumber.slice(0, end)?.map((_, i) => {
        return (
          <SwiperSlide key={i}>
            <div className='swiper-zoom-container'>
              <PagePdf
                isOnePage={isOnePage}
                pdfSize={pdfSize}
                key={i}
                pageNumber={i + 1}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
