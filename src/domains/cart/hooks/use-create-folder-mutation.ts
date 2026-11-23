import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postFolder } from '@domains/cart/api/post-folder';
import { FOLDER_CREATE_ERROR_MESSAGE } from '@domains/cart/constants/folder-create';
import { QUERY_KEY } from '@shared/constants/query-key';
import { getApiErrorCode } from '@shared/utils/get-api-error-code';

export const useCreateFolderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postFolder,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.folders.all,
      }),
    onError: (error) => {
      alert(
        getApiErrorCode(error) === 'FOLDER_NAME_DUPLICATED'
          ? FOLDER_CREATE_ERROR_MESSAGE.duplicated
          : FOLDER_CREATE_ERROR_MESSAGE.failed,
      );
    },
  });
};
