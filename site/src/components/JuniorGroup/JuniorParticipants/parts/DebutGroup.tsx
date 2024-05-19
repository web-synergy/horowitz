import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { ParticipantType } from '@/types/groupTypes';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';
import GridTemplate from '@/components/Templates/GridTemplate';
import ParticipantCard from './ParticipantCard';

interface DebutGroupProps {
  title: string;
  participants: ParticipantType[];
}

const DebutGroup: FC<DebutGroupProps> = ({ participants, title }) => {
  const { t } = useTranslation();

  const translatedTitle = t(`navigation.${title}`);
  return (
    <CommonStackWrapper>
      <Typography variant="h1">{translatedTitle}</Typography>
      <GridTemplate gridItem={ParticipantCard} list={participants} />
    </CommonStackWrapper>
  );
};

export default DebutGroup;
