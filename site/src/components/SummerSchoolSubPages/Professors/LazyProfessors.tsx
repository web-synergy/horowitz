import { lazy } from 'react';

const LazyProfessors = lazy(() => import('./Professors'));

export default LazyProfessors;
