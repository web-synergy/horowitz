import { Container, Button } from '@mui/material';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTemplate from '@/components/Common/PageTemplate';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import Jury from '../Common/Jury/Jury';
import { Routes } from '@/types/routes.d';
import { content } from '@/assets/kyiv-geneva/jury/content';
import { Buttons } from '@/types/translation.d';

const KyivGenevaJury = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const juryData = content.list.find((item) => item.id === id);

  if (!juryData) {
    return <Navigate to={'/404'} />;
  }

  return (
    <PageTemplate>
      <Container sx={{ pt: { xs: 6, lg: 15 }, pb: { xs: 9, md: 12, lg: 15 } }}>
        <Jury jury={juryData} />
        <Button
          variant="tertiary"
          component={Link}
          to={`/${Routes.KYIV_GENEVA}/${Routes.KYIV_GENEVA_JURY}`}
          reloadDocument={true}
          startIcon={
            <SvgSpriteIcon icon="arrow" sx={{ transform: 'rotate(90deg)' }} />
          }
          sx={{ mt: 6 }}
        >
          {t(`buttons.${Buttons.GO_KG_JURY}`)}
        </Button>
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaJury;
