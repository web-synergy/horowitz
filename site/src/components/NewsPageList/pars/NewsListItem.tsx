import GrowView from '@/components/Common/GrowView';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { urlFor } from '@/config/sanity/imageUrl';
import { IImage } from '@/types/newsTypes';

import {
  Box,
  Link,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { t } from 'i18next';
import { Link as RouterLink } from 'react-router-dom';

interface INewsListItem {
  img: IImage;
  title: string;
  shortDescription: string;
  slug: string;
  dateStart: string;
  dateEnd: string;
}

const NewsListItem = ({
  dateStart,
  dateEnd,
  img,
  title,
  shortDescription,
  slug,
}: INewsListItem) => {
  const theme = useTheme();
  const isMob = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <ListItem>
      <GrowView>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          <Box
            component={'img'}
            sx={{ objectFit: 'cover' }}
            src={urlFor(img)
              .auto('format')
              .width(isMob ? 288 : 357)
              .height(248)
              .fit('fill')
              .url()
              .toString()}
            alt={img.alt}
          />

          <Box sx={{ maxWidth: '548px' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
              <Typography
                sx={{ color: theme => theme.palette.neutral[50] }}
                variant='bodyLight'>
                {dateStart && dateStart.replaceAll('-', '.')}
                {dateEnd && ` - ${dateEnd.replaceAll('-', '.')}`}
              </Typography>
              <Typography variant='subhead'>{title}</Typography>
              <Typography
                sx={{
                  color: theme => theme.palette.neutral[40],
                  widows: '500px',
                  // height: '70px',
                  // whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                }}
                variant='bodyRegular'>
                {shortDescription}
              </Typography>
              <Box>
                <Link component={RouterLink} to={slug}>
                  {t(`news.readMore`)}
                  <SvgSpriteIcon
                    sx={{ transform: 'rotate(270deg)' }}
                    icon='arrow'
                  />
                </Link>
              </Box>
            </Box>
          </Box>
        </Stack>
      </GrowView>
    </ListItem>
  );
};
export default NewsListItem;
