import { api } from '@shared/api/instance';
import { USER_ID } from '@shared/constants/user';

export interface PostFolderItemsRequest {
  folderId: number;
  cartItemIds: number[];
}

export const postFolderItems = async ({
  folderId,
  cartItemIds,
}: PostFolderItemsRequest): Promise<void> => {
  await api.post(`users/${USER_ID}/folders/${folderId}/cart-items`, {
    json: {
      cartItemIds,
    },
  });
};
