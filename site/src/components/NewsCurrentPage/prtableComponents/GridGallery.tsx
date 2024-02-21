import {
  Box,
  Dialog,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';

import GrowView from '@/components/Common/GrowView';
import { theme } from '@/theme';
import { urlFor } from '@/config/sanity/imageUrl';
import { IImage, IPortableImgGallery } from '@/types/newsTypes';

const GridGallery = ({ value }: { value: IPortableImgGallery }) => {
  const { images, title } = value;
  const [open, setOpen] = useState(false);
  const [imgSrc, setImg] = useState<IImage>();
  const handleClickOpen = (img: IImage) => {
    setImg(img);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const isMob = useMediaQuery(theme.breakpoints.down('md'));
  if (!images) return null;
  return (
    <GrowView>
      <Box sx={{ mb: '24px' }}>
        <ImageList
          variant='quilted'
          cols={4}
          gap={8}
          rowHeight={isMob ? 'auto' : 230}>
          {images.map(item => {
            if (item.asset)
              return (
                <ImageListItem
                  key={item._key}
                  cols={item.photoLayout.cols || 1}
                  rows={item.photoLayout.rows || 1}>
                  <img
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleClickOpen(item)}
                    src={urlFor(item)
                      .width(700)
                      .height(460)
                      .auto('format')
                      .url()}
                    alt={item.title || ''}
                    loading='lazy'
                  />
                </ImageListItem>
              );
          })}
        </ImageList>

        <Dialog
          fullWidth={true}
          maxWidth={'md'}
          onClose={handleClose}
          aria-labelledby='customized-dialog-title'
          open={open}>
          {imgSrc && (
            <img
              style={{ width: '100%' }}
              width={'100%'}
              height={'auto'}
              src={urlFor(imgSrc).auto('format').url()}
              loading='lazy'
            />
          )}
        </Dialog>

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
