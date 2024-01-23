import { styled } from '@mui/material';

export const Offset = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  backgroundColor: theme.palette.neutral[90],
  backdropFilter: 'blur(6px)',
}));
