import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SvgSpriteIcon from './SvgSpriteIcon';
const LinkGoBack = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link
      component={RouterLink}
      to={href}
      sx={{
        color: theme => theme.palette.neutral[60],
      }}>
      <SvgSpriteIcon sx={{ transform: 'rotate(90deg)' }} icon='arrow' />
      {title}
    </Link>
  );
};
export default LinkGoBack;
