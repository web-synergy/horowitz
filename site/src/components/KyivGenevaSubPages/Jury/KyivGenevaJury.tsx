import { Container } from '@mui/material';
import { useParams, Navigate } from 'react-router-dom';
import PageTemplate from '@/components/Common/PageTemplate';
import Jury from '../Common/Jury/Jury';
import { Routes } from '@/types/routes.d';
import { content } from '@/assets/kyiv-geneva/KyivGenevaJury';
import GoBackBtn from '@/components/Common/GoBackBtn';

const KyivGenevaJury = () => {
  const { id } = useParams();
  const juryData = content.list.find((item) => item.id === id);

  if (!juryData) {
    return <Navigate to={'/404'} />;
  }

  return (
    <PageTemplate>
      <Container sx={{ pt: { xs: 6, lg: 15 }, pb: { xs: 9, md: 12, lg: 15 } }}>
        <Jury jury={juryData} />
      </Container>
      <GoBackBtn href={`${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_JURY}`} />
    </PageTemplate>
  );
};

export default KyivGenevaJury;
