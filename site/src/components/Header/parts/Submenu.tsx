import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Routes } from '@/types/routes.d';
import { archiveUrl } from '@/libs/archiveUrl';
import { SubmenuLink } from '../styled';

interface SubmenuItemProps {
  href: string;
  title: string;
  onCloseMenu: () => void;
}
const SubmenuItem: FC<SubmenuItemProps> = ({ href, title, onCloseMenu }) => {
  if (href === Routes.ARCHIVE) {
    return (
      <SubmenuLink
        href={archiveUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onCloseMenu}
      >
        {title}
      </SubmenuLink>
    );
  }
  return (
    <SubmenuLink component={RouterLink} to={`/${href}`} onClick={onCloseMenu}>
      {title}
    </SubmenuLink>
  );
};

export default SubmenuItem;
