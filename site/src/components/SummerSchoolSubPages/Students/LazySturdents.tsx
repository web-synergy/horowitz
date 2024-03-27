import { lazy } from 'react';

const LazyStudents = lazy(() => import('./Students'));

export default LazyStudents;
