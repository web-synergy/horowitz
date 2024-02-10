import GrowView from '@/components/Common/GrowView';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ReactPlayer from 'react-player';

export default function YouTube({
  value,
}: {
  value: { url: string; title: string };
}) {
  const { url, title } = value;
  const theme = useTheme();
  const isMob = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <GrowView>
      <Box>
        <Box sx={{ mb: '24px' }}>
          <ReactPlayer
            style={{ width: '100%', height: '500px' }}
            width={'100%'}
            height={isMob ? 260 : 480}
            controls
            url={url}
          />
        </Box>
        <Typography
          component={'p'}
          sx={{
            display: 'block',
            fontSize: {
              xs: '16px',
              md: '20px',
              lg: '24px',
              color: theme => theme.palette.neutral[90],
              my: { xs: '16px', md: '24px' },
            },
          }}>
          {title}
        </Typography>
      </Box>
    </GrowView>
  );
}
