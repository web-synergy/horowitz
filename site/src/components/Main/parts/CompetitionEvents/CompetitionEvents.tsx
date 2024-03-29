import { Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';

import { Link as RouterLink } from 'react-router-dom';
import bg_image from '../../temp/CompetitionEvents_bg.jpg';
import { DescriptionText, MainTitle, WatchButton, Wrapper } from './styled';

import { MainPage, Buttons } from '@/types/translation.d';

// !TEMP
import { useTranslation } from 'react-i18next';
import eventData from '../../temp/CompetitionEventsData.json';

const CompetitionEvents: FC = () => {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));

  const { t } = useTranslation();

  const buttonTitle = isMobile
    ? [Buttons.WATCH_ONLINE_XS]
    : [Buttons.WATCH_ONLINE];

  return (
    <Wrapper
      component={'section'}
      sx={{
        background: `url(${bg_image}) center no-repeat`,
        backgroundSize: 'cover',
      }}
    >
      <Container>
        <Typography
          variant="subhead"
          component={'p'}
          sx={{
            color: (theme) => theme.palette.primary.main,
            marginBottom: 1.5,
          }}
        >
          {t(`mainPage.${MainPage.COMP_EVENTS}`)}
        </Typography>
        <MainTitle component={'h2'}>{eventData.title}</MainTitle>
        <DescriptionText component={'p'} variant="bodyRegular">
          {eventData.description}
        </DescriptionText>
        <WatchButton component={RouterLink} to={eventData.link} target="_blank">
          {t(`buttons.${buttonTitle}`)}
        </WatchButton>
      </Container>
    </Wrapper>
  );
};

export default CompetitionEvents;
