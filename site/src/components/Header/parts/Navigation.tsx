import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { navigation } from '@/config/routes/navigation';
import { NavList } from '../styled';
import MainMenu from './MainMenu';
import { Routes, NavigationType } from '@/types/routes.d';
import { useSettingsStore } from '@/store/settingStore';

interface NavigationProps {
  onCloseMobileMenu?: () => void;
}

const Navigation: FC<NavigationProps> = ({ onCloseMobileMenu }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { t } = useTranslation();
  const { competitions } = useSettingsStore();

  const onOpenMenu = (panel: string) =>
    setActiveMenu((prev) => (prev === panel ? null : panel));

  const competitionNav = competitions ?? [];

  const navigationForRender = navigation.map((item) => {
    const children = item.children
      ? item.children.map((child) => ({
          ...child,
          title: t(`navigation.${child.title}`),
        }))
      : null;

    return item.title === Routes.COMPETITIONS
      ? {
          ...item,
          children: [
            ...(children ? [children[0]] : ([] as NavigationType[])),
            ...competitionNav.map((item) => ({
              ...item,
              slug: `${Routes.COMPETITIONS}/${item.slug}`,
            })),
            ...(children && children.length > 1
              ? children.slice(1)
              : ([] as NavigationType[])),
          ],
        }
      : { ...item, children };
  });

  return (
    <NavList component="nav">
      {navigationForRender.map((item) => {
        if (!item) return null;

        return (
          <MainMenu
            key={item.title}
            title={item.title}
            children={item.children}
            activeMenu={activeMenu}
            onOpenMenu={onOpenMenu}
            onCloseMobileMenu={onCloseMobileMenu}
          />
        );
      })}
    </NavList>
  );
};

export default Navigation;
