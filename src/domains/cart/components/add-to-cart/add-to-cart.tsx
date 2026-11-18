import { useState } from 'react';
import { useNavigate } from 'react-router';

import AddFolderModal from '@domains/cart/components/add-folder-modal/add-folder-modal';
import CartEntry from '@domains/cart/components/cart-entry/cart-entry';
import FolderSelectModal from '@domains/cart/components/folder-select-modal/folder-select-modal';
import { FOLDER_MOCK } from '@domains/cart/constants/folder-mock';
import type { Folder } from '@domains/cart/types/folder';
import type { DefaultCategoryType } from '@shared/constants/default-category';
import { ROUTE_PATH } from '@shared/constants/path';

interface AddToCartProps {
  category: DefaultCategoryType;
}

const AddToCart = ({ category }: AddToCartProps) => {
  const navigate = useNavigate();

  const [isInCart, setIsInCart] = useState<boolean>(false);
  const [isFolderSelectModalOpen, setIsFolderSelectModalOpen] =
    useState<boolean>(false);
  const [isAddFolderModalOpen, setIsAddFolderModalOpen] =
    useState<boolean>(false);
  const [folders, setFolders] = useState<Folder[]>(FOLDER_MOCK);
  const [selectedFolderIds, setSelectedFolderIds] = useState<number[]>([]);

  const navigateToCompare = () => {
    void navigate({
      pathname: ROUTE_PATH.CART,
      search: `?view=compare&category=${category}`,
    });
  };

  const handleAddToCartClick = () => {
    if (isFolderSelectModalOpen) {
      setIsFolderSelectModalOpen(false);
      return;
    }

    if (
      isInCart &&
      !confirm('이미 담긴 자료입니다. 다른 폴더에 추가하시겠어요?')
    ) {
      return;
    }

    setIsInCart(true);
    setIsFolderSelectModalOpen(true);
  };

  const handleCompareLinkClick = () => {
    if (isInCart) {
      navigateToCompare();
    } else {
      handleAddToCartClick();
    }
  };

  const handleFolderToggle = (folderId: number, checked: boolean) => {
    if (checked) {
      setSelectedFolderIds((prev) => [...prev, folderId]);
    } else {
      setSelectedFolderIds((prev) => prev.filter((id) => id !== folderId));
    }
  };

  const handleFolderCreate = (folderName: string) => {
    const newFolder: Folder = {
      folderId: Date.now(), // TODO: 서버 고유 ID로 변경 필요
      name: folderName,
      itemCount: 1,
    };

    setFolders((prev) => [...prev, newFolder]);
    setSelectedFolderIds((prev) => [...prev, newFolder.folderId]);
    setIsAddFolderModalOpen(false);
  };

  return (
    <>
      <CartEntry
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
      />
    </>
  );
};

export default AddToCart;
