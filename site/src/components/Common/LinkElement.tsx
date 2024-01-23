import { FC } from 'react';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface LinkElementProps {
  href: string;
  title: string;
}

const LinkElement: FC<LinkElementProps> = ({ href, title }) => {
  return (
    <Link component={RouterLink} to={href}>
      {title}
    </Link>
  );
};

export default LinkElement;
