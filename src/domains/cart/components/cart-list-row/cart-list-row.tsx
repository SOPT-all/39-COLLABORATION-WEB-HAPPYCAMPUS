import { IcEyeoff } from '@shared/assets/icons';
import Checkbox from '@shared/ui/checkbox/checkbox';

import * as styles from './cart-list-row.css';

interface CartListRowProps {
  title: string;
  coverImageUrl: string;
  description: string;
  price: number;
  savedDate: string;
  isHidden?: boolean;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  onDelete: () => void;
}

const CartListRow = ({
  title,
  coverImageUrl,
  description,
  price,
  savedDate,
  isHidden = false,
  checked,
  onCheckedChange,
  onDelete,
}: CartListRowProps) => {
  return (
    <tr className={styles.cartListRow}>
      <td className={styles.checkCell}>
        {isHidden ? (
          <IcEyeoff
            width={16}
            height={16}
            role="img"
            aria-label="비교하기에서 숨긴 자료"
            className={styles.hiddenIcon}
          />
        ) : (
          <Checkbox
            checked={checked}
            onChange={onCheckedChange}
            ariaLabel={`${title} 구매 목록에 담기`}
          />
        )}
      </td>
      <td className={styles.infoCell}>
        <div className={styles.infoContainer}>
          <img src={coverImageUrl} alt="" className={styles.thumbnail} />
          <div className={styles.textContainer}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </td>
      <td className={styles.priceCell}>{price.toLocaleString('ko-KR')}원</td>
      <td className={styles.savedDateCell}>{savedDate}</td>
      <td className={styles.deleteCell}>
        <button
          type="button"
          onClick={onDelete}
          aria-label={`${title} 구매 목록에서 삭제`}
          className={styles.deleteButton}
        >
          삭제
        </button>
      </td>
    </tr>
  );
};

export default CartListRow;
