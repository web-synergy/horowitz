import { Container, Typography } from '@mui/material';
import { FC } from 'react';

import { Link as RouterLink } from 'react-router-dom';
import bg_image from '../../temp/CompetitionEvents_bg.jpg';
import { DescriptionText, MainTitle, WatchButton, Wrapper } from './styled';

import { MainPage } from '@/types/translation.d';
import { useHomeStore } from '@/store/homeStore';

import { useTranslation } from 'react-i18next';

const CompetitionEvents: FC = () => {
  const {
    events: { button, link, text, title },
  } = useHomeStore();

  const { t } = useTranslation();

  return (
    <Wrapper
      component={'section'}
      sx={{
        background: `url(${bg_image}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'left bottom',
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
        <MainTitle component={'h2'}>{title || ''}</MainTitle>
        <DescriptionText component={'p'} variant="bodyRegular">
          {text || ''}
        </DescriptionText>
        {button && link && (
          <WatchButton component={RouterLink} to={link} target="_blank">
            {button}
          </WatchButton>
        )}
      </Container>
    </Wrapper>
  );
};

export default CompetitionEvents;
