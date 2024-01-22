import { urlFor } from '@/config/sanity/imageUrl';
import { IPortableImgGallery } from '@/types/newsTypes';
import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { FC } from 'react';

import GrowView from '@/components/Common/GrowView';

const GridGallery: FC<IPortableImgGallery> = ({ value }) => {
  const { images, title } = value;

  return (
    <GrowView>
      <Box sx={{ mb: '24px' }}>
        <ImageList variant='quilted' cols={4} rowHeight={200}>
          {images.map(item => {
            if (item.asset)
              return (
                <ImageListItem
                  sx={{ p: '3px' }}
                  key={item._key}
                  cols={item.photoLayout.cols || 1}
                  rows={item.photoLayout.rows || 1}>
                  <img
                    src={urlFor(item)
                      .width(800)
                      .height(400)
                      .auto('format')
                      .fit('fill')
                      .url()}
                    alt={item.title || ''}
                    loading='lazy'
                  />
                </ImageListItem>
              );
          })}
        </ImageList>
        <Typography
          sx={{ color: theme => theme.palette.neutral[50] }}
          variant='smallText'>
          {title}
        </Typography>
      </Box>
    </GrowView>
  );
};

export default GridGallery;
