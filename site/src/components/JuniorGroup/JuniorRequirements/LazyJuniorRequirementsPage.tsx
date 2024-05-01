import { lazy } from 'react';

const LazyJuniorRequirementsPage = lazy(
  () => import('./JuniorRequirementsPage')
);

export default LazyJuniorRequirementsPage;
