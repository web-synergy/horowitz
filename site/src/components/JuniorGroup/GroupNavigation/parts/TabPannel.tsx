import { FC, PropsWithChildren } from 'react';
import { ETabs, EDebut } from '@/types/translation.d';

interface TabPanelProps {
  activeValue: ETabs | EDebut;
  value: ETabs | EDebut;
  name: string;
}

const TabPannel: FC<PropsWithChildren<TabPanelProps>> = ({
  activeValue,
  value,
  name,
  children,

  ...other
}) => {
  return (
    <div
      role="tabpanel"
      hidden={activeValue !== value}
      id={`tabpanel-${name}`}
      aria-labelledby={`tab-${name}`}
      {...other}
    >
      {activeValue === value && <>{children}</>}
    </div>
  );
};

export default TabPannel;
