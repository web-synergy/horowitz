import { Backdrop, CircularProgress, Stack } from '@mui/material';

export default function Loader() {
  return (
    <Stack
      minHeight="100vh"
      sx={{
        backgroundColor: (theme) => theme.palette.common.black,
      }}
    >
      <Backdrop open={true} sx={{ zIndex: 1000 }}>
        <CircularProgress />
      </Backdrop>
    </Stack>
  );
}
