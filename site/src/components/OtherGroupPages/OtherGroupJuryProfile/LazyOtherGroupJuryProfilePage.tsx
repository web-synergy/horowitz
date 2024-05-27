import { lazy } from 'react';

const LazyOtherGroupJuryProfilePage = lazy(
  () => import('./OtherGroupJuryProfilePage')
);

export default LazyOtherGroupJuryProfilePage;
