import { Navigation, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import '@/components/Templates/PortableComponent/Swiper/sliderStyles.css';
import { PagePdf } from './PagePdf';
import { IPdfViewer } from '@/types/pdfTypes';

export default function SwiperPdf({
  pdfSize,
  pageNumber,
  isOnePage,
}: IPdfViewer) {
  return (
    <Swiper
      modules={[Zoom, Navigation]}
      speed={500}
      zoom={true}
      pagination={{ clickable: true }}
      navigation={true}
      slidesPerView={isOnePage ? 1 : 2}
      slidesPerGroup={isOnePage ? 1 : 2}
    >
      {pageNumber.map((_, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="swiper-zoom-container">
              <PagePdf pdfSize={pdfSize} key={i} pageNumber={i + 1} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
