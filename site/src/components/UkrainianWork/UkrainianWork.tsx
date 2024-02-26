import { useEffect, useState } from 'react';

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

const UkrainianComposition = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { works, fetchWorks, requestLang } = useUkrWorksStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (language === requestLang) return;
    setLoading(true);

    fetchWorks(language);
    setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const [data] = useLiveQuery(works, ukrWorksQuery, {
    language,
  });

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <PageTemplate>
      {data && (
        <>
          <MainBanner banner={data?.banner} />
          <Container
            sx={{ pt: { xs: 6, lg: 15 }, pb: { xs: 9, md: 12, lg: 15 } }}>
            <Typography
              variant='h1'
              textAlign='center'
              mb={{ xs: 3, lg: 6 }}
              maxWidth={{ xs: '80%' }}
              mx='auto'>
              {t(`navigation.${Routes.UKRAINIAN_WORKS}`)}
            </Typography>

            <Box sx={{ mb: { xs: 3, lg: 6 } }}>
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
        </>
      )}
    </PageTemplate>
  );
};

export default UkrainianComposition;
