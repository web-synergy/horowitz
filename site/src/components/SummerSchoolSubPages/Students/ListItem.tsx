import PortableComponent from '@/components/Templates/PortableComponent/PortableComponent';
import { urlFor } from '@/config/sanity/imageUrl';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { IParticipant } from '@/types/annualSummerSchoolTypes';
import GrowView from '@/components/Common/GrowView';
import { FC } from 'react';
import { theme } from '@/theme';

const ListItem: FC<IParticipant> = ({ name, country, age, about, avatar }) => {
  const isMob = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <GrowView>
      <Box
        sx={{
          display: { xs: 'flex', md: 'block' },
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{ float: 'left', m: { md: ' 0px 24px 0px 0px' } }}
          component={'img'}
          src={urlFor(avatar.image)
            .width(isMob ? 600 : 243)
            .height(isMob ? 600 : 243)
            .toString()}
        />
        <Box>
          <Typography variant="bodyRegular" component={'p'}>
            {name}
          </Typography>
          <Typography component={'p'}>{country}</Typography>
          <Typography component={'p'}>{age} років</Typography>
          <Box
            sx={{
              mt: '24px',
              '*:last-child': {
                marginBottom: '0px',
              },
            }}
          >
            <PortableComponent data={about} />
          </Box>
          <div style={{ clear: 'both' }}></div>
        </Box>
      </Box>
    </GrowView>
  );
};

export default ListItem;
