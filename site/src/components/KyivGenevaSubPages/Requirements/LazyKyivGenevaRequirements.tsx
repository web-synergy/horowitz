import { lazy } from 'react';

const LazyKyivGenevaRequirements = lazy(
  () => import('./KyivGenevaRequirements')
);

export default LazyKyivGenevaRequirements;
