import { Box } from '@mui/material';
import logo from '../temp/logo.svg';

const Logo = () => {
  return (
    <Box
      component="img"
      src={logo}
      alt="logo"
      sx={{ height: { xs: 64, lg: 102 }, width: 'auto' }}
    />
  );
};

export default Logo;
