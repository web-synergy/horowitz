import { FC } from 'react';
import { Box } from '@mui/material';
import { BannerType } from '@/types/bannerType';

import Banner from './parts/Banner';

interface MainBannerProps {
  banner: BannerType | undefined | null;
}

const MainBanner: FC<MainBannerProps> = ({ banner }) => {
  if (!banner || !banner.img) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '35vh',
          backgroundColor: (theme) => theme.palette.neutral[30],
        }}
      />
    );
  }

  return <Banner banner={banner} />;
};

export default MainBanner;
