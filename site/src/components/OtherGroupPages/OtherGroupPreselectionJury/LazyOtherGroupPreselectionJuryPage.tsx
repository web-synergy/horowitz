import { lazy } from 'react';

const LazyOtherGroupPreselectionJuryPage = lazy(
  () => import('./OtherGroupPreselectionJuryPage')
);

export default LazyOtherGroupPreselectionJuryPage;
