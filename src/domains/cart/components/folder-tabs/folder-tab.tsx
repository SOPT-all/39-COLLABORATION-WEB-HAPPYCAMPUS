import * as styles from './folder-tab.css';

interface FolderTabProps {
  name: string;
  itemCount: number;
  selected: boolean;
  onClick: () => void;
}

const FolderTab = ({ name, itemCount, selected, onClick }: FolderTabProps) => (
  <button
    type="button"
    role="tab"
    aria-selected={selected}
    aria-label={`${name} ${itemCount}개`}
    className={styles.tab({ selected })}
    onClick={onClick}
  >
    <span>{name}</span>
    <span className={styles.count({ selected })}>{itemCount}</span>
  </button>
);

export default FolderTab;
