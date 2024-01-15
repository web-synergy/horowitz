import { FC, PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import { Offset } from './Offset';

interface PageTemplateProps {
  mode?: 'dark' | 'light';
}

const PageTemplate: FC<PropsWithChildren<PageTemplateProps>> = ({
  mode = 'light',
  children,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          mode === 'dark'
            ? theme.palette.neutral[90]
            : theme.palette.background.default,
        color: (theme) =>
          mode === 'dark'
            ? theme.palette.common.white
            : theme.palette.common.black,
      }}
    >
      <Offset />
      {children}
    </Box>
  );
};

export default PageTemplate;
