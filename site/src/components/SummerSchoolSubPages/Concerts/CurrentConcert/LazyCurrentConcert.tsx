import { lazy } from 'react';

const LazyCurrentConcert = lazy(() => import('./CurrentConcert'));

export default LazyCurrentConcert;
