import { api } from '@shared/api/instance';
import { USER_ID } from '@shared/constants/user';

export interface DeleteFolderItemRequest {
  folderId: number;
  cartItemId: number;
}

export const deleteFolderItem = async ({
  folderId,
  cartItemId,
}: DeleteFolderItemRequest): Promise<void> => {
  await api.delete(
    `users/${USER_ID}/folders/${folderId}/cart-items/${cartItemId}`,
  );
};
