import GrowView from '@/components/Common/GrowView';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { urlFor } from '@/config/sanity/imageUrl';
import { IImage } from '@/types/newsTypes';
import { parseAndFormatDate } from '@/utils/helpers';

import {
  Box,
  Button,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { t } from 'i18next';
import { Link } from 'react-router-dom';

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
                {dateStart && parseAndFormatDate(dateStart)}
                {dateEnd && ` - ${parseAndFormatDate(dateEnd)}`}
              </Typography>
              <Typography variant='subhead'>{title}</Typography>
              <Typography
                sx={{
                  color: theme => theme.palette.neutral[40],
                }}
                variant='bodyRegular'>
                {shortDescription}
              </Typography>
              <Box>
                <Button
                  component={Link}
                  to={slug}
                  endIcon={
                    <SvgSpriteIcon
                      icon='arrow'
                      sx={{ transform: 'rotate(270deg)' }}
                    />
                  }
                  variant='tertiary'>
                  {t(`news.readMore`)}
                </Button>
              </Box>
            </Box>
          </Box>
        </Stack>
      </GrowView>
    </ListItem>
  );
};
export default NewsListItem;
