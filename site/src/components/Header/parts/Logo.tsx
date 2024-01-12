import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../temp/logo.svg';

const Logo = () => {
  return (
    <Link to={'/'} style={{ fontSize: 0 }}>
      <Box
        component="img"
        src={logo}
        alt="logo"
        sx={{ height: { xs: 64, lg: 102 }, width: 'auto' }}
      />
    </Link>
  );
};

export default Logo;
