import { Box, Button } from '@mui/material';

import SvgSpriteIcon from '../../Common/SvgSpriteIcon';
import { Link } from 'react-router-dom';

const LinkGoBack = ({ title, href }: { title: string; href: string }) => {
  return (
    <Box>
      <Button
        variant="tertiary"
        component={Link}
        to={href}
        sx={{ fontSize: { xs: '12px', md: '16px' } }}
        startIcon={
          <SvgSpriteIcon icon="arrow" sx={{ transform: 'rotate(-270deg)' }} />
        }
      >
        {title}
      </Button>
    </Box>
  );
};
export default LinkGoBack;
