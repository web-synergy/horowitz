import DisplayVideoCard from '@/components/Templates/DisplayVideoCard/DisplayVideoCard';
import { getPosterLink } from '@/utils/helpers';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

import { FC } from 'react';

interface PlayerCardProps {
  link: string;
  title: string;
  _key: string;
}

const PlayerCard: FC<PlayerCardProps> = ({ link, title }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.only('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const posterLink = getPosterLink(link, isTablet, isMobile);

  return (
    <Stack
      sx={{
        gap: {
          xs: 2,
          md: 3,
        },
        // width: {
        //   xs: '247px',
        //   md: '332px',
        //   lg: '357px',
        // },
        width: '100%',
        height: '100%',
      }}
    >
      <Box sx={{ aspectRatio: { xs: 1.8, md: 1.5 } }}>
        <DisplayVideoCard link={link} poster={posterLink} />
      </Box>
      <Typography variant="subhead" sx={{ marginTop: 'auto' }}>
        {title}
      </Typography>
    </Stack>
  );
};

export default PlayerCard;
