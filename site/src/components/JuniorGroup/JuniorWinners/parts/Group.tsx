import { FC } from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ETabs, EDebut } from '@/types/translation.d';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import GridTemplate from '@/components/Templates/GridTemplate';
import WinnerItem from '@/components/GroupPages/GroupWinners/parts/WinnerItem';
import { ImagesArray } from '@/components/Templates/PortableComponent/parts/ImageComponent';

interface GroupWinnersProps {
  title: ETabs | EDebut;
}

const GroupWinners: FC<GroupWinnersProps> = ({ title }) => {
  const { winners, galleries } = useJuniorGroupStore();
  const { t } = useTranslation();
  if (!winners) {
    return;
  }

  const key = title
    .split('-')
    .map((item) => (item.length > 1 ? item : item.toUpperCase()))
    .join('');

  const renderWinners = winners[key as keyof typeof winners];
  const gallery = galleries && galleries[key as keyof typeof galleries];

  const renderTitle = t(`navigation.${title}`);
  return (
    <CommonStackWrapper>
      <Typography variant="h1" component="h2">
        {renderTitle}
      </Typography>
      <GridTemplate
        gridItem={WinnerItem}
        list={renderWinners}
        justify="center"
      />
      {gallery && <ImagesArray value={gallery} />}
    </CommonStackWrapper>
  );
};

export default GroupWinners;