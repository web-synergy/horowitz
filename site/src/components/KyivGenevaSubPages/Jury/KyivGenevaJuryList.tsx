import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PageTemplate from '@/components/Common/PageTemplate';
import JuryListItem from '../Common/JuryListItem';
import { content } from '@/assets/kyiv-geneva/KyivGenevaJury';
import { Routes } from '@/types/routes.d';
import GridTemplate from '@/components/Templates/GridTemplate';

const KyivGenevaJuryList = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  return (
    <PageTemplate goBackUrl={Routes.KYIV_GENEVA}>
      <Container>
        <Typography variant="h1" mb={{ xs: 3, md: 5, lg: 6 }}>
          {t(`navigation.${Routes.KYIV_GENEVA_JURY}`)}
        </Typography>
        <Typography
          sx={{
            display: 'inline-block',
            textAlign: 'justify',
            columnCount: { xs: 1, lg: 2 },
            columnGap: 3,
            mb: { xs: 3, md: 5, lg: 6 },
          }}
        >
          {language === 'ua' ? content.text.ua : content.text.en}
        </Typography>
        <GridTemplate list={content.list} gridItem={JuryListItem} />
      </Container>
    </PageTemplate>
  );
};

export default KyivGenevaJuryList;
