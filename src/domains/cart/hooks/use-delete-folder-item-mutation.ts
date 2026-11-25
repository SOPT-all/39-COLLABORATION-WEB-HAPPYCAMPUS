import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteFolderItem } from '@domains/cart/api/delete-folder-item';
import { QUERY_KEY } from '@shared/constants/query-key';

export const useDeleteFolderItemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFolderItem,
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
