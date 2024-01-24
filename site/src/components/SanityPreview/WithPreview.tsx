/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSearchParams } from 'react-router-dom';

import { Suspense, lazy } from 'react';
import { token } from '../../config/sanity/client';
import SharedLayout from '../Common/SharedLayout';
import { draft } from '@/libs/searchParamsKey';
import Loader from '../Common/Loader';
const PreviewProvider = lazy(() => import('./PreviewProvider'));

export default function WithPreview() {
  const [searchParams, _] = useSearchParams();

  const previewDrafts = searchParams.get(draft) || '';

  return (
    <>
      {previewDrafts ? (
        <Suspense fallback={<Loader />}>
          <PreviewProvider token={token!}>
            <SharedLayout />
          </PreviewProvider>
        </Suspense>
      ) : (
        <SharedLayout />
      )}
    </>
  );
}
