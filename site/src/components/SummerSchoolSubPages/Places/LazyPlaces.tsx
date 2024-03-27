import { lazy } from 'react';

const LazyPlaces = lazy(() => import('./Places'));

export default LazyPlaces;
