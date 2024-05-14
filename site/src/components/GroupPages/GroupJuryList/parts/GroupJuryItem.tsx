import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { JuryType } from '@/types/groupTypes';
import PersonPhoto from '@/components/Templates/PersonPhoto/PersonPhoto';
import ReadMoreBtn from '@/components/Common/ReadMoreBtn';

interface GroupJuryItemProps {
  item: JuryType;
}

const GroupJuryItem: FC<GroupJuryItemProps> = ({ item }) => {
  const { avatar, name, slug, role } = item;

  return (
    <Box sx={{ width: '100%' }}>
      <PersonPhoto alt={name} image={avatar.image} />

      <Typography
        variant="subhead"
        component={'p'}
        mt={{ xs: 1, md: 2, lg: 3 }}
        mb={{ xs: 1, md: 2 }}
      >
        {name} {role && <Typography variant="caption">({role})</Typography>}
      </Typography>
      <ReadMoreBtn href={slug} />
    </Box>
  );
};

export default GroupJuryItem;
