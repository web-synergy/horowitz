import { lazy } from 'react';

const LazyVirtuososCurrentArticle = lazy(
  () => import('./VirtuososCurrentArticle')
);

export default LazyVirtuososCurrentArticle;
