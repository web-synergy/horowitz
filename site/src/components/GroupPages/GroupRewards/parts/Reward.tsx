import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { RewardsType } from '@/types/groupTypes';
import { urlFor } from '@/config/sanity/imageUrl';

const Reward: FC<RewardsType> = ({ description, image, title }) => {
  const url = urlFor(image).width(120).height(120).url().toString();
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '120px 1fr' },
        gridTemplateAreas: {
          xs: '"title" "image" "description"',
          md: '"image title" "image description"',
        },
        columnGap: 2,
        rowGap: { xs: 2, md: 5, lg: 6 },
        justifyItems: { xs: 'center', md: 'flex-start' },
        textAlign: 'center',
      }}
    >
      <img
        src={url}
        alt={title}
        style={{ display: 'block', gridArea: 'image' }}
      />
      <Typography variant="h3" sx={{ gridArea: 'title' }}>
        {title}
      </Typography>
      <Typography sx={{ gridArea: 'description' }}>{description}</Typography>
    </Box>
  );
};

export default Reward;
