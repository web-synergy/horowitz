import { FC } from 'react';
import useWinners from './useWinners';

import { useTranslation } from 'react-i18next';

import { Buttons } from '@/types/translation.d';

import { Container, Stack, useMediaQuery, useTheme, Box } from '@mui/material';

import WinnerCard from './WinnerCard';
import { MainTitle, WinnersCardsStack, Wrapper } from './styled';

import { Routes } from '@/types/routes.d';

// !TEMP
import { ShowMoreBtn } from '@/components/NewsSection/ShowMoreBtn';
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
            alignItems: 'center',
            gap: '50px',
          }}
        >
          <MainTitle variant="h1">Переможці XIII Конкурсу</MainTitle>

          <Box>
            <ShowMoreBtn
              title={t(`buttons.${Buttons.VIEW_ALL}`)}
              link={`/${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_WINNERS}`}
              isTitleVisible={!isMobile}
            />
          </Box>
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
