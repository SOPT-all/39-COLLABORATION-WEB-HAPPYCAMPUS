import type { DefaultCategoryType } from '@shared/constants/default-category';

export interface CartItem {
  cartItemId: number;
  postId: number;
  category: DefaultCategoryType;
  title: string;
  coverImageUrl: string | null;
  description: string;
  price: number;
  savedYear: number;
  pageCount: number;
  fileType: string;
  tableOfContents: string;
}

export interface CartItemsPage {
  content: CartItem[];
}
