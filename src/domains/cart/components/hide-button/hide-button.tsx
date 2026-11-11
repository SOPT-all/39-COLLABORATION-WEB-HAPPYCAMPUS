import { IcEye } from '@shared/assets/icons';

import * as styles from './hide-button.css';

interface HideButtonProps {
  materialTitle: string;
  onClick: () => void;
}

export const HideButton = ({ materialTitle, onClick }: HideButtonProps) => (
  <button
    type="button"
    className={styles.hideButton}
    aria-label={`${materialTitle} 숨기기`}
    onClick={onClick}
  >
    <IcEye aria-hidden />
    숨기기
  </button>
);
