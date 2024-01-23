import { styled, Box } from '@mui/material';

export const Offset = styled(Box)(({ theme }) => ({
  ...theme.mixins.toolbar,
}));
