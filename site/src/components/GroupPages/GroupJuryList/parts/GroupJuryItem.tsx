import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack, Box, Typography } from '@mui/material';
import { JuryType } from '@/types/groupTypes';
import PersonPhoto from '@/components/Templates/PersonPhoto/PersonPhoto';
import LinkBtn from '@/components/Common/LinkBtn';
import { Buttons } from '@/types/translation.d';

interface GroupJuryItemProps {
  item: JuryType;
}

const GroupJuryItem: FC<GroupJuryItemProps> = ({ item }) => {
  const { photo, name, slug, role } = item;
  const { t } = useTranslation();

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

      <LinkBtn link={slug} title={t(`Buttons.${Buttons.READ_MORE}`)} />
    </Stack>
  );
};

export default GroupJuryItem;
