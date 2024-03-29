import { kyivGenevaNavigation } from '@/config/routes/navigation';
// import { Routes } from '@/types/routes.d';

import { Box, Container } from '@mui/material';
import { FC } from 'react';

import LinksList from '@/components/Templates/NavList/NavList';
import { BgImage, MainBox } from './styled';

type ButtonsSectionProps = {
  bgImage: string;
};

const ButtonsSection: FC<ButtonsSectionProps> = ({ bgImage }) => {
  return (
    <MainBox>
      <BgImage component={'img'} src={bgImage} alt="background image" />
      <Box position={'relative'} zIndex={5}>
        <Container>
          <Box
            sx={{
              margin: {
                xs: '48px 0',
                md: '96px 0',
                lg: '120px 0',
              },
              height: {
                md: '396px',
                lg: '277px',
              },
            }}
          >
            <LinksList
              linksList={kyivGenevaNavigation}
              // path={Routes.KYIV_GENEVA}
            />
          </Box>
        </Container>
      </Box>
    </MainBox>
  );
};

export default ButtonsSection;
