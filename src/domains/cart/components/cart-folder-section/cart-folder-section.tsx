import { useState } from 'react';

import AddFolderButton from '@domains/cart/components/add-folder-button/add-folder-button';
import AddFolderModal from '@domains/cart/components/add-folder-modal/add-folder-modal';

import * as styles from './cart-folder-section.css';

const CartFolderSection = () => {
  const [isAddFolderModalOpen, setIsAddFolderModalOpen] = useState(false);

  const openAddFolderModal = () => setIsAddFolderModalOpen(true);
  const closeAddFolderModal = () => setIsAddFolderModalOpen(false);

  return (
    <div>
      <div className={styles.folderHeader}>
        <h3 className={styles.folderTitle}>폴더</h3>
        <AddFolderButton onClick={openAddFolderModal} />
      </div>
      <AddFolderModal
        isOpen={isAddFolderModalOpen}
        onClose={closeAddFolderModal}
        onConfirm={closeAddFolderModal}
      />
    </div>
  );
};

export default CartFolderSection;
