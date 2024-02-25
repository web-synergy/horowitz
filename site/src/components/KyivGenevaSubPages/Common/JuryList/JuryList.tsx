import { FC } from 'react';
import { Box } from '@mui/material';
import JuryListItem from './JuryListItem';
import { IJury } from '@/types/kyivGeneva';

interface JuryListProps {
  juryList: IJury[];
}

const JuryList: FC<JuryListProps> = ({ juryList }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 3,
        gridTemplateColumns: 'repeat(auto-fill, minmax(288px, 1fr))',
        justifyContent: 'center',
      }}
    >
      {juryList.map((jury) => (
        <JuryListItem
          key={jury.id}
          id={jury.id}
          name={jury.name}
          photo={jury.photo}
          position={jury.position}
        />
      ))}
    </Box>
  );
};

export default JuryList;
