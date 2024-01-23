import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';
import { IImage } from '@/types/newsTypes';

const builder = imageUrlBuilder(client);

export function urlFor(source: IImage | string) {
  return builder.image(source);
}
