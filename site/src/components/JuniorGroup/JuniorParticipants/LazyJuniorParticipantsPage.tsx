import { lazy } from 'react';

const LazyJuniorParticipantsPage = lazy(
  () => import('./JuniorParticipantsPage')
);

export default LazyJuniorParticipantsPage;
