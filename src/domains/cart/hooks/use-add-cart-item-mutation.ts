import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postCartItem } from '@domains/cart/api/post-cart-item';
import { QUERY_KEY } from '@shared/constants/query-key';
import { getApiErrorCode } from '@shared/utils/get-api-error-code';

export const useAddCartItemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCartItem,
    onSuccess: (_data, { postId }) =>
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: QUERY_KEY.cart.all,
        }),
        queryClient.invalidateQueries({
          queryKey: QUERY_KEY.material.detail(postId),
        }),
      ]),
    onError: (error, { postId }) => {
      if (getApiErrorCode(error) !== 'CART_ITEM_DUPLICATED') return;

      return queryClient.invalidateQueries({
        queryKey: QUERY_KEY.material.detail(postId),
      });
    },
  });
};
