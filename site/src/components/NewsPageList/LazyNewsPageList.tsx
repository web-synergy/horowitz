import { lazy } from 'react';

const LazyNewsPageList = lazy(() => import('./NewsPageList'));

export default LazyNewsPageList;
