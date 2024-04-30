import { lazy } from 'react';

const LazyJuniorStudentsListPage = lazy(
  () => import('./JuniorStudentsListPage')
);

export default LazyJuniorStudentsListPage;
