import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import PersonPhoto from '@/components/Templates/PersonPhoto/PersonPhoto';
import { WinnerType } from '@/types/groupTypes';

interface WinnerItemProps {
  item: WinnerType;
}

const WinnerItem: FC<WinnerItemProps> = ({ item }) => {
  const { champion, img, name } = item;

  return (
    <Stack gap={{ xs: 2, md: 3 }}>
      <PersonPhoto alt={name} image={img} />
      <Stack gap={{ xs: 1, md: 2, lg: 3 }}>
        <Typography variant="subhead">{name}</Typography>
        <Typography color="primary">{champion}</Typography>
      </Stack>
    </Stack>
  );
};

export default WinnerItem;
