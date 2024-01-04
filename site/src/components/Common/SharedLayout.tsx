import { Stack } from '@mui/material';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import { lang, draft } from '../../libs/searchParamsKey';
import { lang } from '../../libs/searchParamsKey';
import { useEffect } from 'react';

const SharedLayout = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  // const previewDrafts = searchParams.get(draft);

  useEffect(() => {
    const langParam = searchParams.get(lang);
    if (!langParam) {
      setSearchParams({ [lang]: language });
    }
  }, []);

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
