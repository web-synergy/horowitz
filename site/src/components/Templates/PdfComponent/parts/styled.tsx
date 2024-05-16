import { Box, styled, IconButton, Button, TextField } from '@mui/material';
import { theme } from '@/theme/index';

export const StickyWrapper = styled(Box)(() => ({
  position: 'sticky',
  bottom: '35%',
  left: 5,
  zIndex: 5000,
}));

export const StyledIconButton = styled(IconButton)(() => ({
  borderRadius: '5px',
  transition: theme.transitions.create('background-color', { duration: 700 }),

  backgroundColor: theme.palette.primary.main,

  '&:hover': {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.primary.light,
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

export const StickyBox = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 64,
  zIndex: 1000,
  height: 60,
  mb: 3,

  [theme.breakpoints.up('lg')]: {
    top: 102,
  },
}));

export const ButtonWrapper = styled(Box)(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  position: 'absolute',
  gap: 8,
  left: '50%',
  top: 0,
  transform: 'translateX(-50%)',
  padding: 10,
  boxShadow: '0px 4px 4px 0px #00000040',
  backgroundColor: '#EAE2D5',
  borderRadius: '5px',
}));

export const StyledTextField = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    height: 40,
    width: 60,
    padding: 0,
    position: 'relative',
    bottom: -1,
  },

  '& .MuiInputBase-input': {
    textAlign: 'center',
  },
}));
