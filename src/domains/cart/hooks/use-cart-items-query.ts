import { keepPreviousData, useQuery } from '@tanstack/react-query';

import {
  getCartItems,
  type GetCartItemsParams,
} from '@domains/cart/api/get-cart-items';
import { QUERY_KEY } from '@shared/constants/query-key';

export const useCartItemsQuery = (params: GetCartItemsParams) =>
  useQuery({
    queryKey: QUERY_KEY.cart.list(params),
    queryFn: () => getCartItems(params),
    placeholderData: keepPreviousData,
  });
