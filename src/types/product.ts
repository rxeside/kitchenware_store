export type Product = {
  id: number;
  title: string;
  article?: string;
  brand?: string;
  type?: string;
  material?: string;
  color?: string[];
  origin?: string;
  weight?: number;
  height?: number;
  length?: number;
  width?: number;
  volume?: number;
  reviews?: number;
  price?: number;
  discountedPrice?: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
