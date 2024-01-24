import GrowView from '@/components/Common/GrowView';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ReactPlayer from 'react-player';

export default function YouTube({
  value,
}: {
  value: { url: string; title: string };
}) {
  console.log(value);
  const { url, title } = value;
  const theme = useTheme();
  const isMob = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <GrowView>
      <Box sx={{ mb: '24px' }}>
        <ReactPlayer
          style={{ width: '100%', height: '500px' }}
          width={'100%'}
          height={isMob ? 260 : 480}
          controls
          url={url}
        />
        <Typography variant='bodyRegular'>{title}</Typography>
      </Box>
    </GrowView>
  );
}
