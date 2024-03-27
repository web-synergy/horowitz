import { lazy } from 'react';

const LazyProfessor = lazy(() => import('./Professor'));

export default LazyProfessor;
