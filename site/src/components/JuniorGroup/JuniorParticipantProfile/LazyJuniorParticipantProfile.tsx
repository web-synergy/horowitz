import { lazy } from 'react';

const LazyJuniorParticipantProfilePage = lazy(
  () => import('./JuniorParticipantProfile')
);

export default LazyJuniorParticipantProfilePage;
