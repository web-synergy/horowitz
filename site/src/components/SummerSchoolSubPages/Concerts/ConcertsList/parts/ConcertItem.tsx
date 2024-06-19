import { IConcerts } from '@/types/annualSummerSchoolTypes';
import { Buttons } from '@/types/translation.d';
import { Button, Box, Typography } from '@mui/material';
import { t } from 'i18next';
import PersonPhoto from '@/components/Templates/PersonPhoto/PersonPhoto';

import { Link } from 'react-router-dom';

const ConcertItem = ({ item }: { item: IConcerts }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr 60px',
        alignContent: 'space-between',
        height: '100%',
      }}
    >
      <PersonPhoto alt={`poster for ${item.title}`} image={item.img} />
      <Typography
        sx={{
          my: { xs: 1, md: 2, lg: 3 },
        }}
        variant="subhead"
      >
        {item.title}
      </Typography>

      <Button component={Link} to={item._key} variant="transparent">
        {t(`buttons.${Buttons.CONCERT_PROGRAM}`)}
      </Button>
    </Box>
  );
};
export default ConcertItem;
