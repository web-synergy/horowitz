import { lazy } from 'react';

const LazyOtherGroupParticipantsPage = lazy(
  () => import('./OtherGroupParticipantsPage')
);

export default LazyOtherGroupParticipantsPage;
