import type { Folder } from '@domains/cart/types/folder';

import * as styles from './folder-tab.css';

interface FolderTabProps {
  folder: Folder;
  selected: boolean;
  onClick: () => void;
}

const FolderTab = ({ folder, selected, onClick }: FolderTabProps) => (
  <button
    type="button"
    role="tab"
    aria-selected={selected}
    aria-label={`${folder.name} ${folder.itemCount}개`}
    className={styles.tab({ selected })}
    onClick={onClick}
  >
    <span>{folder.name}</span>
    <span className={styles.count({ selected })}>{folder.itemCount}</span>
  </button>
);

export default FolderTab;
