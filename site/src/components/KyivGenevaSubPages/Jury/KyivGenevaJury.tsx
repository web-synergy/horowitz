import { Container } from '@mui/material';
import { useParams, Navigate } from 'react-router-dom';
import PageTemplate from '@/components/Common/PageTemplate';
import Jury from '../Common/JuryBio';
import { Routes } from '@/types/routes.d';
import { content } from '@/assets/kyiv-geneva/KyivGenevaJury';

const KyivGenevaJury = () => {
  const { id } = useParams();
  const juryData = content.list.find((item) => item.id === id);

  if (!juryData) {
    return <Navigate to={'/404'} />;
  }

  return (
    <PageTemplate
      goBackUrl={`${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_JURY}`}
    >
      <Container>
        <Jury jury={juryData} />
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaJury;
