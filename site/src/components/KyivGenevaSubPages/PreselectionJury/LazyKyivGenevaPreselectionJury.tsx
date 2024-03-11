import { lazy } from 'react';

const LazyKyivGenevaPreselectionJury = lazy(
  () => import('./KyivGenevaPreselectionJury')
);

export default LazyKyivGenevaPreselectionJury;
