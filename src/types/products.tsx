import { StaticImageData } from "next/image";

export type Product = {
  title: string;
  restricted: boolean;
  description: string;
  thumbnail: StaticImageData;
  images: StaticImageData[] | string[];
  href: string;
  slug?: string;
  stack?: string[];
  responsibility?: string[];
  features?: string[];
  content?: React.ReactNode | string;
};
