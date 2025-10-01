import { buildFileUrl, parseAssetId } from '@sanity/asset-utils';
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;

export const fileUrl = (ref: string) => {
  const part = parseAssetId(ref);
  return buildFileUrl(part, { projectId: projectId, dataset: 'production' });
};
