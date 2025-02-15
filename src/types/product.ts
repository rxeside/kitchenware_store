export type Product = {
  id: number;
  article: string;
  title: string;
  brand: string;
  category: string;
  type: string;
  origin: string;
  img?: {
    thumbnails?: string[];
    previews?: string[];
  };
  discountPrice: number;
  remainder: number;
};
