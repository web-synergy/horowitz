import { FC } from 'react';

import { useHomeStore } from '@/store/homeStore';

import { useTranslation } from 'react-i18next';

import { Buttons } from '@/types/translation.d';

import { Box } from '@mui/material';

import { HomeSection } from '../Common/HomeSection';
import WinnerCard from './WinnerCard';
import { useAnimationCard } from '@/hook/useAnimationCard';

const CompetitionWinners: FC = () => {
  const {
    winners: { list, title, link },
  } = useHomeStore();
  const { isVisible, ref } = useAnimationCard();

  const { t } = useTranslation();

  return (
    <Box ref={ref}>
      <HomeSection
        title={title || ''}
        link={link || ''}
        linkTitle={t(`buttons.${Buttons.VIEW_ALL}`)}
      >
        {list && (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: { xs: 4, md: 3 },
            }}
          >
            {list.map((winner, index) => (
              <WinnerCard
                key={winner._key}
                item={winner}
                isVisible={isVisible}
                delay={index + 2}
              />
            ))}
          </Box>
        )}
      </HomeSection>
    </Box>
  );
};

export default CompetitionWinners;
