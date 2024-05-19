import { FC } from 'react';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SvgSpriteIcon from './SvgSpriteIcon';
import { Buttons } from '@/types/translation.d';

interface ReadMoreBtnProps {
  href: string;
}

const ReadMoreBtn: FC<ReadMoreBtnProps> = ({ href }) => {
  const { t } = useTranslation();
  return (
    <Box sx={{ width: '100%', textAlign: 'end' }}>
      <Button
        variant="tertiary"
        component={Link}
        to={`${href}`}
        endIcon={
          <SvgSpriteIcon icon="arrow" sx={{ transform: 'rotate(-90deg)' }} />
        }
        sx={{ fontSize: { xs: '1rem' }, lineHeight: { xs: 1.5 } }}
      >
        {t(`buttons.${Buttons.READ_MORE}`)}
      </Button>
    </Box>
  );
};

export default ReadMoreBtn;
