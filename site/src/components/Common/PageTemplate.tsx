import { FC, PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import GoBackBtn from './GoBackBtn';

interface PageTemplateProps {
  mode?: 'dark' | 'light';
  padding?: boolean;
  goBackUrl?: string;
}

const PageTemplate: FC<PropsWithChildren<PageTemplateProps>> = ({
  mode = 'light',
  padding = true,
  goBackUrl,
  children,
}) => {
  const pagePaddings = padding
    ? { pt: { xs: 3, md: 5, lg: 6 }, pb: { xs: 9, md: 12, lg: 15 } }
    : { padding: 0 };

  return (
    <>
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
      {goBackUrl && <GoBackBtn href={goBackUrl} />}
    </>
  );
};

export default PageTemplate;
