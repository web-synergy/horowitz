import { Backdrop, CircularProgress, Stack } from '@mui/material';

interface LoaderProps {
  mode?: 'dark' | 'light';
}

export default function Loader({ mode = 'dark' }: LoaderProps) {
  return (
    <Stack
      minHeight="100vh"
      sx={{
        backgroundColor: (theme) =>
          mode === 'dark'
            ? theme.palette.common.black
            : theme.palette.common.white,
      }}
    >
      <Backdrop open={true} sx={{ zIndex: 1000 }}>
        <CircularProgress />
      </Backdrop>
    </Stack>
  );
}
