import { useState } from 'react';

import AddFolderButton from '@domains/cart/components/add-folder-button/add-folder-button';
import AddFolderModal from '@domains/cart/components/add-folder-modal/add-folder-modal';
import FolderTabList from '@domains/cart/components/folder-tabs/folder-tab-list';
import type { FolderTabItem, SelectedTab } from '@domains/cart/types/folder';

import * as styles from './cart-folder-section.css';

interface CartFolderSectionProps {
  tabs: FolderTabItem[];
  selectedTab: SelectedTab;
  onSelectTab: (tab: SelectedTab) => void;
  onAddFolder: (folderName: string, onSuccess: () => void) => void;
  isAddingFolder: boolean;
}

const CartFolderSection = ({
  tabs,
  selectedTab,
  onSelectTab,
  onAddFolder,
  isAddingFolder,
}: CartFolderSectionProps) => {
  const [isAddFolderModalOpen, setIsAddFolderModalOpen] = useState(false);

  const openAddFolderModal = () => setIsAddFolderModalOpen(true);
  const closeAddFolderModal = () => setIsAddFolderModalOpen(false);

  const handleConfirmAddFolder = (folderName: string) => {
    onAddFolder(folderName, closeAddFolderModal);
  };

  return (
    <div className={styles.folderSection}>
      <div className={styles.folderHeader}>
        <h3 className={styles.folderTitle}>폴더</h3>
        <AddFolderButton onClick={openAddFolderModal} />
      </div>
      <FolderTabList
        tabs={tabs}
        selectedTab={selectedTab}
        onSelect={onSelectTab}
      />
      <AddFolderModal
        isOpen={isAddFolderModalOpen}
        onClose={closeAddFolderModal}
        onConfirm={handleConfirmAddFolder}
        disabled={isAddingFolder}
      />
    </div>
  );
};

export default CartFolderSection;
