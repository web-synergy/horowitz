import React from 'react';

import { BannerWrapper } from '../styled';

import banner_img from '@/assets/images/bg_about_competition.webp';

const BannerComponent: React.FC = () => {
  return <BannerWrapper img={banner_img} />;
};

export default BannerComponent;
