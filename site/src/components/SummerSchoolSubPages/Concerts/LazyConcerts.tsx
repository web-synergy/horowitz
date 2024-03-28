import { lazy } from 'react';

const LazyConcerts = lazy(() => import('./Concerts'));

export default LazyConcerts;
