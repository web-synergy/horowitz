import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { SubmenuLink } from '../styled';

interface SubmenuItemProps {
  href: string;
  title: string;
  onCloseMenu: () => void;
}
const SubmenuItem: FC<SubmenuItemProps> = ({ href, title, onCloseMenu }) => {
  return (
    <SubmenuLink component={RouterLink} to={`/${href}`} onClick={onCloseMenu}>
      {title}
    </SubmenuLink>
  );
};

export default SubmenuItem;
