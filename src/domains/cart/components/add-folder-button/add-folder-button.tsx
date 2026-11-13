import { IcAdd } from '@shared/assets/icons';

import * as styles from './add-folder-button.css';

interface AddFolderButtonProps {
  onClick: () => void;
}

const AddFolderButton = ({ onClick }: AddFolderButtonProps) => (
  <button type="button" className={styles.addFolderButton} onClick={onClick}>
    <IcAdd width={18} height={18} aria-hidden />
    폴더 추가
  </button>
);

export default AddFolderButton;
