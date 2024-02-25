import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageTemplate from '@/components/Common/PageTemplate';
import JuryList from '../Common/JuryList/JuryList';
import { content } from '@/assets/kyiv-geneva/KyivGenevaJury';
import { Routes } from '@/types/routes.d';
import GoBackBtn from '@/components/Common/GoBackBtn';

const KyivGenevaJuryList = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  return (
    <PageTemplate>
      <Container sx={{ pt: { xs: 3, md: 6 }, pb: { xs: 9, md: 12, lg: 15 } }}>
        <Typography variant="h1" mb={{ xs: 3, lg: 6 }}>
          {t(`navigation.${Routes.KYIV_GENEVA_JURY}`)}
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
      </Container>
      <GoBackBtn href={Routes.KYIV_GENEVA} />
    </PageTemplate>
  );
};

export default KyivGenevaJuryList;
