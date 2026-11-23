import type { CartItemsPage } from '@domains/cart/types/cart';
import { api } from '@shared/api/instance';
import type { DefaultCategoryType } from '@shared/constants/default-category';
import { USER_ID } from '@shared/constants/user';

export interface GetCartItemsParams {
  category?: DefaultCategoryType;
  folderId?: number;
}

export const getCartItems = async ({
  category,
  folderId,
}: GetCartItemsParams) => {
  const searchParams = new URLSearchParams();
  if (category) searchParams.set('category', category);
  if (folderId !== undefined) searchParams.set('folderId', String(folderId));

  const { content } = await api
    .get(`users/${USER_ID}/cart-items`, { searchParams })
    .json<CartItemsPage>();

  return content;
};
