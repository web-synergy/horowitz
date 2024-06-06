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
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { Buttons } from '@/types/translation.d';
import PersonPhoto from '@/components/Templates/PersonPhoto/PersonPhoto';

interface GuestsGridItemProps {
  item: GuestType;
}

const GuestsGridItem: FC<GuestsGridItemProps> = ({ item }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const { t } = useTranslation();

  const { photo, name } = item;
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.up('md'));

  const onOpenDialog = () => setOpenDialog(true);
  const onCloseDialog = () => setOpenDialog(false);

  const dialogFullWidth = !isTablet;
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <PersonPhoto image={photo} alt={name} />

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
