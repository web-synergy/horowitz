import { FC } from 'react';
import {
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { JuryType } from '@/types/groupTypes';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import Image from '@/components/Common/Image';
import { urlFor } from '@/config/sanity/imageUrl';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { Buttons } from '@/types/translation.d';

interface GroupJuryItemProps {
  item: JuryType;
}

const MOBILE_ASPECT = 0.97;
const TABLET_ASPECT = 1;
const DESKTOP_ASPECT = 0.7;

const GroupJuryItem: FC<GroupJuryItemProps> = ({ item }) => {
  const { t } = useTranslation();
  const { containerRef, containerSize } = useWidthBlokSize();
  const { avatar, slug, name, role } = item;
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

  return (
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
        {name} {role && <Typography variant="caption">({role})</Typography>}
      </Typography>
      <Box sx={{ width: '100%', textAlign: 'end' }}>
        <Button
          variant="tertiary"
          component={Link}
          to={`${slug}`}
          endIcon={
            <SvgSpriteIcon icon="arrow" sx={{ transform: 'rotate(-90deg)' }} />
          }
          sx={{ fontSize: { xs: '1rem' }, lineHeight: { xs: 1.5 } }}
        >
          {t(`buttons.${Buttons.READ_MORE}`)}
        </Button>
      </Box>
    </Box>
  );
};

export default GroupJuryItem;
