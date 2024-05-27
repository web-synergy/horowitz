import { lazy } from 'react';

const LazyOtherGroupRequirenmentsPage = lazy(
  () => import('./OtherGroupRequirementsPage')
);

export default LazyOtherGroupRequirenmentsPage;
