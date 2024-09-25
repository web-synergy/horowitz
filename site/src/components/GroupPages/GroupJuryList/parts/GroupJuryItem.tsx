import { FC } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { JuryType } from '@/types/groupTypes';
import PersonPhoto from '@/components/Templates/PersonPhoto/PersonPhoto';
import ReadMoreBtn from '@/components/Common/LinkBtn';

interface GroupJuryItemProps {
  item: JuryType;
}

const GroupJuryItem: FC<GroupJuryItemProps> = ({ item }) => {
  const { photo, name, slug, role } = item;

  return (
    <Stack direction="column" justifyContent={'space-between'} height={'100%'}>
      <Box>
        <PersonPhoto alt={name} image={photo} />
        <Typography
          variant="subhead"
          component={'p'}
          mt={{ xs: 1, md: 2, lg: 3 }}
          mb={{ xs: 1, md: 2 }}
        >
          {name} {role && <Typography variant="caption">({role})</Typography>}
        </Typography>
      </Box>

      <ReadMoreBtn href={slug} />
    </Stack>
  );
};

export default GroupJuryItem;
