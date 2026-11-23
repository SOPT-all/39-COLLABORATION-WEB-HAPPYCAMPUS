import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postFolder } from '@domains/cart/api/post-folder';
import { QUERY_KEY } from '@shared/constants/query-key';

export const useCreateFolderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postFolder,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.folders.all,
      }),
  });
};
