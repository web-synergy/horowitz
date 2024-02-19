import { IBanner } from './bannerType';
import { PortableTextBlock } from '@portabletext/types';

export interface IUkrWorks {
  banner: IBanner;
  text: PortableTextBlock[];
  list: string;
}
