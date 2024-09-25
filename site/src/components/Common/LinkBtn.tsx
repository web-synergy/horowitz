import { FC } from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';

import SvgSpriteIcon from './SvgSpriteIcon';

interface LinkBtnProps {
  link: string;
  title: string;
  isTitleVisible?: boolean;
}

const LinkBtn: FC<LinkBtnProps> = ({ link, title, isTitleVisible = true }) => {
  return (
    <Button
      aria-label={title}
      variant="tertiary"
      component={RouterLink}
      to={`${link}`}
      endIcon={<SvgSpriteIcon icon="arrow" sx={{ rotate: '-90deg' }} />}
    >
      {isTitleVisible && title}
    </Button>
  );
};

export default LinkBtn;
