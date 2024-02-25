import { FC } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { Buttons } from '@/types/translation.d';
import { IJury } from '@/types/kyivGeneva';
import ImagePerson from './ImagePerson';

interface JuryItemProps {
  item: IJury;
}

const JuryListItem: FC<JuryItemProps> = ({ item }) => {
  const { id, photo, name, position } = item;
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <>
      <ImagePerson img={photo} />

      <Typography variant="subhead" component="h3" mb={{ xs: 3, lg: 2 }}>
        {language === 'ua' ? name.ua : name.en}
        {position && (
          <Typography sx={{ ml: 1 }}>
            ({language === 'ua' ? position.ua : position.en})
          </Typography>
        )}
      </Typography>

      <Box sx={{ width: '100%', textAlign: 'end' }}>
        <Button
          variant="tertiary"
          component={Link}
          to={`${id}`}
          endIcon={
            <SvgSpriteIcon icon="arrow" sx={{ transform: 'rotate(-90deg)' }} />
          }
          sx={{ fontSize: { xs: '1rem' }, lineHeight: { xs: 1.5 } }}
        >
          {t(`buttons.${Buttons.READ_MORE}`)}
        </Button>
      </Box>
    </>
  );
};

export default JuryListItem;
