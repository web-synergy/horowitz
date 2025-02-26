import { urlFor } from '@/config/sanity/imageUrl';
import { Partner } from '@/types/partnersTypes';
import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import GrowView from '@/components/Common/GrowView';

interface LogotypesGalleryProps {
  title: string;
  gallery: Partner[];
  optRowGap?: number;
}
const LogotypesGallery: FC<LogotypesGalleryProps> = ({
  title,
  gallery,
  optRowGap,
}) => {
  return (
    <Box>
      <Typography variant="subhead" component={'p'}>
        {title}
      </Typography>
      <Stack
        sx={{
          flexDirection: 'row',
          columnGap: { xs: '28px', md: optRowGap ? optRowGap : '28px' },
          rowGap: {
            xs: '16px',
            md: '28px',
          },
          flexWrap: {
            xs: 'wrap',
            lg: 'nowrap',
          },
          marginTop: 3,
          alignItems: 'center',
        }}
      >
        {gallery.length &&
          gallery.map((item) => (
            <Box key={item._key}>
              <RouterLink
                to={item.link}
                target="_blank"
                onClick={(e) => !item.link && e.preventDefault()}
                style={{ cursor: !item.link ? 'default' : '' }}
              >
                <GrowView>
                  <Box
                    component={'img'}
                    src={urlFor(item.img).url().toString()}
                    alt={item.title}
                    sx={{
                      height: {
                        xs: item.size * 0.64,
                        md: item.size * 0.8,
                        lg: item.size,
                      },
                      width: 'auto',
                      maxWidth: '100%',
                      fontSize: 0,
                    }}
                  />
                </GrowView>
              </RouterLink>
            </Box>
          ))}
      </Stack>
    </Box>
  );
};

export default LogotypesGallery;
