import { lazy } from 'react';

const LazyOtherGroupConditionsPage = lazy(
  () => import('./OtherGroupConditionsPage')
);

export default LazyOtherGroupConditionsPage;
