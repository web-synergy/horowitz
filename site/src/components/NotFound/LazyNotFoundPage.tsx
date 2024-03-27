import { lazy } from 'react';

const LazyNotFoundPage = lazy(() => import('./NotFoundPage'));

export default LazyNotFoundPage;
