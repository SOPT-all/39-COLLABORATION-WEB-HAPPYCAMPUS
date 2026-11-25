import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postFolderItems } from '@domains/cart/api/post-folder-items';
import { QUERY_KEY } from '@shared/constants/query-key';

export const useAddFolderItemsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postFolderItems,
    onSuccess: () =>
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: QUERY_KEY.cart.all,
        }),
        queryClient.invalidateQueries({
          queryKey: QUERY_KEY.folders.all,
        }),
        queryClient.invalidateQueries({
          queryKey: QUERY_KEY.material.all,
        }),
      ]),
  });
};
