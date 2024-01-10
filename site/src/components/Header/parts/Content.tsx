import { Stack } from '@mui/material';
import Navigation from './Navigation';
import Search from './Search';
import LangPanel from './LangPanel';

const DesktopContent = () => {
  return (
    <>
      <Navigation />
      <Stack direction="row" gap={4}>
        <Search />
        <LangPanel />
      </Stack>
    </>
  );
};

export default DesktopContent;
