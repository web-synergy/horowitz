import { PortableTextBlock } from "@portabletext/types";
import { IImage } from "./commonTypes";

export interface IMasterClass {
  _id: string;
  _createdAt: string;
  title: string;
  img?: IImage;
  video?: string;
  slug: string;
  description: PortableTextBlock[];
  count: number;
}
