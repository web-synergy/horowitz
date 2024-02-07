import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTemplate from '@/components/Common/PageTemplate';
import JuryList from '../Common/JuryList/JuryList';
import SvgSpriteIcon from '@/components/Common/SvgSpriteIcon';
import { content } from '@/assets/kyiv-geneva/jury/content';
import { Routes } from '@/types/routes.d';

const KyivGenevaJuryList = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  return (
    <PageTemplate>
      <Container sx={{ pt: { xs: 6, lg: 15 }, pb: { xs: 9, md: 12, lg: 15 } }}>
        <Typography variant="h1" mb={{ xs: 3, lg: 6 }}>
          {t('jury.title')}
        </Typography>
        <Typography
          sx={{
            display: 'inline-block',
            textAlign: 'justify',
            columnCount: { xs: 1, lg: 2 },
            columnGap: 3,
            mb: { xs: 3, md: 6 },
          }}
        >
          {language === 'ua' ? content.text.ua : content.text.en}
        </Typography>
        <JuryList juryList={content.list} />
        <Button
          variant="tertiary"
          component={Link}
          to={`/${Routes.KYIV_GENEVA}`}
          startIcon={
            <SvgSpriteIcon icon="arrow" sx={{ transform: 'rotate(90deg)' }} />
          }
          sx={{ mt: 6 }}
        >
          text
        </Button>
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaJuryList;
