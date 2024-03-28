import ImagePerson from '@/components/KyivGenevaSubPages/Common/ImagePerson';
import { urlFor } from '@/config/sanity/imageUrl';
import { theme } from '@/theme';
import { IConcerts } from '@/types/annualSummerSchoolTypes';
import { Buttons } from '@/types/translation.d';
import { Button, Stack, Typography, useMediaQuery } from '@mui/material';
import { t } from 'i18next';

import { Link } from 'react-router-dom';

const ConcertItem = ({ item }: { item: IConcerts }) => {
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Stack>
      <ImagePerson
        mb={0}
        img={
          item.img &&
          urlFor(item.img)
            .width(isDesktop ? 357 : 333)
            .height(isDesktop ? 514 : 333)
            .toString()
        }
      />
      <Typography
        sx={{ mt: { xs: '8px', md: '16px', lg: '24px' } }}
        variant='subhead'>
        {item.title}
      </Typography>

      <Button
        sx={{ mt: { lg: '24px', md: '16px', xs: '8px' } }}
        component={Link}
        to={item._key}
        variant='transparent'>
        {t(`buttons.${Buttons.CONCERT_PROGRAM}`)}
      </Button>
    </Stack>
  );
};
export default ConcertItem;
