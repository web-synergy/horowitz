import { sanityFetch } from '@/config/sanity/client';
import { QueryParams } from '@sanity/client';
import { useEffect, useState } from 'react';
interface FetchState<T> {
  responseData: T | null;
  loading: boolean;
  error: string | unknown;
}

export const useFetch = <T>(
  query: string,
  params?: QueryParams
): FetchState<T> => {
  const [responseData, setResponseData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | unknown>(null);

  const paramsValues = Object.values(params ? params : {});

  useEffect(() => {
    const cancelableRequest: { cancel: () => void } | null = {
      cancel: () => {},
    };
    const fetchData = async () => {
      try {
        const response = await sanityFetch<T>(query, params);
        if (!response) {
          throw new Error('Could not fetch the data from that resource');
        }
        setResponseData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      if (cancelableRequest) {
        cancelableRequest.cancel();
      }
    };
  }, [query, ...paramsValues]);

  return { responseData, loading, error };
};
