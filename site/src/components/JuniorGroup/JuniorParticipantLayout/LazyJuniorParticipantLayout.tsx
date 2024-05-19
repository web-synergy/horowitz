import { lazy } from 'react';

const LazyJuniorParticipantLayout = lazy(
  () => import('./JuniorParticipantLayout')
);

export default LazyJuniorParticipantLayout;
