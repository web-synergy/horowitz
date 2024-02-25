import { FC } from 'react';
import { Typography } from '@mui/material';
import { IKGWinners } from '@/types/kyivGenevaDataTypes';
import ImagePerson from '../Common/ImagePerson';

interface WinnerProps {
  item: IKGWinners;
}

const Winner: FC<WinnerProps> = ({ item }) => {
  return (
    <>
      <ImagePerson alt={item.fullName} img={item.img} />
      <Typography
        variant="subhead"
        component={'p'}
        sx={{
          margin: '24px 0px 16px',
        }}
      >
        {item.fullName}
      </Typography>
      <Typography
        variant="bodyRegular"
        component={'p'}
        sx={{
          color: (theme) => theme.palette.action.focus,
          width: '100%',
        }}
      >
        {item.prizePlace}
      </Typography>
    </>
  );
};

export default Winner;
