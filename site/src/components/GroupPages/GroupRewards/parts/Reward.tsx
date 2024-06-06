import { FC } from 'react';
import { Typography, Box } from '@mui/material';
import { RewardType } from '@/types/groupTypes';
import Image from '@/components/Common/Image';
import CommonStackWrapper from '@/components/Common/CommonStackWrapper';

import { urlFor } from '@/config/sanity/imageUrl';

const Reward: FC<RewardType> = ({ description, img, title }) => {
  return (
    <CommonStackWrapper
      sx={{
        textAlign: { xs: 'center', md: 'left' },
        pl: { md: img ? 18 : 0 },
        position: 'relative',
      }}
    >
      <Typography variant="h3">{title}</Typography>

      {img && (
        <Box
          sx={{
            position: { md: 'absolute' },
            left: 0,
            top: 0,
          }}
        >
          <Image
            src={urlFor(img).auto('format').height(120).width(120).toString()}
            height={120}
            width={120}
            alt={title}
            isLazyLoading={false}
            styles={{ marginLeft: 'auto', marginRight: 'auto' }}
          />
        </Box>
      )}

      <Typography>{description}</Typography>
    </CommonStackWrapper>
  );
};

export default Reward;
Reward;
