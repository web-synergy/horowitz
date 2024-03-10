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
          paddingTop: { xs: '100px', md: '130px', lg: 20 },
          paddingBottom: { xs: '46px', md: 10, lg: '100px' },
          textAlign: 'center',
        }}
      >
        <Wrapper>
          <MainTitle>404</MainTitle>
        </Wrapper>
        <Typography
          component="h2"
          variant="h2"
          mb={{ xs: '6px', md: 2, lg: '12px' }}
        >
          {t(`notFound.${NotFound.TITLE}`)}
        </Typography>
        <Typography component={'p'} variant="subhead" mb={{ xs: 2, md: 5 }}>
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
