import { BannerType } from './bannerType';
import { PortableTextBlock } from '@portabletext/types';

export interface IUkrWorks {
  banner: BannerType;
  text: PortableTextBlock[];
  list: string;
}
