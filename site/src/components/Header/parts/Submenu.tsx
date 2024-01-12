import { FC } from 'react';
import { Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Routes } from '@/types/routes.d';
import { archiveUrl } from '@/libs/archiveUrl';

interface SubmenuItemProps {
  href: string;
  title: string;
  onCloseMenu: () => void;
}
const SubmenuItem: FC<SubmenuItemProps> = ({ href, title, onCloseMenu }) => {
  const navigate = useNavigate();

  const onClickLink = () => {
    console.log('href', href);
    onCloseMenu();
    navigate(`/${href}`);
  };

  if (href === Routes.ARCHIVE) {
    return (
      <Link
        href={archiveUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onCloseMenu}
      >
        {title}
      </Link>
    );
  }
  return (
    <Button variant="link" component="a" role="link" onClick={onClickLink}>
      {title}
    </Button>
  );
};

export default SubmenuItem;
