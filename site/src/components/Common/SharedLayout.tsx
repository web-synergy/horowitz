import { useEffect } from 'react';
import { Stack } from '@mui/material';
import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { lang, draft } from '../../libs/searchParamsKey';

import { useSettingsStore } from '@/store/settingStore';
import { useLiveQuery } from '@sanity/preview-kit';
import { settingsQuery } from '@/api/query';

const SharedLayout = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const langParam = searchParams.get(lang);
  const draftMod = searchParams.get(draft);
  const { contacts, fetchSettings, getPreviewSettings } = useSettingsStore();

  const [data] = useLiveQuery(null, settingsQuery, {
    language,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (data) {
      getPreviewSettings(data, language);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, data]);

  useEffect(() => {
    const existedContacts = contacts[language];

    const getData = async () => {
      await fetchSettings(language);
    };

    if (!existedContacts && !draftMod) {
      getData();
    }
  }, [contacts, fetchSettings, language, draftMod]);

  useEffect(() => {
    const needChangeParams = !langParam || langParam !== language;
    if (needChangeParams) {
      // setSearchParams({ [lang]:  }, { replace: true });
      setSearchParams(
        (prev) => {
          prev.set(lang, language);
          return prev;
        },
        { replace: true }
      );
    }
  }, [langParam, language, searchParams, setSearchParams]);

  return (
    <Stack minHeight="100vh">
      <Header />
      <Stack component="main" minHeight="100%" flex="1 1 auto">
        <Outlet />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default SharedLayout;
