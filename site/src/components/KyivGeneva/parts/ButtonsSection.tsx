import { kyivGenevaNavigation } from '@/config/routes/navigation';
import { Routes } from '@/types/routes.d';
import { Box, Button, Container } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BgImage, ButtonsListStack, MainBox } from './styled';

type ButtonsSectionProps = {
  bgImage: string;
};

const ButtonsSection: FC<ButtonsSectionProps> = ({ bgImage }) => {
  const { t } = useTranslation();

  return (
    <MainBox>
      <BgImage component={'img'} src={bgImage} alt="background image" />
      <Box position={'relative'} zIndex={5}>
        <Container>
          <ButtonsListStack>
            {kyivGenevaNavigation.map((navigation, i) => (
              <Button
                key={i}
                fullWidth
                component={Link}
                sx={{
                  '&.MuiButton-root': {
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    fontSize: {
                      xs: '16px',
                      lg: '18px',
                    },
                  },
                  width: 'calc(33.3333% - 38px)',
                  minWidth: 288,
                  height: {
                    xs: 48,
                    md: 60,
                  },
                }}
                to={`/${Routes.KYIV_GENEVA}/${navigation.title}`}
              >
                {t(`navigation.${navigation.title}`)}
              </Button>
            ))}
          </ButtonsListStack>
        </Container>
      </Box>
    </MainBox>
  );
};

export default ButtonsSection;
