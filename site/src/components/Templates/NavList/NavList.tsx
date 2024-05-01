import { Box, Button, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { BgImage, GridBox } from './styled';
import { NavItemType } from '@/types/routes.d';

type NavListProps = {
  linksList: NavItemType[];
};

const NavList: FC<NavListProps> = ({ linksList }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onButtonClick = (path: string) => {
    navigate(path);
  };
  return (
    <Box sx={{ position: 'relative' }}>
      <BgImage />
      <Container>
        <GridBox>
          {linksList.map((link) => (
            <Button
              key={link.title}
              disabled={!link.isActive}
              role="link"
              onClick={() => onButtonClick(link.title)}
              sx={{
                '&.MuiButton-root': {
                  paddingLeft: 1,
                  paddingRight: 1,
                },
              }}
            >
              {t(`navigation.${link.title}`)}
            </Button>
          ))}
        </GridBox>
      </Container>
    </Box>
  );
};

export default NavList;
