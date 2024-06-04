import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack, Typography } from '@mui/material';
import PersonPhoto from '@/components/Templates/PersonPhoto/PersonPhoto';
import { WinnerType, ParticipantType } from '@/types/groupTypes';

type WinnerItemType = WinnerType & {
  participantData: ParticipantType;
};
interface WinnerItemProps {
  item: WinnerItemType;
}

const WinnerItem: FC<WinnerItemProps> = ({ item }) => {
  const { champion, participantData } = item;
  const { t } = useTranslation();
  const { avatar, name } = participantData;

  const notAwarded = t(`winners.reject`);
  return (
    <Stack gap={{ xs: 2, md: 3 }}>
      <PersonPhoto alt={name} image={avatar} />
      <Stack gap={{ xs: 1, md: 2, lg: 3 }}>
        <Typography variant="subhead">{name || notAwarded}</Typography>
        <Typography color="primary">{champion}</Typography>
      </Stack>
    </Stack>
  );
};

export default WinnerItem;
