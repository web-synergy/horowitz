import { lazy } from 'react';

const LazyMainPage = lazy(() => import('./MainPage'));

export default LazyMainPage;
