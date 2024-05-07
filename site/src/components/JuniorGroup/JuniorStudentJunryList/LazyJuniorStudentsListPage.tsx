import { lazy } from 'react';

const LazyJuniorStudentsListPage = lazy(
  () => import('./JuniorStudentsJuryListPage')
);

export default LazyJuniorStudentsListPage;
