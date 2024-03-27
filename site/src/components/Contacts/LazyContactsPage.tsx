import { lazy } from 'react';

const LazyContactsPage = lazy(() => import('./ContactsPage'));

export default LazyContactsPage;
