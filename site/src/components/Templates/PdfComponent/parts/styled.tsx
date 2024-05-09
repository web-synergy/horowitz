import { Box, styled, IconButton, Button } from '@mui/material';
import { theme } from '@/theme/index';
export const StickyWrapper = styled(Box)(() => ({
  position: 'sticky',
  bottom: '35%',
  left: 5,
  zIndex: 5000,
}));

export const StyledIconButton = styled(IconButton)(() => ({
  position: 'absolute',
  bottom: 40,

  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    color: theme.palette.common.black,
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  '&.MuiButton-root': {
    padding: 10,
    minWidth: 44,
  },
  '& .MuiButton-icon': {
    marginRight: 0,
    marginLeft: 0,
  },

  [theme.breakpoints.up('md')]: {
    '&.MuiButton-root': {
      padding: 14,
      minWidth: 200,
    },
    '& .MuiButton-icon': {
      marginRight: -4,
    },
    '& .MuiButton-endIcon': {
      marginLeft: 8,
    },
    '& .MuiButton-startIcon': {
      marginRight: 8,
    },
  },
}));
