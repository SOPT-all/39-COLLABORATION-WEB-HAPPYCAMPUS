import type { Folder } from '@domains/cart/types/folder';

import FolderTab from './folder-tab';

import * as styles from './folder-tab-list.css';

interface FolderTabListProps {
  folders: Folder[];
  selectedFolderId: number;
  onSelect: (folderId: number) => void;
}

const FolderTabList = ({
  folders,
  selectedFolderId,
  onSelect,
}: FolderTabListProps) => (
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

export default FolderTabList;
