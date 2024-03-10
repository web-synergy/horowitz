import { FC, PropsWithChildren } from 'react';
import { Box } from '@mui/material';

interface PageTemplateProps {
  mode?: 'dark' | 'light';
  padding?: boolean;
}

const PageTemplate: FC<PropsWithChildren<PageTemplateProps>> = ({
  mode = 'light',
  padding = true,
  children,
}) => {
  const pagePaddings = padding
    ? { pt: { xs: 3, md: 5, lg: 6 }, pb: { xs: 9, md: 12, lg: 15 } }
    : { padding: 0 };

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
        flexGrow: 1,
        position: 'relative',
        ...pagePaddings,
      }}
    >
      {children}
    </Box>
  );
};

export default PageTemplate;
