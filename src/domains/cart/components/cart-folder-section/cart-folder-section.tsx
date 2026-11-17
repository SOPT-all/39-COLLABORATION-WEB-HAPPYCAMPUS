import { useState } from 'react';

import AddFolderButton from '@domains/cart/components/add-folder-button/add-folder-button';
import AddFolderModal from '@domains/cart/components/add-folder-modal/add-folder-modal';
import FolderTabList from '@domains/cart/components/folder-tabs/folder-tab-list';
import type { Folder } from '@domains/cart/types/folder';

import * as styles from './cart-folder-section.css';

interface CartFolderSectionProps {
  folders: Folder[];
  selectedFolderId: number;
  onSelectFolder: (folderId: number) => void;
  onAddFolder: (folderName: string) => void;
}

const CartFolderSection = ({
  folders,
  selectedFolderId,
  onSelectFolder,
  onAddFolder,
}: CartFolderSectionProps) => {
  const [isAddFolderModalOpen, setIsAddFolderModalOpen] = useState(false);

  const openAddFolderModal = () => setIsAddFolderModalOpen(true);
  const closeAddFolderModal = () => setIsAddFolderModalOpen(false);

  const handleConfirmAddFolder = (folderName: string) => {
    onAddFolder(folderName);
    closeAddFolderModal();
  };

  return (
    <div className={styles.folderSection}>
      <div className={styles.folderHeader}>
        <h3 className={styles.folderTitle}>폴더</h3>
        <AddFolderButton onClick={openAddFolderModal} />
      </div>
      <FolderTabList
        folders={folders}
        selectedFolderId={selectedFolderId}
        onSelect={onSelectFolder}
      />
      <AddFolderModal
        isOpen={isAddFolderModalOpen}
        onClose={closeAddFolderModal}
        onConfirm={handleConfirmAddFolder}
      />
    </div>
  );
};

export default CartFolderSection;
