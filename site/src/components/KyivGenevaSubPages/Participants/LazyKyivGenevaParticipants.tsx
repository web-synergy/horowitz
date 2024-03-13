import { lazy } from 'react';

const LazyKyivGenevaParticipants = lazy(
  () => import('./KyivGenevaParticipants')
);

export default LazyKyivGenevaParticipants;
