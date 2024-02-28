import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { Button } from '@mui/material';
import { FC } from 'react';

import { Link as RouterLink } from 'react-router-dom';

interface ShowMoreBtnProps {
  link: string;
  title: string;
  isTitleVisible?: boolean;
}

export const ShowMoreBtn: FC<ShowMoreBtnProps> = ({
  link,
  title,
  isTitleVisible = true,
}) => {
  return (
    <Button
      aria-label={title}
      variant='tertiary'
      component={RouterLink}
      to={link}
      endIcon={<SvgSpriteIcon icon='arrow' sx={{ rotate: '-90deg' }} />}>
      {isTitleVisible && title}
    </Button>
  );
};
