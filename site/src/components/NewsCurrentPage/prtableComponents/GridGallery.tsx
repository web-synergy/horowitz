import {
  Box,
  Dialog,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { FC, useState } from 'react';

import GrowView from '@/components/Common/GrowView';
import { theme } from '@/theme';
import { urlFor } from '@/config/sanity/imageUrl';
import { IImage, IPortableImgGallery } from '@/types/newsTypes';

const GridGallery: FC<IPortableImgGallery> = ({ value }) => {
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
  return (
    <GrowView>
      <Box sx={{ mb: '24px' }}>
        <ImageList variant='quilted' cols={4} rowHeight={isMob ? 'auto' : 230}>
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
                      .fit('scale')
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
              width={'100%'}
              height={'auto'}
              src={urlFor(imgSrc).auto('format').fit('scale').url()}
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
