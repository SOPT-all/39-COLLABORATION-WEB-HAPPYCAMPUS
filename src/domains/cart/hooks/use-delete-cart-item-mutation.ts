import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteCartItem } from '@domains/cart/api/delete-cart-item';
import { QUERY_KEY } from '@shared/constants/query-key';

export const useDeleteCartItemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCartItem,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.cart.all,
      }),
  });
};
