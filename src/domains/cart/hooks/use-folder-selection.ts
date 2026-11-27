import { useState } from 'react';

import { useAddFolderItemsMutation } from '@domains/cart/hooks/use-add-folder-items-mutation';
import { useDeleteFolderItemMutation } from '@domains/cart/hooks/use-delete-folder-item-mutation';

const FOLDER_SAVE_ERROR_MESSAGE = '저장에 실패했습니다. 다시 시도해주세요.';

export const useFolderSelection = (cartItemId: number | null) => {
  const [selectedFolderIds, setSelectedFolderIds] = useState<number[]>([]);
  const { mutate: addFolderItems, isPending: isFolderSaving } =
    useAddFolderItemsMutation();
  const { mutate: deleteFolderItem, isPending: isFolderDeleting } =
    useDeleteFolderItemMutation();

  const selectFolder = (folderId: number) => {
    setSelectedFolderIds((prev) => [...prev, folderId]);
  };

  const unselectFolder = (folderId: number) => {
    setSelectedFolderIds((prev) => prev.filter((id) => id !== folderId));
  };

  const toggleFolder = (folderId: number, checked: boolean) => {
    if (isFolderSaving || isFolderDeleting || cartItemId === null) return;

    if (!checked) {
      unselectFolder(folderId);

      deleteFolderItem(
        { folderId, cartItemId },
        {
          onError: () => {
            alert(FOLDER_SAVE_ERROR_MESSAGE);
            selectFolder(folderId);
          },
        },
      );
      return;
    }

    selectFolder(folderId);

    addFolderItems(
      { folderId, cartItemIds: [cartItemId] },
      {
        onError: () => {
          alert(FOLDER_SAVE_ERROR_MESSAGE);
          unselectFolder(folderId);
        },
      },
    );
  };

  return {
    selectedFolderIds,
    resetSelectedFolderIds: setSelectedFolderIds,
    toggleFolder,
  };
};
