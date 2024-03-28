import { lazy } from 'react';

const LazyConcertsList = lazy(() => import('./ConcertsList'));

export default LazyConcertsList;
