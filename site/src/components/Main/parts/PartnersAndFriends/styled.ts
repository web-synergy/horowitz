import { Button, ButtonProps, styled } from '@mui/material'
import { LinkProps } from 'react-router-dom'

export const ShowMoreBtn = styled(Button)<ButtonProps & LinkProps>(({ theme, variant }) => ({
  ...(variant === 'secondary' && {
    borderColor: theme.palette.common.black,
    border: '1px solid',
  }),
  width: '288px',
  height: '60px',
}))
