import { IImageReference } from '@/types/commonTypes';
import { Link as RouterLink } from 'react-router-dom';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Stack, Typography, Link } from '@mui/material';
import { useWidthBlokSize } from '@/hook/useWidthBlockSize';
import { urlFor } from '@/config/sanity/imageUrl';

import defaultImg from '@/assets/images/competition/btn.jpg';

interface GroupBtnProps {
  item: {
    title: string;
    btn: IImageReference | null;
    isActive: boolean;
  };
}

const GroupButton: FC<GroupBtnProps> = ({ item }) => {
  const { t } = useTranslation();
  const { btn, isActive, title } = item;
  const { containerRef, containerSize } = useWidthBlokSize();

  const imageUrl = btn
    ? urlFor(btn).auto('format').width(containerSize).url().toString()
    : defaultImg;

  return (
    <Link
      component={RouterLink}
      to={`${title}`}
      sx={{
        display: 'block',
        pointerEvents: isActive ? 'all' : 'none',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Stack ref={containerRef} gap={{ xs: 2, md: 3 }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              backgroundColor: isActive
                ? 'rgba(8, 7, 8, 0.5)'
                : 'rgba(224, 224, 224, 0.5)',
            }}
          />
          <Box
            component={'img'}
            sx={{
              display: 'block',
              width: '100%',
              aspectRatio: { xs: 1.11, md: 1.27, lg: 1.37 },
              objectFit: 'fill',
            }}
            src={imageUrl}
          />
        </Box>

        <Typography
          variant="subhead"
          component={'p'}
          color={(theme) => (isActive ? 'inherit' : theme.palette.neutral[50])}
        >
          {t(`navigation.${title}`)}
        </Typography>
      </Stack>
    </Link>
  );
};

export default GroupButton;
