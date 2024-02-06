import { FC } from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from '@mui/material';
import SvgSpriteIcon from './SvgSpriteIcon';
import { Link as RouterLink } from 'react-router-dom';

interface HistoryItem {
  title: string;
  href: string;
}

interface BreadcrumbsProps {
  history?: HistoryItem[];
  title: string;
  mode?: 'dark' | 'light';
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({
  history,
  title,
  mode = 'light',
}) => {
  return (
    <MuiBreadcrumbs
      aria-label='breadcrumb'
      separator={
        <SvgSpriteIcon icon='arrow' sx={{ transform: 'rotate(-90deg)' }} />
      }
      sx={{
        color: theme =>
          mode === 'dark'
            ? theme.palette.neutral[50]
            : theme.palette.neutral[30],
      }}>
      <Link component={RouterLink} color='inherit' to='/'>
        Головна
      </Link>
      {history &&
        history.map(item => (
          <Link
            component={RouterLink}
            to={item.href}
            key={item.href}
            color='inherit'>
            {item.title}
          </Link>
        ))}

      <Typography
        sx={{
          color: theme =>
            mode === 'dark'
              ? theme.palette.common.white
              : theme.palette.common.black,
        }}>
        {title}
      </Typography>
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
