import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface SwiperSectionProps<T> {
  items: T[];
  card: FC<T>;
}

const SwiperSection = <T extends { _key: string }>({
  card: Card,
  items,
  ...props
}: SwiperSectionProps<T>) => {
  return (
    <Swiper
      spaceBetween={24}
      breakpoints={{
        300: {
          slidesPerView: 1.2,
        },
        768: {
          slidesPerView: 2.1,
        },
        1280: {
          slidesPerView: 3,
        },
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item._key} style={{ height: 'auto' }}>
          <Card {...item} {...props} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSection;
