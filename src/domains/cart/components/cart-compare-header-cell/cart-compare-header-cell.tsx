import HideButton from '@domains/cart/components/hide-button/hide-button';
import Checkbox from '@shared/ui/checkbox/checkbox';

import * as styles from './cart-compare-header-cell.css';

interface CartCompareHeaderCellProps {
  title: string;
  coverImageUrl: string | null;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  onHide: () => void;
}

const CartCompareHeaderCell = ({
  title,
  coverImageUrl,
  checked,
  onCheckedChange,
  onHide,
}: CartCompareHeaderCellProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.checkboxArea}>
        <Checkbox
          checked={checked}
          onChange={onCheckedChange}
          ariaLabel={`${title} 구매 선택`}
        />
      </div>

      {coverImageUrl ? (
        <img
          className={styles.cover}
          src={coverImageUrl}
          alt={`${title} 표지`}
        />
      ) : (
        <div className={styles.coverPlaceholder} aria-hidden>
          <span className={styles.coverTitle}>{title}</span>
        </div>
      )}

      <div className={styles.info}>
        <p className={styles.title} title={title}>
          {title}
        </p>
        <HideButton materialTitle={title} onClick={onHide} />
      </div>
    </div>
  );
};

export default CartCompareHeaderCell;
