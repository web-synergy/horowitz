import { BannerType } from './bannerType';

import { PortableTextBlock } from '@portabletext/types';

export interface IHorowitzThirtyData {
  mainBanner: BannerType | null;
  content: PortableTextBlock[];
}
