import { NavigationOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import { MutableRefObject } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/zoom';

import { PagePdf } from './PagePdf';
import { IPdfViewer } from '@/types/pdfTypes';

interface SwiperPdfProps extends IPdfViewer {
  nextRef: MutableRefObject<HTMLButtonElement | null>;
  prevRef: MutableRefObject<HTMLButtonElement | null>;
}

const SwiperPdf = ({
  pageNumber,
  pdfSize,
  nextRef,
  prevRef,
}: SwiperPdfProps) => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        speed={500}
        zoom={true}
        slidesPerView={1}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          const navigation = swiper.params.navigation as NavigationOptions;
          navigation.prevEl = prevRef.current;
          navigation.nextEl = nextRef.current;
        }}
      >
        {pageNumber.map((_, i) => {
          return (
            <SwiperSlide key={i}>
              <PagePdf pdfSize={pdfSize} key={i} pageNumber={i + 1} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default SwiperPdf;
