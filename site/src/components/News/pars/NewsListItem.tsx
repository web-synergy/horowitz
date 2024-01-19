import LinkElement from '@/components/Common/LinkElement';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { urlFor } from '@/config/sanity/imageUrl';
import { parseAndFormatDate } from '@/utils/helpers';
import { Box, Button, ListItem, Stack, Typography } from '@mui/material';

interface INewsListItem {
  date: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any;
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
  return (
    <ListItem>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 3 }}>
        <Box
          component={'img'}
          sx={{
            width: { xs: '288px', md: '332px', lg: '357px' },
            height: '248px',
            objectFit: 'cover',
          }}
          src={urlFor(img)
            .auto('format')
            .fit('fill')
            .crop('focalpoint')
            .url()
            .toString()}
          alt='event logo'
        />

        <Box sx={{ width: { xs: '100%', md: '80%', lg: '548px' } }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
            <Typography variant='bodyLight'>
              {parseAndFormatDate(date)}
            </Typography>
            <Typography variant='subhead'>{title}</Typography>
            <Typography variant='bodyRegular'>{shortDescription}</Typography>
            <Box>
              <Button
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  minWidth: '181px',
                }}
                variant='link'
                endIcon={<SvgSpriteIcon icon='linkArrow' />}>
                <LinkElement title=' Читати більше' href={slug}></LinkElement>
              </Button>
            </Box>
          </Box>
        </Box>
      </Stack>
    </ListItem>
  );
};
export default NewsListItem;
