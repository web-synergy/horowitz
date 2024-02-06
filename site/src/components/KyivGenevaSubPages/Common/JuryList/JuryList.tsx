import { FC } from 'react';
import { Grid } from '@mui/material';
import JuryListItem from './JuryListItem';
import { IJury } from '@/types/kyivGeneva';

interface JuryListProps {
  juryList: IJury[];
}

const JuryList: FC<JuryListProps> = ({ juryList }) => {
  return (
    <Grid container columnSpacing={3} rowSpacing={{ xs: 3, lg: 6 }}>
      {juryList.map((jury) => (
        <JuryListItem
          key={jury.id}
          id={jury.id}
          name={jury.name}
          photo={jury.photo}
          position={jury.position}
        />
      ))}
    </Grid>
  );
};

export default JuryList;
