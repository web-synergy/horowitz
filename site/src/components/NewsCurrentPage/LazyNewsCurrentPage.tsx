import { lazy } from 'react';

const LazyNewsCurrentPage = lazy(() => import('./NewsCurrentPage'));

export default LazyNewsCurrentPage;
