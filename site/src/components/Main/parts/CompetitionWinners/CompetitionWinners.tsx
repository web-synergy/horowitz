import { FC } from 'react';
import useWinners from './useWinners';

import { useTranslation } from 'react-i18next';

import { Buttons } from '@/types/translation.d';

import { Container, Stack, useMediaQuery, useTheme } from '@mui/material';
import ShowMoreBtn from '../NewsSection/ShowMoreBtn';
import WinnerCard from './WinnerCard';
import { MainTitle, WinnersCardsStack, Wrapper } from './styled';

// !TEMP
import fakeData from '../../temp/fakeDataWinners.json';
import winner1Img from '../../temp/winner_1.jpg';
import winner2Img from '../../temp/winner_2.jpg';
import winner3Img from '../../temp/winner_3.jpg';

const CompetitionWinners: FC = () => {
  const { isVisible, ref } = useWinners();

  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('md'));
  const { t } = useTranslation();

  // !TEMP
  const images = [winner1Img, winner2Img, winner3Img];

  return (
    <Wrapper component={'section'} ref={ref}>
      <Container>
        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '50px',
          }}
        >
          <MainTitle variant="h1">Переможці XIII Конкурсу</MainTitle>
          <ShowMoreBtn
            title={t(`buttons.${Buttons.VIEW_ALL}`)}
            link={'/'}
            isTitleVisible={!isMobile}
          />
        </Stack>
        <WinnersCardsStack>
          {/* ! TEMP */}
          {fakeData.map(({ id, ...props }, i) => {
            return (
              <WinnerCard
                key={id}
                {...{ ...props, image: images[i], isVisible, delay: i + 2 }}
              />
            );
          })}
        </WinnersCardsStack>
      </Container>
    </Wrapper>
  );
};

export default CompetitionWinners;
