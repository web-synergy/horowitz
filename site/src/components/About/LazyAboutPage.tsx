import { lazy } from 'react';

const LazyAboutPage = lazy(() => import('./AboutPage'));

export default LazyAboutPage;
