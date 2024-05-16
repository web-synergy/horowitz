import { Controller } from 'swiper/modules';

import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/zoom';

import { PagePdf } from './PagePdf';
import { IPdfViewer } from '@/types/pdfTypes';

interface SwiperPdfProps extends IPdfViewer {
  controlledSwiper: SwiperClass | undefined;
  setControlledSwiper: (swiper: SwiperClass) => void;
  onSlideChange: (swiper: SwiperClass) => void;
}

const SwiperPdf = ({
  pdfSize,
  pageNumber,
  controlledSwiper,
  setControlledSwiper,
  onSlideChange,
}: SwiperPdfProps) => {
  return (
    <Swiper
      modules={[Controller]}
      speed={500}
      slidesPerView={1}
      controller={{ control: controlledSwiper }}
      onSwiper={setControlledSwiper}
      onSlideChange={onSlideChange}
    >
      {pageNumber.map((item) => {
        return (
          <SwiperSlide key={item}>
            <PagePdf pdfSize={pdfSize} key={item} pageNumber={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default SwiperPdf;
