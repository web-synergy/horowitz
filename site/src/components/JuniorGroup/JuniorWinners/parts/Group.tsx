import { FC } from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ETabs, EDebut } from '@/types/translation.d';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import GridTemplate from '@/components/Templates/GridTemplate';
import WinnerItem from '@/components/GroupPages/GroupWinners/parts/WinnerItem';

interface GroupWinnersProps {
  title: ETabs | EDebut;
}

const GroupWinners: FC<GroupWinnersProps> = ({ title }) => {
  const { winners } = useJuniorGroupStore();
  const { t } = useTranslation();
  if (!winners) {
    return;
  }

  const key = title
    .split('-')
    .map((item) => (item.length > 1 ? item : item.toUpperCase()))
    .join('');

  const renderWinners = winners[key as keyof typeof winners];

  const renderTitle = t(`winners.${title}`);
  return (
    <CommonStackWrapper>
      <Typography variant="h1" component="h2">
        {renderTitle}
      </Typography>
      <GridTemplate gridItem={WinnerItem} list={renderWinners} />
    </CommonStackWrapper>
  );
};

export default GroupWinners;
