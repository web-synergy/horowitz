import { FC, useState } from 'react';
import {
  Box,
  Typography,
  Dialog,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import GuestModal from './GuestModal';
import { GuestType } from '@/types/groupTypes';
import Image from '@/components/Common/Image';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { urlFor } from '@/config/sanity/imageUrl';
import { Buttons } from '@/types/translation.d';

interface GuestsGridItemProps {
  item: GuestType;
}

const MOBILE_ASPECT = 0.97;
const TABLET_ASPECT = 1;
const DESKTOP_ASPECT = 0.7;

const GuestsGridItem: FC<GuestsGridItemProps> = ({ item }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const { t } = useTranslation();
  const { containerRef, containerSize } = useWidthBlokSize();
  const { avatar, name } = item;
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const aspectRatio = isDesktop
    ? DESKTOP_ASPECT
    : isTablet
    ? TABLET_ASPECT
    : MOBILE_ASPECT;

  const imageHeight = Math.floor(containerSize / aspectRatio);

  const imageSrc = urlFor(avatar.image)
    .auto('format')
    .width(containerSize)
    .height(imageHeight)
    .url()
    .toString();

  const onOpenDialog = () => setOpenDialog(true);
  const onCloseDialog = () => setOpenDialog(false);

  const dialogFullWidth = !isTablet;
  return (
    <>
      <Box ref={containerRef} sx={{ width: '100%' }}>
        <Image
          src={imageSrc}
          isLazyLoading={true}
          alt={name}
          height={imageHeight}
          width={containerSize}
        />

        <Typography
          variant="subhead"
          component={'p'}
          mt={{ xs: 1, md: 2, lg: 3 }}
          mb={{ xs: 1, md: 2 }}
        >
          {name}
        </Typography>
        <Box sx={{ width: '100%', textAlign: 'end' }}>
          <Button
            variant="tertiary"
            onClick={onOpenDialog}
            endIcon={
              <SvgSpriteIcon
                icon="arrow"
                sx={{ transform: 'rotate(-90deg)' }}
              />
            }
            sx={{ fontSize: { xs: '1rem' }, lineHeight: { xs: 1.5 } }}
          >
            {t(`buttons.${Buttons.READ_MORE}`)}
          </Button>
        </Box>
      </Box>
      <Dialog
        open={openDialog}
        onClose={onCloseDialog}
        fullScreen={dialogFullWidth}
        PaperProps={{ sx: { maxWidth: { md: 650, lg: 750 } } }}
      >
        <GuestModal guest={item} onCloseModal={onCloseDialog} />
      </Dialog>
    </>
  );
};

export default GuestsGridItem;
