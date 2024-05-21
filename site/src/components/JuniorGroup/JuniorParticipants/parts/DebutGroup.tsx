import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { useJuniorGroupStore } from '@/store/juniorGroupStore';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import GridTemplate from '@/components/Templates/GridTemplate';
import ParticipantCard from './ParticipantCard';
import { EDebut } from '@/types/translation.d';

interface DebutGroupProps {
  title: EDebut;
}

const DebutGroup: FC<DebutGroupProps> = ({ title }) => {
  const { t } = useTranslation();
  const { debut } = useJuniorGroupStore();

  const key = title
    .split('-')
    .map((item) => (item.length > 1 ? item : item.toUpperCase()))
    .join('');

  if (!debut) {
    return;
  }

  const participants = debut[key as keyof typeof debut];

  const translatedTitle = t(`navigation.${title}`);
  return (
    <CommonStackWrapper>
      <Typography variant="h1">{translatedTitle}</Typography>
      <GridTemplate gridItem={ParticipantCard} list={participants} />
    </CommonStackWrapper>
  );
};

export default DebutGroup;
