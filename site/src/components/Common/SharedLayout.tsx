import { useEffect, useState } from 'react';
import { Stack, CircularProgress, Backdrop } from '@mui/material';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { lang } from '../../libs/searchParamsKey';

import { useSettingsStore } from '@/store';

const SharedLayout = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const langParam = searchParams.get(lang);
  const { contacts, fetchSettings } = useSettingsStore();

  useEffect(() => {
    const existedContacts = contacts[language];

    const getData = async () => {
      await fetchSettings(language);
      setLoader(false);
    };

    if (!existedContacts) {
      setLoader(true);
      getData();
    }
  }, [contacts, fetchSettings, language]);

  useEffect(() => {
    if (!langParam) {
      setSearchParams({ [lang]: language });
    }
  }, [langParam, language, searchParams, setSearchParams]);

  if (loader) {
    return (
      <Stack minHeight="100vh">
        <Backdrop open={loader}>
          <CircularProgress />
        </Backdrop>
      </Stack>
    );
  }
  return (
    <Stack minHeight="100vh">
      <Header />
      <Stack component="main" minHeight="100%" flex="1 1 auto">
        {/* {previewDrafts ? (
          <Suspense fallback={<h1>Loading...</h1>}>
            <PreviewProvider token={token!}>
              <Outlet />
            </PreviewProvider>
          </Suspense>
        ) : (
          <Outlet />
        )} */}
        <Outlet />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default SharedLayout;
