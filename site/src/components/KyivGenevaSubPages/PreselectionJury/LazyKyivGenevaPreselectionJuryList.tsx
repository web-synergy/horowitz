import { lazy } from 'react';

const LazyKyivGenevaPreselectionJuryList = lazy(
  () => import('./KyivGenevaPreselectionJuryList')
);

export default LazyKyivGenevaPreselectionJuryList;
