import PageTemplate from '../Common/PageTemplate';
import { Container, Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Banner, Title, Overlay } from './styled';
import SeoComponent from '../Common/SEO';
import { Routes } from '@/types/routes.d';

import { archiveUrl } from '@/libs/archiveUrl';

const ArchivePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <SeoComponent
        canonicalUrl={Routes.ARCHIVE}
        title={t(`navigation.${Routes.ARCHIVE}`)}
      />
      <PageTemplate mode="dark" padding={false}>
        <Banner>
          <Overlay />
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
    </>
  );
};

export default ArchivePage;
