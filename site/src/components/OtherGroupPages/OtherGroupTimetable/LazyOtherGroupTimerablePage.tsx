import { lazy } from 'react';

const LazyOtherGroupTimerablePage = lazy(
  () => import('./OtherGroupTimetablePage')
);

export default LazyOtherGroupTimerablePage;
