import PageTemplate from '../Common/PageTemplate';
import { Container, Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Banner, Title } from './styled';

import { archiveUrl } from '@/libs/archiveUrl';

const ArchivePage = () => {
  const { t } = useTranslation();
  return (
    <PageTemplate mode="dark">
      <Banner>
        <Container sx={{ py: { xs: 9, md: 20 } }}>
          <Title component="h1">{t('archive.title')}</Title>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              LinkComponent={'a'}
              href={archiveUrl}
              target="_blank"
              sx={{
                minWidth: 288,
              }}
            >
              {t('archive.btn')}
            </Button>
          </Box>
        </Container>
      </Banner>
    </PageTemplate>
  );
};

export default ArchivePage;
