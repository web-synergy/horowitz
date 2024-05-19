import { useEffect } from 'react';

import { Container, Typography, Box, ListItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PortableText } from '@portabletext/react';
import PageTemplate from '../Common/PageTemplate';
import { List } from './styled';
import { Routes } from '@/types/routes.d';
import { useUkrWorksStore } from '@/store/ukrainianWorksStore';
import { components } from './components';
import MainBanner from '../Common/MainBanner';
import { ukrWorksQuery } from '@/api/query';
import { useLiveQuery } from '@sanity/preview-kit';
import Loader from '../Common/Loader';

const UkrainianComposition = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { works, fetchWorks, requestLang, isLoading } = useUkrWorksStore();

  useEffect(() => {
    if (language === requestLang) return;

    fetchWorks(language);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const [data] = useLiveQuery(works, ukrWorksQuery, {
    language,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {data && <MainBanner banner={data?.banner} />}
      <PageTemplate>
        {data && (
          <Container>
            <Typography
              variant="h1"
              textAlign="center"
              mb={{ xs: 3, md: 5, lg: 6 }}
              maxWidth={{ xs: '80%' }}
              mx="auto"
            >
              {t(`navigation.${Routes.UKRAINIAN_WORKS}`)}
            </Typography>

            <Box sx={{ mb: { xs: 3, md: 5, lg: 6 } }}>
              <PortableText value={data.text} components={components} />
            </Box>

            <List>
              {data.list?.split('\n').map((item, index) => (
                <ListItem key={index}>
                  <Typography component={'span'}>{item}</Typography>
                </ListItem>
              ))}
            </List>
          </Container>
        )}
      </PageTemplate>
    </>
  );
};

export default UkrainianComposition;
