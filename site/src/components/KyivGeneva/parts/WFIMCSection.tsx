import { Routes } from '@/types/routes.d';
import { Box, Container, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Caption, ContentStack, ImageBox, StyledButton } from './styled';
import { Buttons } from '@/types/translation.d';

type WFIMCSectionProps = {
  image: string;
  wfimc_content: {
    about: Array<string>;
    photoCaption: string;
  };
};

const WFIMCSection: FC<WFIMCSectionProps> = ({
  image,
  wfimc_content: { about, photoCaption },
}) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Typography
        variant="h1"
        sx={{ marginBottom: { xs: '24px', lg: '48px' } }}
      >
        WFIMC
      </Typography>
      <ContentStack>
        <ImageBox>
          <Box
            component={'img'}
            src={image}
            sx={{ width: '100%', height: '100%' }}
          />
          <Caption component={'p'}>{photoCaption}</Caption>
        </ImageBox>
        <Box
          position={'relative'}
          sx={{
            width: {
              xs: '100%',
              lg: 'calc(50% - 12px)',
            },
          }}
        >
          <Typography
            variant="bodyRegular"
            component={'p'}
            sx={{ textAlign: 'justify' }}
          >
            {about[0]}
          </Typography>
          <StyledButton
            variant="secondary"
            component={Link}
            to={`/${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_WFIMC}`}
          >
            {t(`buttons.${Buttons.SHOW_MORE}`)}
          </StyledButton>
        </Box>
      </ContentStack>
    </Container>
  );
};

export default WFIMCSection;
