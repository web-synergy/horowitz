import { Routes } from '@/types/routes.d';
import { Buttons } from '@/types/translation.d';
import { Box, Container, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Caption, StyledButton } from './styled';
import StaticImageComponent from '@/components/KyivGenevaSubPages/Common/StaticImageComponent';

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
        component="h2"
        sx={{ marginBottom: { xs: 3, md: 5, lg: 6 } }}
      >
        WFIMC
      </Typography>
      <Stack sx={{ flexDirection: { md: 'row' }, gap: 3 }}>
        <Box flex={1}>
          <StaticImageComponent imageUrl={image} alt="WFIMC members" />

          <Caption component={'p'} sx={{ marginTop: { xs: '2px', lg: 1 } }}>
            {photoCaption}
          </Caption>
        </Box>
        <Stack
          sx={{ flex: 1, justifyContent: 'space-between' }}
          gap={{ xs: 6, md: 3 }}
        >
          <Typography
            variant="bodyRegular"
            component={'p'}
            sx={{ textAlign: 'justify' }}
          >
            {about[0]}
          </Typography>
          <StyledButton
            variant="transparent"
            component={Link}
            to={`/${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_WFIMC}`}
          >
            {t(`buttons.${Buttons.READ_MORE}`)}
          </StyledButton>
        </Stack>
      </Stack>
    </Container>
  );
};

export default WFIMCSection;
