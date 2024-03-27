import { lazy } from 'react';

const LazyPdfPage = lazy(() => import('./PdfPage'));

export default LazyPdfPage;
