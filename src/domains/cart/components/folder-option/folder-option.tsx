import { IcCheck, IcFile } from '@shared/assets/icons';

import * as styles from './folder-option.css';

interface FolderOptionProps {
  folderName: string;
  isDefault: boolean;
  selected: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const FolderOption = ({
  folderName,
  isDefault,
  selected,
  disabled = false,
  onClick,
}: FolderOptionProps) => {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={selected}
      onClick={onClick}
      className={styles.folderOption({ selected, disabled })}
    >
      <IcCheck
        width={24}
        height={24}
        aria-hidden
        className={styles.checkIcon({ selected, disabled })}
      />
      <IcFile
        width={18}
        height={18}
        aria-hidden
        className={styles.fileIcon({ disabled })}
      />
      <span>{folderName}</span>
      {isDefault && <span className={styles.defaultBadge}>기본</span>}
    </button>
  );
};

export default FolderOption;
