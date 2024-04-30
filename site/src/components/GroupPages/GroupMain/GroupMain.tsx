import { FC } from 'react';
import { Container, Typography } from '@mui/material';
import PageTemplate from '@/components/Common/PageTemplate';
import { NavItemType } from '@/types/routes.d';
import GoBackBtn from '@/components/Common/GoBackBtn';
import NavList from '@/components/Templates/NavList/NavList';

interface GroupMainPageProps {
  title: string;
  navList: NavItemType[];
  goBackLink: string;
}

const GroupMainPage: FC<GroupMainPageProps> = ({
  title,
  navList,
  goBackLink,
}) => {
  return (
    <>
      <PageTemplate>
        <Container>
          <Typography variant="h1" mb={{ xs: 3, md: 5, lg: 6 }}>
            {title}
          </Typography>
        </Container>
        <NavList linksList={navList} />
      </PageTemplate>
      <GoBackBtn href={goBackLink} />
    </>
  );
};

export default GroupMainPage;
