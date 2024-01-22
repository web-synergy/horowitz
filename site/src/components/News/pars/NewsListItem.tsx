import GrowView from '@/components/Common/GrowView';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { urlFor } from '@/config/sanity/imageUrl';
import { IImage } from '@/types/newsTypes';
import { parseAndFormatDate } from '@/utils/helpers';

import {
  Box,
  Link,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface INewsListItem {
  date: string;
  img: IImage;
  title: string;
  shortDescription: string;
  slug: string;
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
  return (
    <ListItem>
      <GrowView>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          <img
            src={urlFor(img)
              .auto('format')
              .width(isMob ? 288 : 357)
              .height(248)
              .fit('fill')
              .url()
              .toString()}
            alt='event logo'
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
                {parseAndFormatDate(date)}
              </Typography>
              <Typography variant='subhead'>{title}</Typography>
              <Typography
                sx={{ color: theme => theme.palette.neutral[40] }}
                variant='bodyRegular'>
                {shortDescription}
              </Typography>
              <Box>
                <Link component={RouterLink} to={slug}>
                  Читати більше
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
