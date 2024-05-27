import { lazy } from 'react';

const LazyOtherGroupParticipantProfilePage = lazy(
  () => import('./OtherGroupParticipantProfilePage')
);

export default LazyOtherGroupParticipantProfilePage;
