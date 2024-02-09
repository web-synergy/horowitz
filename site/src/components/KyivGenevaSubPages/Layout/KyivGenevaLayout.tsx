import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
// import Breadcrumbs from '@/components/Common/Breadcrumbs';

import { ImageWrapper, TextWrapper, Image, Text } from './styled';

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
          <Image />
        </ImageWrapper>
        <TextWrapper>
          <Text />
        </TextWrapper>
      </Box>
      <Outlet />
    </>
  );
};

export default KyivGenevaLayout;
