import { IcReset } from '@shared/assets/icons';
import Checkbox from '@shared/ui/checkbox/checkbox';

import * as styles from './cart-compare-toolbar.css';

interface CartCompareToolbarProps {
  isAllSelected: boolean;
  onSelectAllChange: (checked: boolean) => void;
  onResetHidden: () => void;
  isResetDisabled?: boolean;
}

const CartCompareToolbar = ({
  isAllSelected,
  onSelectAllChange,
  onResetHidden,
  isResetDisabled = false,
}: CartCompareToolbarProps) => {
  return (
    <div className={styles.container}>
      <Checkbox checked={isAllSelected} onChange={onSelectAllChange}>
        전체 선택
      </Checkbox>

      <button
        type="button"
        className={styles.resetButton}
        onClick={onResetHidden}
        disabled={isResetDisabled}
      >
        숨김 초기화
        <span className={styles.resetIcon}>
          <IcReset aria-hidden width={16} height={16} />
        </span>
      </button>
    </div>
  );
};

export default CartCompareToolbar;
