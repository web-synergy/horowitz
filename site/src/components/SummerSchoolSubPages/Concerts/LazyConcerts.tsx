import { lazy } from 'react';

const LazyConcerts = lazy(() => import('./ConcertsList/ConcertsList'));

export default LazyConcerts;
