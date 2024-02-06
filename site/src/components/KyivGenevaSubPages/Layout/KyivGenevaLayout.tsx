import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import banner from '@/assets/images/kyiv-geneva/banner-full.jpeg';
// import Breadcrumbs from '@/components/Common/Breadcrumbs';

import { ImageWrapper } from './styled';

const KyivGenevaLayout = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          background: 'rgb(8, 7, 8)',
          position: 'relative',
          zIndex: '-2',
        }}
      >
        <ImageWrapper>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${banner})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',

              zIndex: '-1',
            }}
          />
        </ImageWrapper>
      </Box>
      <Outlet />
    </>
  );
};

export default KyivGenevaLayout;
