import { Link, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SvgSpriteIcon from '../../Common/SvgSpriteIcon';
const LinkGoBack = ({ title, href }: { title: string; href: string }) => {
  return (
    <Stack>
      <Link
        component={RouterLink}
        to={href}
        sx={{
          color: theme => theme.palette.neutral[60],
          fontSize: { xs: '12px', md: '16px' },
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          flex: 1,
        }}>
        <SvgSpriteIcon sx={{ transform: 'rotate(90deg)' }} icon='arrow' />
        {title}
      </Link>
    </Stack>
  );
};
export default LinkGoBack;
