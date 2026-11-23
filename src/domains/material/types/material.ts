import type { DefaultCategoryType } from '@shared/constants/default-category';

export interface MaterialDetail {
  postId: number;
  category: DefaultCategoryType;
  title: string;
  description: string;
  price: number;
  coverImageUrl: string | null;
  savedYear: number;
  fileType: string;
  pageCount: number;
  tableOfContents: string;
  content: string;
  imageUrls: string[];
  cartItemId: number | null;
  tag: string;
}
