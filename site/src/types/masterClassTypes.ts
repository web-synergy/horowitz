import { IImage } from "./commonTypes";

export interface IMasterClass {
  _id: string;
  _createdAt: string;
  date: string;
  title: string;
  img?: IImage;
  video?: string;
  slug: string;
  description: string;
  count: number;
}
