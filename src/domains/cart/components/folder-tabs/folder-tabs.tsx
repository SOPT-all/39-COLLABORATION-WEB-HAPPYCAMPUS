import type { Folder } from '@domains/cart/types/folder';

import FolderTab from './folder-tab';

import * as styles from './folder-tabs.css';

interface FolderTabsProps {
  folders: Folder[];
  selectedFolderId: number;
  onSelect: (folderId: number) => void;
}

const FolderTabs = ({
  folders,
  selectedFolderId,
  onSelect,
}: FolderTabsProps) => (
  <div className={styles.scroller}>
    <div role="tablist" className={styles.list}>
      {folders.map((folder) => (
        <FolderTab
          key={folder.folderId}
          folder={folder}
          selected={folder.folderId === selectedFolderId}
          onClick={() => onSelect(folder.folderId)}
        />
      ))}
    </div>
  </div>
);

export default FolderTabs;
