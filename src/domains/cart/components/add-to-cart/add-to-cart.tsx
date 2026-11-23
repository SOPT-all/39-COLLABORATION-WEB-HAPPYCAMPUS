import { useState } from 'react';
import { useNavigate } from 'react-router';

import AddFolderModal from '@domains/cart/components/add-folder-modal/add-folder-modal';
import CartEntry from '@domains/cart/components/cart-entry/cart-entry';
import FolderSelectModal from '@domains/cart/components/folder-select-modal/folder-select-modal';
import { useAddCartItemMutation } from '@domains/cart/hooks/use-add-cart-item-mutation';
import { useAddFolderItemsMutation } from '@domains/cart/hooks/use-add-folder-items-mutation';
import { useCreateFolderMutation } from '@domains/cart/hooks/use-create-folder-mutation';
import { useFoldersQuery } from '@domains/cart/hooks/use-folders-query';
import type { DefaultCategoryType } from '@shared/constants/default-category';
import { ROUTE_PATH } from '@shared/constants/path';
import { getApiErrorCode } from '@shared/utils/get-api-error-code';

interface AddToCartProps {
  postId: number;
  category: DefaultCategoryType;
  cartItemId: number | null;
}

const AddToCart = ({ postId, category, cartItemId }: AddToCartProps) => {
  const navigate = useNavigate();

  const { mutate, isPending } = useAddCartItemMutation();
  const { mutate: addFolderItems, isPending: isFolderSaving } =
    useAddFolderItemsMutation();

  const isInCart = cartItemId !== null;
  const [isFolderSelectModalOpen, setIsFolderSelectModalOpen] =
    useState<boolean>(false);
  const [isAddFolderModalOpen, setIsAddFolderModalOpen] =
    useState<boolean>(false);
  const { data: folders = [] } = useFoldersQuery();
  const { mutate: createFolder, isPending: isFolderCreating } =
    useCreateFolderMutation();
  const [selectedFolderIds, setSelectedFolderIds] = useState<number[]>([]);

  const navigateToCompare = () => {
    void navigate({
      pathname: ROUTE_PATH.CART,
      search: `?view=compare&category=${category}`,
    });
  };

  const confirmAndOpenModal = () => {
    if (confirm('이미 담긴 자료입니다. 다른 폴더에 추가하시겠어요?')) {
      setIsFolderSelectModalOpen(true);
    }
  };

  const handleAddToCartClick = () => {
    if (isPending) return;

    if (isFolderSelectModalOpen) {
      setIsFolderSelectModalOpen(false);
      return;
    }

    if (isInCart) {
      confirmAndOpenModal();
      return;
    }

    mutate(
      { postId },
      {
        onSuccess: () => {
          setIsFolderSelectModalOpen(true);
        },
        onError: (error) => {
          if (getApiErrorCode(error) === 'CART_ITEM_DUPLICATED') {
            confirmAndOpenModal();
            return;
          }

          alert('장바구니 담기에 실패했습니다. 다시 시도해주세요.');
        },
      },
    );
  };

  const handleCompareLinkClick = () => {
    if (isInCart) {
      navigateToCompare();
    } else {
      handleAddToCartClick();
    }
  };

  const handleFolderToggle = (folderId: number, checked: boolean) => {
    if (isFolderSaving || cartItemId === null) return;

    if (!checked) {
      // TODO: 폴더에서 제외 API 호출 필요
      setSelectedFolderIds((prev) => prev.filter((id) => id !== folderId));
      return;
    }

    setSelectedFolderIds((prev) => [...prev, folderId]);

    addFolderItems(
      { folderId, cartItemIds: [cartItemId] },
      {
        onError: () => {
          alert('저장에 실패했습니다. 다시 시도해주세요.');
          setSelectedFolderIds((prev) => prev.filter((id) => id !== folderId));
        },
      },
    );
  };

  const handleFolderCreate = (folderName: string) => {
    createFolder(
      { name: folderName },
      {
        onSuccess: ({ folderId }) => {
          setIsAddFolderModalOpen(false);
          handleFolderToggle(folderId, true);
        },
      },
    );
  };

  return (
    <>
      <CartEntry
        disabled={isPending}
        isModalOpen={isFolderSelectModalOpen}
        onAddToCartClick={handleAddToCartClick}
        onLinkClick={handleCompareLinkClick}
      />
      <FolderSelectModal
        isOpen={isFolderSelectModalOpen}
        category={category}
        folders={folders}
        selectedFolderIds={selectedFolderIds}
        onFolderToggle={handleFolderToggle}
        onCreateFolderClick={() => setIsAddFolderModalOpen(true)}
        onClose={() => setIsFolderSelectModalOpen(false)}
        onCompareClick={navigateToCompare}
      />
      <AddFolderModal
        isOpen={isAddFolderModalOpen}
        onClose={() => setIsAddFolderModalOpen(false)}
        onConfirm={handleFolderCreate}
        disabled={isFolderCreating}
      />
    </>
  );
};

export default AddToCart;
