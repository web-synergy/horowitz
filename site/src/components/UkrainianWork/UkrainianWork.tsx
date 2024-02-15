import { useEffect, useState } from 'react';

import { Container, Typography, Box, ListItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PortableText } from '@portabletext/react';
import PageTemplate from '../Common/PageTemplate';
import { Banner, List } from './styled';
import { Routes } from '@/types/routes.d';
import { useUkrWorksStore } from '@/store/ukrainianWorksStore';
import { components } from './components';

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

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <PageTemplate>
      <Banner />
      <Container sx={{ pt: { xs: 6, lg: 15 }, pb: { xs: 9, md: 12, lg: 15 } }}>
        <Typography variant='h1' textAlign='center' mb={{ xs: 3, md: 6 }}>
          {t(`navigation.${Routes.UKRAINIAN_WORKS}`)}
        </Typography>
        {works && (
          <>
            <Box sx={{ mb: { xs: 3, lg: 6 } }}>
              <PortableText value={works.text} components={components} />
            </Box>

            <List>
              {works.list.split('\n').map((item, index) => (
                <ListItem key={index}>
                  <Typography component={'span'}>{item}</Typography>
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Container>
    </PageTemplate>
  );
};

export default UkrainianComposition;
