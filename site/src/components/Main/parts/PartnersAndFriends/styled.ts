import { Button, ButtonProps, styled } from '@mui/material';
import { LinkProps } from 'react-router-dom';

export const ShowMoreBtn = styled(Button)<ButtonProps & LinkProps>(() => ({
  width: '288px',
}));
