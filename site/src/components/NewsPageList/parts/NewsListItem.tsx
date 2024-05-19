import GrowView from '@/components/Common/GrowView';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { urlFor } from '@/config/sanity/imageUrl';
import { IImage } from '@/types/commonTypes';
import { parseAndFormatDate } from '@/utils/helpers';
import { Buttons } from '@/types/translation.d';

import {
  Box,
  Button,
  Link,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { t } from 'i18next';
import { Link as RouterLink } from 'react-router-dom';
import Image from '@/components/Common/Image';

interface INewsListItem {
  img: IImage;
  title: string;
  shortDescription: string;
  slug: string;
  date: string;
}

const NewsListItem = ({
  date,
  img,
  title,
  shortDescription,
  slug,
}: INewsListItem) => {
  const theme = useTheme();
  const isMob = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const imageWidth = isMob ? 548 : isDesktop ? 357 : 332;
  const aspectRatio = 1.44;

  const imageHeight = Math.floor(imageWidth / aspectRatio);

  const imageUrl = urlFor(img)
    .auto('format')
    .width(imageWidth)
    .height(imageHeight)
    .fit('fill')
    .url()
    .toString();

  return (
    <ListItem>
      <GrowView>
        <Stack
          flex={1}
          direction={{ xs: 'column', md: 'row' }}
          gap={{ xs: 2, md: 3 }}
        >
          <Image
            src={imageUrl}
            alt={img.alt}
            height={248}
            width={imageWidth}
            isLazyLoading={false}
            styles={{
              aspectRatio: aspectRatio,
              objectFit: 'cover',
            }}
          />

          <Stack gap={2} sx={{ maxWidth: '548px' }}>
            <Typography
              sx={{ color: (theme) => theme.palette.neutral[50] }}
              variant="bodyLight"
            >
              {parseAndFormatDate(date)}
            </Typography>
            <Link component={RouterLink} to={slug}>
              <Typography variant="subhead">{title}</Typography>
            </Link>
            <Typography
              sx={{
                color: (theme) => theme.palette.neutral[40],
              }}
              variant="bodyRegular"
            >
              {shortDescription}
            </Typography>
            <Box>
              <Button
                component={RouterLink}
                to={slug}
                endIcon={
                  <SvgSpriteIcon
                    icon="arrow"
                    sx={{ transform: 'rotate(270deg)' }}
                  />
                }
                variant="tertiary"
              >
                {t(`buttons.${Buttons.READ_MORE}`)}
              </Button>
            </Box>
          </Stack>
        </Stack>
      </GrowView>
    </ListItem>
  );
};
export default NewsListItem;
