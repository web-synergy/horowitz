import PageTemplate from '../Common/PageTemplate';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NotFound, Buttons } from '@/types/translation.d';
import { MainTitle, Wrapper } from './styled';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <PageTemplate padding={false}>
      <Container
        sx={{
          paddingTop: { xs: '100px', md: '132px', lg: 20 },
          paddingBottom: { xs: 6, md: 9, lg: 10 },
          textAlign: 'center',
        }}
      >
        <Wrapper>
          <MainTitle>404</MainTitle>
        </Wrapper>
        <Typography component="h2" variant="h2" mb={{ xs: 1, md: 2 }}>
          {t(`notFound.${NotFound.TITLE}`)}
        </Typography>
        <Typography
          component={'p'}
          variant="subhead"
          mb={{ xs: 5, md: 4, lg: 5 }}
        >
          {t(`notFound.${NotFound.TEXT}`)}
        </Typography>
        <Button component={Link} to={'/'}>
          {t(`buttons.${Buttons.GO_HOME}`)}
        </Button>
      </Container>
    </PageTemplate>
  );
};

export default NotFoundPage;
