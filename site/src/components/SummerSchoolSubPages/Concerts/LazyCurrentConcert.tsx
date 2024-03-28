import { lazy } from 'react';

const LazyCurrentConcert = lazy(
  () => import('./CurrentConcert/CurrentConcert')
);

export default LazyCurrentConcert;
