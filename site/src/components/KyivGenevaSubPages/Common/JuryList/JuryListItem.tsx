import { FC } from 'react';
import { Grid, Box, Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';

interface JuryItemProps {
  id: string;
  photo: string;
  name: { ua: string; en: string };
  position?: { ua: string; en: string };
}

const JuryListItem: FC<JuryItemProps> = ({ id, photo, name, position }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box
        component="img"
        src={photo}
        sx={{
          display: 'block',
          width: '100%',
          height: 'auto',
          aspectRatio: { xs: '1/1', lg: '2/2.9' },
          objectFit: 'cover',
          objectPosition: 'center top',
          marginBottom: 3,
        }}
      />
      <Stack
        direction="row"
        gap="5px"
        alignItems="baseline"
        mb={{ xs: 3, lg: 2 }}
      >
        <Typography variant="subhead" component="h3">
          {language === 'ua' ? name.ua : name.en}
        </Typography>
        {position && (
          <Typography>
            ({language === 'ua' ? position.ua : position.en})
          </Typography>
        )}
      </Stack>
      <Box sx={{ width: '100%', textAlign: 'end' }}>
        <Button
          variant="tertiary"
          component={Link}
          to={`${id}`}
          endIcon={
            <SvgSpriteIcon icon="arrow" sx={{ transform: 'rotate(-90deg)' }} />
          }
        >
          {t('jury.read_more')}
        </Button>
      </Box>
    </Grid>
  );
};

export default JuryListItem;
