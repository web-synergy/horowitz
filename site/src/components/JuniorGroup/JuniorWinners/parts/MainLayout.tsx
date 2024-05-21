import { useState } from 'react';
import { Container } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { Tabs } from '@/types/translation.d';

const MainLayout = () => {
  const [tab, setTab] = useState<Tabs>(Tabs.DEBUT);
  return <div></div>;
};

export default MainLayout;
