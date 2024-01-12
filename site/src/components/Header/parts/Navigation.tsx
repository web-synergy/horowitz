import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { navigation } from '@/config/routes/navigation';
import { NavList } from '../styled';
import MainMenu from './MainMenu';
import { Routes } from '@/types/routes.d';

interface NavigationProps {
  onCloseMobileMenu?: () => void;
}

const Navigation: FC<NavigationProps> = ({ onCloseMobileMenu }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { t } = useTranslation();

  const onOpenMenu = (panel: string) =>
    setActiveMenu((prev) => (prev === panel ? null : panel));

  // TODO: receive from admin
  const competitionNav = [{ title: 'XIV Конкурс', slug: 'competition-XIV' }];

  const navigationForRender = navigation.map((item) => {
    const children = item.children
      ? item.children.map((child) => ({
          ...child,
          title: t(`navigation.${child.title}`),
        }))
      : null;

    return item.title === Routes.COMPETITION
      ? {
          ...item,
          children: [...competitionNav, ...(children ? children : [])],
        }
      : { ...item, children };
  });

  return (
    <NavList component="nav">
      {navigationForRender.map((item) => (
        <MainMenu
          key={item.title}
          title={item.title}
          children={item.children}
          activeMenu={activeMenu}
          onOpenMenu={onOpenMenu}
          onCloseMobileMenu={onCloseMobileMenu}
        />
      ))}
    </NavList>
  );
};

export default Navigation;
