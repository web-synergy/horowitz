import { createClient, QueryParams } from '@sanity/client';

export const token = import.meta.env.VITE_SANITY_SECRET_TOKEN;
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;

export const client = createClient({
  projectId: projectId,
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
  perspective: 'published',
  ignoreBrowserTokenWarning: true,
});

const DEFAULT_PARAMS = {} as QueryParams;
export async function sanityFetch<T>(
  query: string,
  params = DEFAULT_PARAMS,
  draft = false
): Promise<T> {
  const secretToken = draft ? token : '';
  if (draft && secretToken) {
    throw new Error(
      'The `VITE_SANITY_SECRET_TOKEN` environment variable is required.'
    );
  }

  const perspective = draft ? 'previewDrafts' : 'published';

  if (draft) {
    return client
      .withConfig({ token: token, perspective: perspective, useCdn: false })
      .fetch<T>(query, params);
  }

  return client.fetch<T>(query, params);
}

export const clientFile = createClient({
  projectId: 'oqxqohoj',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',

  ignoreBrowserTokenWarning: false,
});
