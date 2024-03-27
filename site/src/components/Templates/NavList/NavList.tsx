import { Button } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { LinksListStack } from './styled';

type ListItem = {
  title: string;
};

type NavListProps = {
  linksList: ListItem[];
  path?: string;
};

const NavList: FC<NavListProps> = ({ linksList, path }) => {
  const { t } = useTranslation();
  return (
    <LinksListStack>
      {linksList.map((navigation, i) => (
        <Button
          key={i}
          variant="primary"
          component={RouterLink}
          to={path ? `${path}/${navigation.title}` : navigation.title}
          sx={{
            width: {
              xs: 288,
              lg: 336,
            },
            height: {
              xs: 48,
              md: 60,
            },
            '&.MuiButton-root': {
              padding: '16px 0',
              fontSize: {
                xs: '16px',
                lg: '18px',
              },
            },
          }}
        >
          {t(`navigation.${navigation.title}`)}
        </Button>
      ))}
    </LinksListStack>
  );
};

export default NavList;
