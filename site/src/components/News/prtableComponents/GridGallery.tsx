import { urlFor } from '@/config/sanity/imageUrl';
import { IPortableImgGallery } from '@/types/newsTypes';
import { processImageUrl } from '@/utils/helpers';
import { Box, Grow, ImageList, ImageListItem, Typography } from '@mui/material';
import { FC } from 'react';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  const imageSrs = `${image}?w=${size * cols}&h=${
    size * rows
  }&fit=crop&auto=format`;
  const imageSrsSet = `${image}?w=${size * cols}&h=${
    size * rows
  }&fit=crop&auto=format&dpr=2 2x`;
  return {
    src: processImageUrl(imageSrs),
    srcSet: processImageUrl(imageSrsSet),
  };
}

export const GridGallery: FC<IPortableImgGallery> = ({ value }) => {
  const { images, title } = value;

  return (
    <Box sx={{ mb: '24px' }}>
      <Grow in={true} timeout={1200}>
        <ImageList variant='quilted' cols={4} rowHeight={400}>
          {images &&
            images.map((item, index) => {
              if (item.asset)
                return (
                  <ImageListItem
                    key={index}
                    cols={item.photoLayout.cols || 1}
                    rows={item.photoLayout.rows || 1}>
                    <img
                      {...srcset(
                        urlFor(item).crop('focalpoint').url(),
                        400,
                        item.photoLayout.rows,
                        item.photoLayout.cols
                      )}
                      alt={item.title}
                      loading='lazy'
                    />
                  </ImageListItem>
                );
            })}
        </ImageList>
      </Grow>
      <Typography variant='smallText'>{title}</Typography>
    </Box>
  );
};
