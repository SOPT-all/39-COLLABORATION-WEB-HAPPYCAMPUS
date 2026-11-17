export interface CartItem {
  cartItemId: number;
  postId: number;
  title: string;
  coverImageUrl: string | null;
  description: string;
  price: number;
  savedYear: number;
  pageCount: number;
  fileType: string;
  tableOfContents: string;
}
