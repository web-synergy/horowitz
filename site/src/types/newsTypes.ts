import { PortableTextBlock } from '@portabletext/types';
export interface INews {
  _id: string;
  _createdAt: string;
  title: string;
  img: string;
  slug: string;
  description: PortableTextBlock[];
  shortDescription: string;
  date: string;
}
